import { Document } from 'mongoose';
import { Request, Response } from 'express';

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

export interface IUser extends Document {
  name: string;
  facebookId: number;
  accessToken: number;
  profilePic: string;
  sigilUrl: string;
  house: string;
  description: string;
  picks: IPicks;
  currentScore: number;
}

export interface ICharacter extends Document {
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
  newHouse: string;
  newDescription: string;
}
export interface IPutEditAccountResponse extends Response {
  newName: string;
  newHouse: string;
  newDescription: string;
}
