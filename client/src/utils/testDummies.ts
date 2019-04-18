import { IUser, IBadge } from './clientDictionary';

export const fakeUserSolo: IUser = {
  name: 'solo',
  facebookId: 'solo/facebookIdString',
  accessToken: 0,
  profilePic: 'solo/profilePic',
  house: 'solo/house',
  description: 'solo/description',
  picks: {}
};

export const fakeUserArray: IUser[] = [
  {
    name: 'array/1',
    facebookId: 'array/1/facebookIdString',
    accessToken: 1,
    profilePic: 'array/1/profilePic',
    house: 'array/1/house',
    description: 'array/1/description',
    picks: {}
  },
  {
    name: 'array/2',
    facebookId: 'array/2/facebookIdString',
    accessToken: 2,
    profilePic: 'array/2/profilePic',
    house: 'array/2/house',
    description: 'array/2/description',
    picks: {}
  },
  {
    name: 'array/3',
    facebookId: 'array/3/facebookIdString',
    accessToken: 3,
    profilePic: 'array/3/profilePic',
    house: 'array/3/house',
    description: 'array/3/description',
    picks: {}
  }
];
