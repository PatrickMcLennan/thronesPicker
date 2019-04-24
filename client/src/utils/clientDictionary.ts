// GOOD PNGS
// https://www.kisspng.com/free/game-of-thrones.html

// INTERFACES
export interface IPicks {
  ironThrone: ICharacter;
  handOfTheKing: ICharacter;
  nightsWatchLordCommander: ICharacter;
  nightsWatch: ICharacter;
  winterfellLord: ICharacter;
  casterlyRockLord: ICharacter;
  dorneLord: ICharacter;
  reachLord: ICharacter;
  riverrunLord: ICharacter;
  ironIslandsLord: ICharacter;
  wardenNorth: ICharacter;
  wardenEast: ICharacter;
  wardenSouth: ICharacter;
  wardenWest: ICharacter;
  dead: ICharacter[];
  unpicked: ICharacter[];
}

export interface IUser {
  name: string;
  facebookId: string;
  accessToken: number;
  profilePic: string;
  sigilUrl: string;
  house: IHouse;
  description: string;
  picks: IPicks;
  currentScore: number;
}

export interface ICharacter {
  name: string;
  house: string;
  home: string;
  sigilUrl: string;
  alive: boolean;
  placed: boolean;
  placement: IPicks | string;
  imgLink: string;
}

export interface IHouse {
  name: string;
  sigilUrl: string;
}
export interface ILocation {
  name: string;
  currentHouse: IHouse;
  wikiLink: string;
}

export interface ISection {
  animate: boolean;
  render: boolean;
}

// SERVERCALL
export interface IServerCall {
  showResult: boolean;
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
  message: string;
  success: boolean;
}

// MAKE/CHANGE PICkS
export interface IPostMakePicsRequest extends Request {
  facebookId: string;
  newPicks: IPicks;
}
export interface IPostMakePicsResponse extends Response {
  facebookId: string;
  newPicks: IPicks;
}
