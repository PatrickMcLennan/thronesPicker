import { jonSnow, lannisterArray } from './characters';

import { IUser, ICharacter } from './clientDictionary';

export const fakeUserSolo: IUser = {
  name: 'user/solo',
  facebookId: 'user/solo/facebookIdString',
  accessToken: 0,
  profilePic: 'user/solo/profilePic',
  sigilUrl: 'user/solo/sigilUrl',
  house: {
    name: 'Stark',
    sigilUrl: 'stark sigil link'
  },
  description: 'user/solo/description',
  picks: {
    ironThrone: jonSnow,
    handOfTheKing: jonSnow,
    nightsWatchLordCommander: jonSnow,
    nightsWatch: jonSnow,
    winterfellLord: jonSnow,
    casterlyRockLord: jonSnow,
    dorneLord: jonSnow,
    reachLord: jonSnow,
    riverrunLord: jonSnow,
    ironIslandsLord: jonSnow,
    wardenNorth: jonSnow,
    wardenEast: jonSnow,
    wardenSouth: jonSnow,
    wardenWest: jonSnow,
    dead: [lannisterArray[0], lannisterArray[1], lannisterArray[2]],
    unpicked: []
  },
  currentScore: 0
};

export const fakeThumbnailSolo = {
  src: 'thumbnail/solo/src',
  name: 'thumbnail/solo/alt',
  handler: (): void => console.log('thumbnail/solo/handler')
};
