import { IHouse } from './clientDictionary';

import {
  starkArray,
  lannisterArray,
  arrynArray,
  greyjoyArray,
  cleganeArray,
  tullyArray,
  mormontArray,
  tarlyArray,
  tarthArray,
  martellArray,
  unknownArray
} from './characters';

export const houseStark: IHouse = {
  name: 'Stark',
  sigil: starkArray[0].sigil,
  members: starkArray
};

export const houseLannister: IHouse = {
  name: 'Lannister',
  sigil: lannisterArray[0].sigil,
  members: lannisterArray
};

export const houseArryn: IHouse = {
  name: 'Arryn',
  sigil: arrynArray[0].sigil,
  members: arrynArray
};

export const houseGreyjoy: IHouse = {
  name: 'Greyjoy',
  sigil: greyjoyArray[0].sigil,
  members: greyjoyArray
};

export const houseClegane: IHouse = {
  name: 'Clegane',
  sigil: cleganeArray[0].sigil,
  members: cleganeArray
};

export const houseTully: IHouse = {
  name: 'Tully',
  sigil: tullyArray[0].sigil,
  members: tullyArray
};

export const houseMormont: IHouse = {
  name: 'Mormont',
  sigil: mormontArray[0].sigil,
  members: mormontArray
};

export const houseTarly: IHouse = {
  name: 'Tarly',
  sigil: tarlyArray[0].sigil,
  members: tarlyArray
};

export const houseTarth: IHouse = {
  name: 'Tarth',
  sigil: tarthArray[0].sigil,
  members: tarthArray
};

export const houseMartell: IHouse = {
  name: 'Martell',
  sigil: martellArray[0].sigil,
  members: martellArray
};

export const houseUknown: IHouse = {
  name: 'Unknown',
  sigil: 'placeholder link',
  members: unknownArray
};
