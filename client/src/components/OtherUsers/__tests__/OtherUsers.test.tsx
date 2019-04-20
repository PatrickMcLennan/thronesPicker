import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
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
const otherUsers: IUser[] = [fakeUserSolo, fakeUserSolo, fakeUserSolo];

const renderOtherUsers = () =>
  render(
    <ThemeProvider theme={theme}>
      <OtherUsers
        changeComponent={changeComponent}
        changeCurrentUser={changCurrentUser}
        otherUsers={otherUsers}
      />
    </ThemeProvider>
  );

test('<OtherUsers />', () => {
  const { getByTestId } = renderOtherUsers();
  const otherUsers = getByTestId('otherUsers');

  // Content
  expect(otherUsers).toBeInTheDocument();
  // Styles
  expect(otherUsers).toHaveStyleRule('background', 'yellow');
});
