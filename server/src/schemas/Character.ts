import { model, Model, Schema } from 'mongoose';
import { ICharacter } from '../utils';

const CharacterSchema: Schema<ICharacter> = new Schema({
  name: {
    type: String,
    required: 'Each character needs a string'
  },
  house: {
    type: String,
    required: 'Each character must belong to a house'
  },
  alive: {
    type: Boolean,
    required: 'Each character must be either alive or dead.'
  },
  placement: {
    type: String
  }
});

export const Character: Model<ICharacter> = model<ICharacter>(
  'Character',
  CharacterSchema
);
