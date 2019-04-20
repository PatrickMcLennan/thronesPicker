import { IUser } from './clientDictionary';

export const emptyUser: IUser = {
  name: '',
  facebookId: '',
  accessToken: 0,
  profilePic: '',
  sigilUrl: '',
  house: '',
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
    riverrunLord: '',
    ironIslandsLord: '',
    wardenNorth: '',
    wardenEast: '',
    wardenSouth: '',
    wardenWest: '',
    dead: [],
    unpicked: []
  },
  currentScore: 0
};
