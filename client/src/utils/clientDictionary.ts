// GOOD PNGS
// https://www.kisspng.com/free/game-of-thrones.html

// INTERFACES
export interface IPicks {
  ironThrone: ICharacter['name'];
  handOfTheKing: ICharacter['name'];
  nightsWatchLordCommander: ICharacter['name'];
  nightsWatch: ICharacter['name'];
  winterfellLord: ICharacter['name'];
  casterlyRockLord: ICharacter['name'];
  dorneLord: ICharacter['name'];
  reachLord: ICharacter['name'];
  riverrunLord: ICharacter['name'];
  ironIslandsLord: ICharacter['name'];
  wardenNorth: ICharacter['name'];
  wardenEast: ICharacter['name'];
  wardenSouth: ICharacter['name'];
  wardenWest: ICharacter['name'];
  dead: ICharacter['name'][];
  unpicked: ICharacter['name'][];
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
  placement: IPicks | string;
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
