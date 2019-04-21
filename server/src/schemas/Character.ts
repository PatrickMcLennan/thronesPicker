import { model, Model, Schema } from 'mongoose';
import { ICharacter } from '../utils';

const CharacterSchema: Schema<ICharacter> = new Schema({
  name: {
    type: String,
    required: 'Each Character needs a name'
  },
  house: {
    type: String,
    required: 'Each Character must belong to a House'
  },
  home: {
    type: String,
    required: 'Each Character must have a home'
  },
  sigilUrl: {
    type: String,
    required: 'Each Character must have a link to their Sigil.'
  },
  alive: {
    type: Boolean,
    required: 'Each Character must be alive or dead'
  },
  placed: {
    type: Boolean,
    requried: 'Each Character requries a Placed Boolean'
  },
  placement: {
    type: String
  },
  wikiLink: {
    type: String,
    required: 'Each Character requires a link to their Wiki'
  }
});

export const Character: Model<ICharacter> = model<ICharacter>(
  'Character',
  CharacterSchema
);
