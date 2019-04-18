import { DocumentQuery } from 'mongoose';
import {
  IPostMakePicksRequest,
  IPostMakePicksResponseSuccess,
  IPostMakePicksResponseFailure,
  IUser
} from '../utils';
import { User } from '../schemas';

export const postMakePicks = async (
  req: IPostMakePicksRequest,
  res: IPostMakePicksResponseSuccess | IPostMakePicksResponseFailure
): Promise<IPostMakePicksResponseSuccess | IPostMakePicksResponseFailure> => {
  let serverError: boolean = false;
  const { facebookId, picks }: IPostMakePicksRequest = req.body;

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
      message: `Sorry - there was an issue submitting your picks at this time.  Please try again a little later.`
    });
  } else {
    user.picks = picks;
    await user.save();
    return res.send({
      success: true,
      message: `Picks have been submitted successfully`,
      picks: user.picks
    });
  }
};
