import { default as fetch } from 'node-fetch';
import { User } from '../schemas';
import {
  IUser,
  ICharacter,
  IPostLoginRequest,
  IPostLoginResponseSuccess,
  IPostLoginResponseFailure,
  allCharacters,
  unknownArray,
  emptyCharacter
} from '../utils';

export const postLogin = async (
  req: IPostLoginRequest,
  res: IPostLoginResponseSuccess | IPostLoginResponseFailure
) => {
  const { accessToken, userID } = req.body;

  const getUser = await fetch(
    `https://graph.facebook.com/v3.2/me?access_token=${accessToken}&method=get&pretty=0&sdk=joey&suppress_http_code=1`
  );
  const userJSON: IUser = await getUser.json();

  if (userJSON.id === userID) {
    const userExists: IUser = await User.findOne({ facebookId: userID });

    if (userExists) {
      const otherUsers: IUser[] = await User.find({
        facebookId: { $ne: `${userID}` }
      });
      return res.send({
        success: true,
        message: `Good fortune in the wars to come.`,
        user: userExists,
        otherUsers
      });
    } else if (!userExists) {
      const newUser: IUser = new User({
        name: userJSON.name,
        facebookId: userJSON.id,
        accessToken: accessToken,
        profilePic: `//graph.facebook.com/${userJSON.id}/picture`,
        sigilUrl: '',
        house: {
          name: 'Unknown',
          sigil: 'Unknow House sigil Url',
          members: unknownArray,
          wikiLink: ''
        },
        description: '',
        picks: {
          ironThrone: emptyCharacter,
          handOfTheKing: emptyCharacter,
          nightsWatchLordCommander: emptyCharacter,
          nightsWatch: emptyCharacter,
          winterfellLord: emptyCharacter,
          casterlyRockLord: emptyCharacter,
          dorneLord: emptyCharacter,
          reachLord: emptyCharacter,
          riverrunLord: emptyCharacter,
          ironIslandsLord: emptyCharacter,
          wardenNorth: emptyCharacter,
          wardenEast: emptyCharacter,
          wardenSouth: emptyCharacter,
          wardenWest: emptyCharacter,
          dead: [],
          unpicked: [...allCharacters]
        },
        currentScore: 0
      });
      const otherUsers: IUser[] = await User.find({
        facebookId: { $ne: newUser.facebookId }
      });
      console.log(newUser);
      await newUser.save();
      return res.send({
        success: true,
        message: `Welcome to thronePicker ${newUser.name}`,
        user: newUser,
        otherUsers
      });
    } else if (userExists) {
      const otherUsers: IUser[] = await User.find({
        facebookId: { $ne: `${userID}` }
      });
      return res.send({
        success: true,
        message: `Good fortune in the wars to come.`,
        user: userExists,
        otherUsers
      });
    }
  }
};
