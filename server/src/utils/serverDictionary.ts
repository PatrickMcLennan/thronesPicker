import { Document } from 'mongoose';
import { Request, Response } from 'express';

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

export interface IUser extends Document {
  name: string;
  facebookId: number;
  accessToken: number;
  profilePic: string;
  house: string;
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
