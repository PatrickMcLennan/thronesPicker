import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import OtherUsers from '../OtherUsers';
import { fakeUserSolo } from '../../../utils/testDummies';

import { IUser } from '../../../utils/clientDictionary';

afterEach(cleanup);

const changeComponent: Function = jest.fn();
const changCurrentUser: Function = jest.fn();
const fakeOtherUsers: IUser[] = [fakeUserSolo, fakeUserSolo, fakeUserSolo];

const renderOtherUsers = () =>
  render(
    <ThemeProvider theme={theme}>
      <OtherUsers
        animate={true}
        changeComponent={changeComponent}
        changeCurrentUser={changCurrentUser}
        otherUsers={fakeOtherUsers}
      />
    </ThemeProvider>
  );

test('<OtherUsers />', () => {
  const { getByTestId, queryAllByTestId } = renderOtherUsers();
  const otherUsers = getByTestId('otherUsers');
  const badges = queryAllByTestId('badge');
  const badgeNames = queryAllByTestId('badge__name');
  const badgeHouse = queryAllByTestId('badge__house');
  const badgeScore = queryAllByTestId('badge__score');

  // Content
  expect(otherUsers).toBeInTheDocument();
  badges.forEach((userBadge: any) => {
    expect(otherUsers).toContainElement(userBadge);
  });
  badgeNames.forEach((badgeName: any) => {
    expect(badgeName.textContent).toBe(fakeUserSolo.name);
  });
  badgeHouse.forEach((badgeHouse: any) => {
    expect(badgeHouse.textContent).toBe(`House ${fakeUserSolo.house.name}`);
  });
  badgeScore.forEach((badgeScore: any) => {
    expect(badgeScore.textContent).toBe(`${fakeUserSolo.currentScore}`);
  });
  expect(badges.length).toBe(fakeOtherUsers.length);

  fireEvent.click(badges[0]);
  expect(changCurrentUser).toBeCalledTimes(1);
  expect(changCurrentUser).toBeCalledWith(fakeOtherUsers[0]);
  expect(changeComponent).toBeCalledTimes(1);
  expect(changeComponent).toBeCalledWith('showUserPicks');

  // Styles
});
