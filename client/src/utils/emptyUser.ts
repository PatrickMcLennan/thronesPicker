import { IUser } from './clientDictionary';
import { emptyCharacter, allCharacters } from './characters';

export const emptyUser: IUser = {
  name: '',
  facebookId: '',
  accessToken: 0,
  profilePic: '',
  sigilUrl: '',
  house: {
    name: '',
    sigilUrl: ''
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
};
