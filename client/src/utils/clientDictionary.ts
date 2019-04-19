// GOOD PNGS
// https://www.kisspng.com/free/game-of-thrones.html

export interface IPicks {
  // Kings Landing
  ironThrone: ICharacter | string;
  handOfTheKing: ICharacter | string;
  // The Wall
  nightsWatchLordCommander: ICharacter | string;
  nightsWatch: ICharacter | string;
  // WinterFell
  winterfellLord: ICharacter | string;
  // Casterly Rock
  casterlyRockLord: ICharacter | string;
  // Dorne
  dorneLord: ICharacter | string;
  // The Reach
  reachLord: ICharacter | string;
  // Riverrun
  riverrunLord: ICharacter | string;
  // Iron Islands
  ironIslandsLord: ICharacter | string;
  // Wardens
  wardenNorth: ICharacter | string;
  wardenEast: ICharacter | string;
  wardenSouth: ICharacter | string;
  wardenWest: ICharacter | string;
  dead: ICharacter[];
  unpicked: ICharacter[];
}

// INTERFACES
export interface IUser {
  name: string;
  facebookId?: string;
  accessToken?: number;
  profilePic: string;
  house: IHouse | null;
  description?: string;
  picks: IPicks;
  currentScore: number;
}

export interface ICharacter {
  name: string;
  house: IHouse;
  home: string;
  sigil: string;
  alive: boolean;
  placement: IPicks;
  wikiLink: string;
}
export interface ILocation {
  name: string;
  currentHouse: IHouse;
  wikiLink: string;
}
export interface IHouse {
  name: string;
  sigil: string;
  members: ICharacter[];
  wikiLink?: string;
}

// SERVERCALL
export interface IServerCall {
  show: boolean;
  success: boolean;
  message: string;
}

// LOG IN
export interface IPostLoginResponse extends IServerCall {
  user: IUser;
  otherUsers: IUser[];
}
export interface IPostLoginResponseFailure extends IServerCall {
  success: boolean;
  message: string;
}

// EDIT ACCOUNT
export interface IPutEditAccountRequest extends Request {
  newHouse: IHouse;
  newDescription: string;
}
export interface IPutEditAccountResponse extends Response {
  newName: string;
  newHouse: IHouse;
  newDescription: string;
}

// MAKE/CHANGE PICS
export interface IPostMakePicsRequest extends Request {
  facebookId: string;
  newPicks: IPicks;
}
export interface IPostMakePicsResponse extends Response {
  facebookId: string;
  newPicks: IPicks;
}
