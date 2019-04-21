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
    sigilUrl: {
      type: String
    },
    house: {
      name: {
        type: String
      },
      sigil: {
        type: String
      },
      members: {
        type: [this]
      },
      wikiLink: String
    },
    description: {
      type: String
    },
    picks: {
      ironThrone: {
        type: String
      },
      handOfTheKing: {
        type: String
      },
      nightsWatchLordCommander: {
        type: String
      },
      nightsWatch: {
        type: String
      },
      winterfellLord: {
        type: String
      },
      casterlyRockLord: {
        type: String
      },
      dorneLord: {
        type: String
      },
      reachLord: {
        type: String
      },
      riverrunLord: {
        type: String
      },
      ironIslandsLord: {
        type: String
      },
      wardenNorth: {
        type: String
      },
      wardenEast: {
        type: String
      },
      wardenSouth: {
        type: String
      },
      wardenWest: {
        type: String
      },
      dead: {
        type: [Object]
      },
      unpicked: [Object]
    },
    currentScore: {
      type: Number,
      required: 'Each Player must have a score'
    }
  },
  { collection: 'users' }
);

export const User: Model<IUser> = model<IUser>('User', UserSchema);
