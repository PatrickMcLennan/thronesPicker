import { default as fetch } from 'node-fetch';
import { DocumentQuery } from 'mongoose';
import { User } from '../schemas';
import { IUser, IHouse } from '../utils';
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
  let rawUserJson: IUser;

  await fetch(
    `https://graph.facebook.com/v3.2/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  )
    .then((rawUserData): Promise<IUser> => rawUserData.json())
    .then((userJson: IUser): IUser => (rawUserJson = userJson))
    .catch((err: string): boolean => (loginError = true));

  const user: IUser = await User.findOne({
    facebookId: rawUserJson.facebookId
  });
  const otherUsers: IUser[] = await User.find({}, (allUsers: IUser[]) =>
    allUsers
      .map((savedUser: IUser): IUser => savedUser.toJSON())
      .filter((savedUser: IUser): boolean => savedUser.facebookId !== userID)
  );

  if (loginError) {
    return res.send({
      success: loginError,
      message: `Sorry - there was an issue logging in at this time.  Please try again later.`
    });
  } else if (!user) {
    const newUser: IUser = new User({
      name: rawUserJson.name,
      facebookId: rawUserJson.facebookId.toString(),
      accessToken: rawUserJson.accessToken.toString(),
      profilePic: rawUserJson.profilePic,
      house: {
        name: '',
        sigil: '',
        members: [],
        wikiLink: ''
      },
      description: '',
      picks: {
        ironThrone: '',
        handOfTheKing: '',
        nightsWatchLordCommander: '',
        nightsWatch: '',
        winterfellLord: '',
        casterlyRockLord: '',
        dorneLord: '',
        reachLord: '',
        riverrrunLord: '',
        ironIslandsLord: '',
        dead: [],
        unpicked: []
      },
      currentScore: 0
    });
    await newUser.save();
    return res.send({
      success: true,
      message: `Welcome to thronePicker ${newUser.name}`,
      user: newUser,
      otherUsers
    });
  } else if (user) {
    return res.send({
      success: true,
      message: `I wish you luck in the wars to come.`,
      user,
      otherUsers
    });
  }
};
