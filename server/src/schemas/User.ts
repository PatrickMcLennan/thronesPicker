import { model, Model, Schema } from 'mongoose';
import { IUser } from '../utils';

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: 'A users name must be provided'
  },
  facebookId: {
    type: String,
    required: 'A user must have a Facebook ID'
  },
  profilePic: {
    type: String,
    required: 'A user must have a link to a profile picture'
  },
  sigilUrl: {
    type: String,
    required: 'Each User must have a sigil Url'
  },
  house: {
    type: String,
    required: 'Each user must swear allegiance to a House name.'
  },
  description: {
    type: String
  },
  currentScore: {
    type: Number,
    required: 'Each Player must have a score'
  }
});

export const User: Model<IUser> = model<IUser>('User', UserSchema);
