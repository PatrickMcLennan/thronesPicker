import { Document } from 'mongoose';
import { Request, Response } from 'express';

// INTERFACES

export interface IHouse {
  name: string;
  sigilUrl: string;
}

export interface IPicks {
  ironThrone: ICharacter | ICharacter['name'];
  handOfTheKing: ICharacter | ICharacter['name'];
  nightsWatchLordCommander: ICharacter | ICharacter['name'];
  nightsWatch: ICharacter | ICharacter['name'];
  winterfellLord: ICharacter | ICharacter['name'];
  casterlyRockLord: ICharacter | ICharacter['name'];
  dorneLord: ICharacter | ICharacter['name'];
  reachLord: ICharacter | ICharacter['name'];
  riverrunLord: ICharacter | ICharacter['name'];
  ironIslandsLord: ICharacter | ICharacter['name'];
  wardenNorth: ICharacter | ICharacter['name'];
  wardenEast: ICharacter | ICharacter['name'];
  wardenSouth: ICharacter | ICharacter['name'];
  wardenWest: ICharacter | ICharacter['name'];
  dead: ICharacter[] | ICharacter['name'];
  unpicked: ICharacter[] | ICharacter['name'];
}

export interface IUser extends Document {
  name: string;
  facebookId: number;
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
  wikiLink: string;
}

export interface ILocation extends Document {
  name: string;
  currentHouse: string;
  wikiLink: string;
}

// LOG IN
export interface IPostLoginRequest extends Request {
  facebookId: IUser['facebookId'];
}
export interface IPostLoginResponseSuccess extends Response {
  success: boolean;
  message: string;
  user: IUser;
  otherUsers: IUser[];
}
export interface IPostLoginResponseFailure extends Response {
  success: boolean;
  message: string;
}

// MAKE PICKS
export interface IPostMakePicksRequest extends Request {
  facebookId: IUser['facebookId'];
  picks: IPicks;
}
export interface IPostMakePicksResponse extends Response {
  success: boolean;
  message: string;
  picks: IPicks;
}

// EDIT ACCOUNT
export interface IPutEditAccountRequest extends Request {
  facebookId: IUser['facebookId'];
  newHouse: IHouse;
  newDescription: string;
}
export interface IPutEditAccountResponse extends Response {
  newName: string;
  newHouse: string;
  newDescription: string;
}
