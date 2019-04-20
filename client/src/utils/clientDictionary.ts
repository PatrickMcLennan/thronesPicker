// GOOD PNGS
// https://www.kisspng.com/free/game-of-thrones.html

// INTERFACES
export interface IPicks {
  ironThrone: ICharacter | string;
  handOfTheKing: ICharacter | string;
  nightsWatchLordCommander: ICharacter | string;
  nightsWatch: ICharacter | string;
  winterfellLord: ICharacter | string;
  casterlyRockLord: ICharacter | string;
  dorneLord: ICharacter | string;
  reachLord: ICharacter | string;
  riverrunLord: ICharacter | string;
  ironIslandsLord: ICharacter | string;
  wardenNorth: ICharacter | string;
  wardenEast: ICharacter | string;
  wardenSouth: ICharacter | string;
  wardenWest: ICharacter | string;
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
  placement: IPicks;
  wikiLink: string;
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
