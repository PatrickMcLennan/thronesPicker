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
  home: {
    type: String,
    required: 'Each character must belong to a house'
  },
  sigil: {
    type: String,
    required: 'Each character must belong to a house'
  },
  alive: {
    type: Boolean,
    required: 'Each character must be either alive or dead.'
  },
  placement: {
    type: String,
    required: 'Each Character must be either Dead, bet on or unpicked'
  },
  wikiLink: {
    type: String,
    required: 'Each Character requries a link to their wiki'
  }
});

export const Character: Model<ICharacter> = model<ICharacter>(
  'Character',
  CharacterSchema
);
