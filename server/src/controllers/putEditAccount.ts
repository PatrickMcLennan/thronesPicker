import {
  IUser,
  IPutEditAccountRequest,
  IPutEditAccountResponse
} from '../utils';
import { User } from '../schemas';

export const putEditAccount: Function = async (
  req: IPutEditAccountRequest,
  res: IPutEditAccountResponse
) => {
  let serverError: boolean = false;
  const { facebookId, newHouse, newDescription }: IPutEditAccountRequest = req;

  const user: IUser = await User.findOne(
    { facebookId },
    (err: string, user: IUser): IUser | string => {
      if (err) {
        serverError = true;
      } else {
        return user;
      }
    }
  );

  if (serverError) {
    return res.send({
      success: serverError,
      message: `Sorry, there was an issue editing your account.  Please try again later.`
    });
  } else {
    user.house = { ...newHouse };
    user.description = newDescription;
    user.name = `${user.name} ${user.house}`;
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
