import { default as fetch } from 'node-fetch';
import { DocumentQuery } from 'mongoose';
import { User } from '../schemas';
import { IUser } from '../utils';
import {
  IPostLoginRequest,
  IPostLoginResponseSuccess,
  IPostLoginResponseFailure
} from '../utils';

export const postLogin = async (
  req: IPostLoginRequest,
  res: IPostLoginResponseSuccess | IPostLoginResponseFailure
) => {
  const { accessToken, userID } = req.body;

  let loginError: boolean = false;

  const otherUsers: DocumentQuery<IUser[], IUser> = User.find(
    {},
    (allUsers: IUser[]): IUser[] =>
      allUsers.map((user: IUser): IUser => user.toJSON())
  );

  const user: IUser | boolean = await fetch(
    `https://graph.facebook.com/v3.2/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  )
    .then(rawUserData => rawUserData.json())
    .catch((err: string): boolean => (loginError = true));

  if (loginError) {
    return res.send({
      success: loginError,
      message: `Sorry - there was an issue logging in at this time.  Please try again later.`
    });
  } else {
    return res.send({
      success: true,
      message: `I wish you luck in the wars to come.`,
      user,
      otherUsers
    });
  }
};
