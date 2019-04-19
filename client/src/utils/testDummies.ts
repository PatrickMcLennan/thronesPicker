import { IUser } from './clientDictionary';

export const fakeUserSolo: IUser = {
  name: 'user/solo',
  facebookId: 'user/solo/facebookIdString',
  accessToken: 0,
  profilePic: 'user/solo/profilePic',
  house: 'user/solo/house',
  description: 'user/solo/description',
  picks: {},
  currentScore: 0
};

export const fakeUserArray: IUser[] = [
  {
    name: 'user/array/1',
    facebookId: 'user/array/1/facebookIdString',
    accessToken: 1,
    profilePic: 'user/array/1/profilePic',
    house: 'user/array/1/house',
    description: 'user/array/1/description',
    picks: {},
    currentScore: 0
  },
  {
    name: 'user/array/2',
    facebookId: 'user/array/2/facebookIdString',
    accessToken: 2,
    profilePic: 'user/array/2/profilePic',
    house: 'user/array/2/house',
    description: 'user/array/2/description',
    picks: {},
    currentScore: 0
  },
  {
    name: 'user/array/3',
    facebookId: 'user/array/3/facebookIdString',
    accessToken: 3,
    profilePic: 'user/array/3/profilePic',
    house: 'user/array/3/house',
    description: 'user/array/3/description',
    picks: {},
    currentScore: 0
  }
];

export const fakeThumbnailSolo = {
  src: 'thumbnail/solo/src',
  name: 'thumbnail/solo/alt',
  handler: (): void => console.log('thumbnail/solo/handler')
};
