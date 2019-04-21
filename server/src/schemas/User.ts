import { model, Model, Schema } from 'mongoose';
import { Character } from './Character';
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
        type: [Character]
      },
      wikiLink: String
    },
    description: {
      type: String
    },
    picks: {
      ironThrone: {
        type: Character
      },
      handOfTheKing: {
        type: Character
      },
      nightsWatchLordCommander: {
        type: Character
      },
      nightsWatch: {
        type: Character
      },
      winterfellLord: {
        type: Character
      },
      casterlyRockLord: {
        type: Character
      },
      dorneLord: {
        type: Character
      },
      reachLord: {
        type: Character
      },
      riverrunLord: {
        type: Character
      },
      ironIslandsLord: {
        type: Character
      },
      wardenNorth: {
        type: Character
      },
      wardenEast: {
        type: Character
      },
      wardenSouth: {
        type: Character
      },
      wardenWest: {
        type: Character
      },
      dead: {
        type: [Character]
      },
      unpicked: [Character]
    },
    currentScore: {
      type: Number,
      required: 'Each Player must have a score'
    }
  },
  { collection: 'users' }
);

export const User: Model<IUser> = model<IUser>('User', UserSchema);
