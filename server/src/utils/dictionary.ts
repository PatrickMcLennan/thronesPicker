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
  profilePic: string;
  house: House;
  description?: string;
}

export interface ICharacter extends Document {
  name: string;
  house: House;
  alive: boolean;
}

export interface IPostLoginRequest extends Request {
  facebookId: IUser['facebookId'];
}
export interface IPostLoginResponse extends Response {
  user: IUser;
}

export interface IPostMakePicksRequest extends Request {
  facebookId: IUser['facebookId'];
  // user picks
}
export interface IPostMakePicksResponse extends Response {
  // picks
}

export interface IGetOtherUsersRequest extends Request {
  //
}
export interface IGetOtherUsersResponse extends Response {
  otherUsers: IUser[];
}
