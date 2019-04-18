import { model, Model, Schema } from 'mongoose';
import { IUser } from '../utils';

const UserSchema: Schema<IUser> = new Schema({
  name: {
    type: String,
    required: 'A users name must be provided'
  },
  facebookId: {
    type: Number,
    required: 'A user must have a Facebook ID'
  },
  profilePic: {
    type: String,
    required: 'A user must have a link to a profile picture'
  },
  house: {
    type: String,
    required: 'Each user must swear allegiance to a House name.'
  },
  description: {
    type: String
  }
});

export const User: Model<IUser> = model<IUser>('User', UserSchema);
