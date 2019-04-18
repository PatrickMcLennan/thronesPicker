import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Nav from '../Nav';
import { IUser } from '../../../utils/clientDictionary';
import { fakeUserSolo, fakeUserArray } from '../../../utils/testDummies';

afterEach(cleanup);

const { name, profilePic, house }: IUser = fakeUserSolo;
const changeComponent: Function = jest.fn();
const renderNav = () =>
  render(
    <ThemeProvider theme={theme}>
      <Nav
        name={name}
        profilePic={profilePic}
        house={house}
        changeComponent={changeComponent}
        randomSuggestion={
          fakeUserArray[Math.floor(Math.random() * fakeUserArray.length)]
        }
      />
    </ThemeProvider>
  );

test('<Nav />', () => {
  const { getByTestId } = renderNav();
  const nav = getByTestId('nav');

  // Content
  expect(nav).toBeInTheDocument();
  // Styles
});