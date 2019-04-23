import {
  IUser,
  IPutEditAccountRequest,
  IPutEditAccountResponse
} from '../utils';
import { User } from '../schemas';

export const putEditAccount = async (
  req: IPutEditAccountRequest,
  res: IPutEditAccountResponse
) => {
  let serverError: boolean = false;
  const {
    facebookId,
    newHouse,
    newDescription
  }: IPutEditAccountRequest = req.body;

  const user: IUser = await User.findOne(
    { facebookId },
    (err: string, user: IUser): IUser | string => {
      if (err) {
        serverError = true;
      } else {
        console.log(user);
        return user;
      }
    }
  );

  const reNamer: Function = (name: string, houseName: string): string => {
    const firstName: string[] = name.split(' ');
    return `${firstName[0]} ${houseName}`;
  };

  if (serverError) {
    return res.send({
      success: serverError,
      message: `Sorry, there was an issue editing your account.  Please try again later.`
    });
  } else {
    user.house = newHouse;
    user.description = newDescription;
    user.name = reNamer(user.name, newHouse.name);
    await user.save();

    return res.send({
      success: true,
      message: `Your account has been updated`,
      newName: user.name,
      newDescription: user.description,
      newHouse: user.house
    });
  }
};
