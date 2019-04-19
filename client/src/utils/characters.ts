import { ICharacter } from './clientDictionary';

import {
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

////////////// STARKS
const jonSnow: ICharacter = {
  name: 'Jon Snow',
  house: houseStark,
  home: 'Winterfell',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const aryaStark: ICharacter = {
  name: 'Arya Stark',
  house: houseStark,
  home: 'Winterfell',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const sansaStark: ICharacter = {
  name: 'Sansa Stark',
  house: houseStark,
  home: 'Winterfell',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const branStark: ICharacter = {
  name: 'Bran Stark',
  house: houseStark,
  home: 'Winterfell',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linktoWiki'
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
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const cerseiLannister: ICharacter = {
  name: 'Cersei Lannister',
  house: houseLannister,
  home: 'Casterly Rock',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const tyrionLannister: ICharacter = {
  name: 'Tyrion Lannister',
  house: houseLannister,
  home: 'Casterly Rock',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
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
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const arrynArray: ICharacter[] = [robinArryn];

////////////// STARKS
const theonGreyjoy: ICharacter = {
  name: 'Theon Greyjoy',
  house: houseGreyjoy,
  home: 'Iron Islands',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const yaraGreyjoy: ICharacter = {
  name: 'Yara Greyjoy',
  house: houseGreyjoy,
  home: 'Iron Islands',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const euronGreyjoy: ICharacter = {
  name: 'Euron Greyjoy',
  house: houseGreyjoy,
  home: 'Iron Islands',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
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
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const gregorClegane: ICharacter = {
  name: 'Gregor Clegane',
  house: houseClegane,
  home: 'Westerlands',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const cleganeArray: ICharacter[] = [sandorClegane, gregorClegane];

////////////// TULLY
const edmureTully: ICharacter = {
  name: 'Edmure Tully',
  house: houseTully,
  home: 'Riverrun',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const tullyArray: ICharacter[] = [edmureTully];

////////////// MORMONT
const jorahMormont: ICharacter = {
  name: 'Jorah Mormont',
  house: houseMormont,
  home: 'Bear Island',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const lyannaMormont: ICharacter = {
  name: 'Lyanna Mormont',
  house: houseMormont,
  home: 'Bear Island',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const mormontArray: ICharacter[] = [jorahMormont, lyannaMormont];

////////////// TARLY
const samwellTarly: ICharacter = {
  name: 'Samwell Tarly',
  house: houseTarly,
  home: 'Horn Hill',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const tarlyArray: ICharacter[] = [samwellTarly];

////////////// TARTH
const brienneTarth: ICharacter = {
  name: 'Brienne Tarth',
  house: houseTarth,
  home: 'Evenfall Hall',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const tarthArray: ICharacter[] = [brienneTarth];

////////////// MARTELL
const ellariaSand: ICharacter = {
  name: 'Ellaria Sand',
  house: houseMartell,
  home: 'Sunspear',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
export const martellArray: ICharacter[] = [ellariaSand];

////////////// BARATHEON
const gendryBaratheon: ICharacter = {
  name: 'Gendry Baratheon',
  house: houseBaratheon,
  home: 'Kings Landing',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
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
  wikiLink: 'linkToWiki'
};
const davosSeaworth: ICharacter = {
  name: 'Davos Seaworth',
  house: houseUnknown,
  home: 'Winterfell',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const melisandre: ICharacter = {
  name: 'Melisandre',
  house: houseUnknown,
  home: 'Asshai',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const tormundGiantsbane: ICharacter = {
  name: 'Tormund Giantsbane',
  house: houseUnknown,
  home: 'North of the Wall',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};

const bericDondarrion: ICharacter = {
  name: 'Beric Dondarrion',
  house: houseUnknown,
  home: 'Blackhaven',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const eddisonTollet: ICharacter = {
  name: 'Eddison Tollet',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};

const greyWorm: ICharacter = {
  name: 'Grey Worm',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};
const varys: ICharacter = {
  name: 'Varys',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
};

const qyburn: ICharacter = {
  name: 'Qyburn',
  house: houseUnknown,
  home: '?',
  sigil: 'linkToSigil',
  alive: null,
  placement: null,
  wikiLink: 'linkToWiki'
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
