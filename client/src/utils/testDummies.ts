import { jonSnow, lannisterArray } from '../../../server/src/utils/characters';

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
    ironThrone: jonSnow.name,
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
    dead: [
      lannisterArray[0].name,
      lannisterArray[1].name,
      lannisterArray[2].name
    ],
    unpicked: []
  },
  currentScore: 0
};

export const fakeThumbnailSolo = {
  src: 'thumbnail/solo/src',
  name: 'thumbnail/solo/alt',
  handler: (): void => console.log('thumbnail/solo/handler')
};
