import { ICharacter } from './clientDictionary';

export const emptyCharacter: ICharacter = {
  name: '...',
  house: '...',
  home: '...',
  sigilUrl: '../img/placeholder.png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/placeholder.png'
};

////////////// TARGARYENS
const daenerysTargaryen: ICharacter = {
  name: 'Daenerys Targaryen',
  house: 'Targaryen',
  home: 'DragonStone',
  sigilUrl: '../img/targaryen.png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/daenerys.jpg'
};
export const targaryenArray: ICharacter[] = [daenerysTargaryen];

////////////// STARKS
export const jonSnow: ICharacter = {
  name: 'Jon Snow',
  house: 'Stark',
  home: 'Winterfell',
  sigilUrl: '../img/stark.png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/jon.jpg'
};
export const aryaStark: ICharacter = {
  name: 'Arya Stark',
  house: 'Stark',
  home: 'Winterfell',
  sigilUrl: '../img/stark.png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/arya.jpg'
};
export const sansaStark: ICharacter = {
  name: 'Sansa Stark',
  house: 'Stark',
  home: 'Winterfell',
  sigilUrl: '../img/stark.png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/sansa.jpg'
};
export const branStark: ICharacter = {
  name: 'Bran Stark',
  house: 'Stark',
  home: 'Winterfell',
  sigilUrl: '../img/stark.png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/bran.jpg'
};

export const starkArray: ICharacter[] = [
  jonSnow,
  aryaStark,
  sansaStark,
  branStark
];

////////////// LANNISTERS
export const jaimeLannister: ICharacter = {
  name: 'Jaime Lannister',
  house: 'Lannister',
  home: 'Casterly Rock',
  sigilUrl: '../img/lannister./png',
  alive: false,
  placed: false,
  placement: '',
  imgLink: '../img/jaime.jpg'
};
export const cerseiLannister: ICharacter = {
  name: 'Cersei Lannister',
  house: 'Lannister',
  home: 'Casterly Rock',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Lannister.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Cersei_Lannister'
};
export const tyrionLannister: ICharacter = {
  name: 'Tyrion Lannister',
  house: 'Lannister',
  home: 'Casterly Rock',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Lannister.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Tyrion_Lannister'
};

export const lannisterArray: ICharacter[] = [
  jaimeLannister,
  cerseiLannister,
  tyrionLannister
];

////////////// ARRYNS
export const robinArryn: ICharacter = {
  name: 'Robin Arryn',
  house: 'Arryn',
  home: 'The Vale',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Arryn.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Robin_Arryn'
};
export const arrynArray: ICharacter[] = [robinArryn];

////////////// STARKS
const theonGreyjoy: ICharacter = {
  name: 'Theon Greyjoy',
  house: 'Greyjoy',
  home: 'Iron Islands',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Theon_Greyjoy'
};
const yaraGreyjoy: ICharacter = {
  name: 'Yara Greyjoy',
  house: 'Greyjoy',
  home: 'Iron Islands',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Asha_Greyjoy'
};
const euronGreyjoy: ICharacter = {
  name: 'Euron Greyjoy',
  house: 'Greyjoy',
  home: 'Iron Islands',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Greyjoy.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Euron_Greyjoy'
};
export const greyjoyArray: ICharacter[] = [
  theonGreyjoy,
  yaraGreyjoy,
  euronGreyjoy
];

////////////// CLEGANES
const sandorClegane: ICharacter = {
  name: 'Sandor Clegane',
  house: 'Clegane',
  home: 'Westerlands',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Clegane.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Sandor_Clegane'
};
const gregorClegane: ICharacter = {
  name: 'Gregor Clegane',
  house: 'Clegane',
  home: 'Westerlands',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Clegane.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Gregor_Clegane'
};
export const cleganeArray: ICharacter[] = [sandorClegane, gregorClegane];

////////////// TULLY
const edmureTully: ICharacter = {
  name: 'Edmure Tully',
  house: 'Tully',
  home: 'Riverrun',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tully.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Edmure_Tully'
};
export const tullyArray: ICharacter[] = [edmureTully];

////////////// MORMONT
const jorahMormont: ICharacter = {
  name: 'Jorah Mormont',
  house: 'Mormont',
  home: 'Bear Island',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Mormont.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Jorah_Mormont'
};
const lyannaMormont: ICharacter = {
  name: 'Lyanna Mormont',
  house: 'Mormont',
  home: 'Bear Island',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Mormont.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Lyanna_Mormont'
};
export const mormontArray: ICharacter[] = [jorahMormont, lyannaMormont];

////////////// TARLY
const samwellTarly: ICharacter = {
  name: 'Samwell Tarly',
  house: 'Tarly',
  home: 'Horn Hill',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tarly.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Samwell_Tarly'
};
export const tarlyArray: ICharacter[] = [samwellTarly];

////////////// TARTH
const brienneTarth: ICharacter = {
  name: 'Brienne Tarth',
  house: 'Tarth',
  home: 'Evenfall Hall',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Tarth.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Brienne_Tarth'
};
export const tarthArray: ICharacter[] = [brienneTarth];

////////////// MARTELL
const ellariaSand: ICharacter = {
  name: 'Ellaria Sand',
  house: 'Martell',
  home: 'Sunspear',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Martell.svg&width=240&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Ellaria_Sand'
};
export const martellArray: ICharacter[] = [ellariaSand];

////////////// BARATHEON
const gendryBaratheon: ICharacter = {
  name: 'Gendry Baratheon',
  house: 'Baratheon',
  home: 'Kings Landing',
  sigilUrl:
    'https://awoiaf.westeros.org/thumb.php?f=House_Baratheon.svg&width=218&lang=en',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Gendry'
};
export const baratheonArray: ICharacter[] = [gendryBaratheon];

////////////// OTHERS
const bronn: ICharacter = {
  name: 'Bronn',
  house: 'Unknown',
  home: '?',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Bronn'
};
const davosSeaworth: ICharacter = {
  name: 'Davos Seaworth',
  house: 'Unknown',
  home: 'Winterfell',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Davos_Seaworth'
};
const melisandre: ICharacter = {
  name: 'Melisandre',
  house: 'Unknown',
  home: 'Asshai',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Melisandre'
};
const tormundGiantsbane: ICharacter = {
  name: 'Tormund Giantsbane',
  house: 'Unknown',
  home: 'North of the Wall',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Tormund'
};

const bericDondarrion: ICharacter = {
  name: 'Beric Dondarrion',
  house: 'Unknown',
  home: 'Blackhaven',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Beric_Dondarrion'
};
const eddisonTollet: ICharacter = {
  name: 'Eddison Tollet',
  house: 'Unknown',
  home: '?',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Eddison_Tollett'
};

const greyWorm: ICharacter = {
  name: 'Grey Worm',
  house: 'Unknown',
  home: '?',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Grey_Worm'
};
const varys: ICharacter = {
  name: 'Varys',
  house: 'Unknown',
  home: '?',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Varys'
};

const qyburn: ICharacter = {
  name: 'Qyburn',
  house: 'Unknown',
  home: '?',
  sigilUrl: 'linkTosigilUrl',
  alive: false,
  placed: false,
  placement: '',
  imgLink: 'https://awoiaf.westeros.org/index.php/Qyburn'
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

export const allCharacters: ICharacter[] = [
  ...targaryenArray,
  ...starkArray,
  ...lannisterArray,
  ...arrynArray,
  ...greyjoyArray,
  ...cleganeArray,
  ...tullyArray,
  ...mormontArray,
  ...tarlyArray,
  ...tarthArray,
  ...martellArray,
  ...baratheonArray,
  ...unknownArray
];
