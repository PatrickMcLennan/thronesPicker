import { IHouse } from './clientDictionary';

import {
  targaryenArray,
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
  unknownArray,
  baratheonArray
} from './characters';

export const houseTargaryen: IHouse = {
  name: 'Targaryen',
  sigil: targaryenArray[0].sigil,
  members: targaryenArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Targaryen'
};

export const houseStark: IHouse = {
  name: 'Stark',
  sigil: starkArray[0].sigil,
  members: starkArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Stark'
};

export const houseLannister: IHouse = {
  name: 'Lannister',
  sigil: lannisterArray[0].sigil,
  members: lannisterArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Lannister'
};

export const houseArryn: IHouse = {
  name: 'Arryn',
  sigil: arrynArray[0].sigil,
  members: arrynArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Arryn'
};

export const houseGreyjoy: IHouse = {
  name: 'Greyjoy',
  sigil: greyjoyArray[0].sigil,
  members: greyjoyArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Greyjoy'
};

export const houseClegane: IHouse = {
  name: 'Clegane',
  sigil: cleganeArray[0].sigil,
  members: cleganeArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Clegane'
};

export const houseTully: IHouse = {
  name: 'Tully',
  sigil: tullyArray[0].sigil,
  members: tullyArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Tully'
};

export const houseMormont: IHouse = {
  name: 'Mormont',
  sigil: mormontArray[0].sigil,
  members: mormontArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Mormont'
};

export const houseTarly: IHouse = {
  name: 'Tarly',
  sigil: tarlyArray[0].sigil,
  members: tarlyArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Tarly'
};

export const houseTarth: IHouse = {
  name: 'Tarth',
  sigil: tarthArray[0].sigil,
  members: tarthArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Tarth'
};

export const houseMartell: IHouse = {
  name: 'Martell',
  sigil: martellArray[0].sigil,
  members: martellArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Martell'
};

export const houseBaratheon: IHouse = {
  name: 'Baratheon',
  sigil: baratheonArray[0].sigil,
  members: baratheonArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Baratheon'
};

export const houseUnknown: IHouse = {
  name: 'Unknown',
  sigil: 'placeholder link',
  members: unknownArray
};
