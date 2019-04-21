import { default as fetch } from 'node-fetch';
import { User } from '../schemas';
import {
  IUser,
  IPostLoginRequest,
  IPostLoginResponseSuccess,
  IPostLoginResponseFailure,
  allCharacters
} from '../utils';

export const postLogin = async (
  req: IPostLoginRequest,
  res: IPostLoginResponseSuccess | IPostLoginResponseFailure
) => {
  const { accessToken, userID } = req.body;

  let loginError: boolean = false;

  const rawUserJson: Promise<IUser | boolean> | any = fetch(
    `https://graph.facebook.com/v3.2/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  )
    .then((rawUserData): Promise<IUser> => rawUserData.json())
    .catch((err: string): boolean => (loginError = true));

  const user: IUser = await User.findOne({
    facebookId: rawUserJson.facebookId
  });

  const otherUsers: IUser[] = await User.find({
    facebookId: { $ne: `${userID}` }
  });

  // const otherUsers: IUser[] = await User.find({}, (allUsers: IUser[]) =>
  //   userArray.filter(
  //     (savedUser: IUser): boolean => savedUser.facebookId !== userID
  //   )
  // );

  if (loginError) {
    return res.send({
      success: loginError,
      message: `Sorry - there was an issue logging in at this time.  Please try again later.`
    });
  } else if (!user) {
    const newUser: IUser = new User({
      name: rawUserJson.name,
      facebookId: rawUserJson.facebookId,
      accessToken: rawUserJson.accessToken,
      profilePic: rawUserJson.profilePic,
      sigilUrl: '',
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
        wardenNorth: '',
        wardenEast: '',
        wardenSouth: '',
        wardenWest: '',
        dead: [],
        unpicked: [...allCharacters]
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
