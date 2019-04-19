import { ICharacter } from './clientDictionary';

import {
  houseTargaryen,
  houseStark,
  houseLannister,
  houseArryn,
  houseGreyjoy,
  houseClegane,
  houseTully,
  houseMormont,
  houseTarly,
  houseTarth,
  houseMartell,
  houseBaratheon,
  houseUnknown
} from './houses';

////////////// TARGARYENS
const daenerysTargaryen: ICharacter = {
  name: 'Daenerys Targaryen',
  house: houseTargaryen,
  home: 'DragonStone',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Targaryen.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Daenerys_Targaryen'
};
export const targaryenArray: ICharacter[] = [daenerysTargaryen];

////////////// STARKS
const jonSnow: ICharacter = {
  name: 'Jon Snow',
  house: houseStark,
  home: 'Winterfell',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Jon_Snow'
};
const aryaStark: ICharacter = {
  name: 'Arya Stark',
  house: houseStark,
  home: 'Winterfell',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Arya_Stark'
};
const sansaStark: ICharacter = {
  name: 'Sansa Stark',
  house: houseStark,
  home: 'Winterfell',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Sansa_Stark'
};
const branStark: ICharacter = {
  name: 'Bran Stark',
  house: houseStark,
  home: 'Winterfell',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Stark.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Bran_Stark'
};

export const starkArray: ICharacter[] = [
  jonSnow,
  aryaStark,
  sansaStark,
  branStark
];

////////////// LANNISTERS
const jaimeLannister: ICharacter = {
  name: 'Jaime Lannister',
  house: houseLannister,
  home: 'Casterly Rock',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Lannister.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Jaime_Lannister'
};
const cerseiLannister: ICharacter = {
  name: 'Cersei Lannister',
  house: houseLannister,
  home: 'Casterly Rock',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Lannister.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Cersei_Lannister'
};
const tyrionLannister: ICharacter = {
  name: 'Tyrion Lannister',
  house: houseLannister,
  home: 'Casterly Rock',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Lannister.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Tyrion_Lannister'
};

export const lannisterArray: ICharacter[] = [
  jaimeLannister,
  cerseiLannister,
  tyrionLannister
];

////////////// ARRYNS
export const robinArryn: ICharacter = {
  name: 'Robin Arryn',
  house: houseArryn,
  home: 'The Vale',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Robin_Arryn'
};
export const arrynArray: ICharacter[] = [robinArryn];

////////////// STARKS
const theonGreyjoy: ICharacter = {
  name: 'Theon Greyjoy',
  house: houseGreyjoy,
  home: 'Iron Islands',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Theon_Greyjoy'
};
const yaraGreyjoy: ICharacter = {
  name: 'Yara Greyjoy',
  house: houseGreyjoy,
  home: 'Iron Islands',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Asha_Greyjoy'
};
const euronGreyjoy: ICharacter = {
  name: 'Euron Greyjoy',
  house: houseGreyjoy,
  home: 'Iron Islands',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Euron_Greyjoy'
};
export const greyjoyArray: ICharacter[] = [
  theonGreyjoy,
  yaraGreyjoy,
  euronGreyjoy
];

////////////// CLEGANES
const sandorClegane: ICharacter = {
  name: 'Sandor Clegane',
  house: houseClegane,
  home: 'Westerlands',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Clegane.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Sandor_Clegane'
};
const gregorClegane: ICharacter = {
  name: 'Gregor Clegane',
  house: houseClegane,
  home: 'Westerlands',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Clegane.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Gregor_Clegane'
};
export const cleganeArray: ICharacter[] = [sandorClegane, gregorClegane];

////////////// TULLY
const edmureTully: ICharacter = {
  name: 'Edmure Tully',
  house: houseTully,
  home: 'Riverrun',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tully.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Edmure_Tully'
};
export const tullyArray: ICharacter[] = [edmureTully];

////////////// MORMONT
const jorahMormont: ICharacter = {
  name: 'Jorah Mormont',
  house: houseMormont,
  home: 'Bear Island',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Mormont.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Jorah_Mormont'
};
const lyannaMormont: ICharacter = {
  name: 'Lyanna Mormont',
  house: houseMormont,
  home: 'Bear Island',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Mormont.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Lyanna_Mormont'
};
export const mormontArray: ICharacter[] = [jorahMormont, lyannaMormont];

////////////// TARLY
const samwellTarly: ICharacter = {
  name: 'Samwell Tarly',
  house: houseTarly,
  home: 'Horn Hill',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tarly.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Samwell_Tarly'
};
export const tarlyArray: ICharacter[] = [samwellTarly];

////////////// TARTH
const brienneTarth: ICharacter = {
  name: 'Brienne Tarth',
  house: houseTarth,
  home: 'Evenfall Hall',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tarth.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Brienne_Tarth'
};
export const tarthArray: ICharacter[] = [brienneTarth];

////////////// MARTELL
const ellariaSand: ICharacter = {
  name: 'Ellaria Sand',
  house: houseMartell,
  home: 'Sunspear',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Martell.svg&width=240&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Ellaria_Sand'
};
export const martellArray: ICharacter[] = [ellariaSand];

////////////// BARATHEON
const gendryBaratheon: ICharacter = {
  name: 'Gendry Baratheon',
  house: houseBaratheon,
  home: 'Kings Landing',
  sigil:
    'https://awoiaf.westeros.org/thumb.php?f=House_Baratheon.svg&width=218&lang=en',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Gendry'
};
export const baratheonArray: ICharacter[] = [gendryBaratheon];

////////////// OTHERS
const bronn: ICharacter = {
  name: 'Bronn',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Bronn'
};
const davosSeaworth: ICharacter = {
  name: 'Davos Seaworth',
  house: houseUnknown,
  home: 'Winterfell',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Davos_Seaworth'
};
const melisandre: ICharacter = {
  name: 'Melisandre',
  house: houseUnknown,
  home: 'Asshai',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Melisandre'
};
const tormundGiantsbane: ICharacter = {
  name: 'Tormund Giantsbane',
  house: houseUnknown,
  home: 'North of the Wall',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Tormund'
};

const bericDondarrion: ICharacter = {
  name: 'Beric Dondarrion',
  house: houseUnknown,
  home: 'Blackhaven',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Beric_Dondarrion'
};
const eddisonTollet: ICharacter = {
  name: 'Eddison Tollet',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Eddison_Tollett'
};

const greyWorm: ICharacter = {
  name: 'Grey Worm',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Grey_Worm'
};
const varys: ICharacter = {
  name: 'Varys',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Varys'
};

const qyburn: ICharacter = {
  name: 'Qyburn',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'https://awoiaf.westeros.org/index.php/Qyburn'
};
export const unknownArray: ICharacter[] = [
  bronn,
  davosSeaworth,
  melisandre,
  tormundGiantsbane,
  bericDondarrion,
  eddisonTollet,
  greyWorm,
  varys,
  qyburn
];
