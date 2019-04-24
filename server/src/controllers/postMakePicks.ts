import { IPostMakePicksRequest, IPostMakePicksResponse, IUser } from '../utils';
import { User } from '../schemas';

export const postMakePicks = async (
  req: IPostMakePicksRequest,
  res: IPostMakePicksResponse
) => {
  let serverError: boolean = false;
  const { facebookId, newPicks }: IPostMakePicksRequest = req.body;

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
    user.picks = { ...newPicks };
    await user.save();
    console.log(user);
    return res.send({
      success: true,
      message: `Picks have been submitted successfully`,
      picks: user.picks
    });
  }
};
