import { IPostLoginRequest, IPostLoginResponse } from '../utils';

export const postLogin = (
  req: IPostLoginRequest,
  res: IPostLoginResponse
): IPostLoginResponse | void => {
  console.log('postlogin');
};
