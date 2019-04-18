import { Document } from 'mongoose';
import { Request, Response } from 'express';

// TYPES
export type House = string;

export interface IPlacement {
  ruler: ICharacter;

  wardenNorth: ICharacter;
  wardenEast: ICharacter;
  wardenSouth: ICharacter;
  wardenWest: ICharacter;

  wall: ICharacter;
}

// INTERFACES
export interface IUser extends Document {
  name: string;
  facebookId: number;
  accessToken: number;
  profilePic: string;
  house: House;
  description?: string;
  // picks
}

export interface IOtherUser extends Document {
  name: string;
  profilePic: string;
  house: House;
  description: string;
  // picks
}

export interface ICharacter extends Document {
  name: string;
  house: House;
  alive: boolean;
}

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

export interface IPostMakePicksRequest extends Request {
  facebookId: IUser['facebookId'];
  // user picks
}
export interface IPostMakePicksResponse extends Response {
  success: boolean;
  message: string;
  // picks
}
