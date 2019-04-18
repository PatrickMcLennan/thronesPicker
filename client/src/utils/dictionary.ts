// TYPES
export type House = string;

export interface IPicks {
  // Kings Landing
  ironThrone?: ICharacter;
  handOfTheKing?: ICharacter;
  // The Wall
  nightsWatchLordCommander?: ICharacter;
  nightsWatch?: ICharacter;
  // WinterFell
  winterfellLord?: ICharacter;
  // Casterly Rock
  casterlyRockLord?: ICharacter;
  // Dorne
  dorneLord?: ICharacter;
  // The Reach
  reachLord?: ICharacter;
  // Riverrun
  riverrunLord?: ICharacter;
  // Iron Islands
  ironIslandsLord?: ICharacter;
  dead?: ICharacter[];
  unpicked?: ICharacter[];
}

// INTERFACES
export interface IUser extends Document {
  name: string;
  facebookId?: number;
  accessToken?: number;
  profilePic: string;
  house: House;
  description?: string;
  picks: IPicks;
}

export interface ICharacter extends Document {
  name: string;
  house: House;
  alive: boolean;
  wikiLink: string;
}
export interface ILocation extends Document {
  name: string;
  currentHouse: House;
  wikiLink: string;
}
export interface IPostLoginResponseSuccess extends Response {
  success: boolean;
  message: string;
  user: IUser;
  otherUsers: IUser[];
}
export interface IPostLoginResponseFailure extends Response {
  success: boolean;
  message: string;
}

// GOOD PNGS
// https://www.kisspng.com/free/game-of-thrones.html

////////////// CHARACTERS //////////////

////////////// STARKS
// Jon Snow
// Arya Stark
// Sansa Stark
// Bran Stark

////////////// LANNISTERS
// Jaime Lannister
// Cersei Lannister
// Tyrion Lannister

////////////// ARRYNS
// Robin Arryn

////////////// OTHERS
// Edmure Tully
// Jorah Mormont
// Bronn
// Davos Seaworth
// Melisandre
// Theon Greyjoy
// Yara Greyjoy
// Euron Greyjoy
// Sandor 'The Hound' Clegane
// Gregor 'The Mountain' Clegane
// Tormund Giantsbane
// Brienne of Tarth
// Beric Dondarrion
// Edd Tollett
// Ellaria Sand
// Grey Worm
// Varys
// Samwell Tarly
// Gendry Baratheon
// Qyburn

////////////// JOBS //////////////

////////////// KINGS LANDING
// King / Queen
// Hand of the King

////////////// THE WALL
// Lord Commander of the Nights Watch
// Nights Watch

////////////// IRON ISLANDS
// Lord

////////////// WINTERFELL
// Lord
////////////// CASTERLY ROCK
// Lord
////////////// DORNE
// Lord
////////////// THE REACH
// Lord
////////////// RIVERRUN
// Lord
