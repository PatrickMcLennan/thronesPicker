import { IGetOtherUsersRequest, IGetOtherUsersResponse } from '../utils';

export const getOtherUsers = (
  req: IGetOtherUsersRequest,
  res: IGetOtherUsersResponse
): IGetOtherUsersResponse | void => {
  console.log('getotherusers');
};
