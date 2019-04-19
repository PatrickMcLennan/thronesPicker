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
  // Wardens
  wardenNorth?: ICharacter;
  wardenEast?: ICharacter;
  wardenSouth?: ICharacter;
  wardenWest?: ICharacter;
  dead?: ICharacter[];
  unpicked?: ICharacter[];
}

// INTERFACES
export interface IUser {
  name: string;
  facebookId?: string;
  accessToken?: number;
  profilePic: string;
  house: House | null;
  description?: string;
  picks: IPicks;
  currentScore: number;
}

export interface IThumbnail {
  src: string;
  alt: string;
  handler: Function;
}

export interface ICharacter extends Document {
  name: string;
  house: House;
  alive: boolean;
  job?: IPicks;
  wikiLink: string;
}
export interface ILocation extends Document {
  name: string;
  currentHouse: House;
  wikiLink: string;
}

// SERVERCALL
export interface IServerCall {
  show: boolean;
  success: boolean;
  message: string;
}

// LOG IN
export interface IPostLoginResponse extends IServerCall {
  user: IUser;
  otherUsers: IUser[];
}
export interface IPostLoginResponseFailure extends IServerCall {
  success: boolean;
  message: string;
}

// EDIT ACCOUNT
export interface IPutEditAccountRequest extends Request {
  newHouse: House;
  newDescription: string;
}
export interface IPutEditAccountResponse extends Response {
  newName: string;
  newHouse: House;
  newDescription: string;
}

// MAKE/CHANGE PICS
export interface IPostMakePicsRequest extends Request {
  facebookId: string;
  newPicks: IPicks;
}
export interface IPostMakePicsResponse extends Response {
  facebookId: string;
  newPicks: IPicks;
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

////////////// IRON ISLANDS
// Lord

////////////// WARDENS
// North
// South
// East
// WestNorth
