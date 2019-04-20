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
} from '../../../server/src/utils/characters';

export const houseTargaryen: IHouse = {
  name: 'Targaryen',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Targaryen.svg&width=218&lang=en',
  members: [...targaryenArray],
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Targaryen'
};

export const houseStark: IHouse = {
  name: 'Stark',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=218&lang=en',
  members: starkArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Stark'
};

export const houseLannister: IHouse = {
  name: 'Lannister',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Lannister.svg&width=218&lang=en',
  members: lannisterArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Lannister'
};

export const houseArryn: IHouse = {
  name: 'Arryn',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=218&lang=en',
  members: arrynArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Arryn'
};

export const houseGreyjoy: IHouse = {
  name: 'Greyjoy',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  members: greyjoyArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Greyjoy'
};

export const houseClegane: IHouse = {
  name: 'Clegane',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Clegane.svg&width=218&lang=en',
  members: cleganeArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Clegane'
};

export const houseTully: IHouse = {
  name: 'Tully',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tully.svg&width=218&lang=en',
  members: tullyArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Tully'
};

export const houseMormont: IHouse = {
  name: 'Mormont',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Mormont.svg&width=218&lang=en',
  members: mormontArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Mormont'
};

export const houseTarly: IHouse = {
  name: 'Tarly',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tarly.svg&width=218&lang=en',
  members: tarlyArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Tarly'
};

export const houseTarth: IHouse = {
  name: 'Tarth',
  sigilUrl: tarthArray[0].sigilUrl,
  members: tarthArray,
  wikiLink:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tarth.svg&width=218&lang=en'
};

export const houseMartell: IHouse = {
  name: 'Martell',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Martell.svg&width=240&lang=en',
  members: martellArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Martell'
};

export const houseBaratheon: IHouse = {
  name: 'Baratheon',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Baratheon.svg&width=218&lang=en',
  members: baratheonArray,
  wikiLink: 'https://awoiaf.westeros.org/index.php/House_Baratheon'
};

export const houseUnknown: IHouse = {
  name: 'Unknown',
  sigilUrl: 'placeholder link',
  members: unknownArray
};
