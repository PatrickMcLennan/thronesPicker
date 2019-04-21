import { model, Model, Schema } from 'mongoose';
import { IUser } from '../utils';

const UserSchema: Schema<IUser> = new Schema(
  {
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
    currentScore: {
      type: Number,
      required: 'Each Player must have a score'
    }
  },
  { collection: 'users' }
);

export const User: Model<IUser> = model<IUser>('User', UserSchema);
