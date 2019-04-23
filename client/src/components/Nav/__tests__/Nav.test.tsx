import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Nav from '../Nav';
import { IUser } from '../../../utils/clientDictionary';
import { fakeUserSolo } from '../../../utils/testDummies';
import { fireEvent } from 'react-testing-library';

afterEach(cleanup);

const { name, profilePic, house }: IUser = fakeUserSolo;
const changeComponent: Function = jest.fn();
const changeCurrentUser: Function = jest.fn();

const renderNav = () =>
  render(
    <ThemeProvider theme={theme}>
      <Nav
        user={fakeUserSolo}
        changeComponent={changeComponent}
        changeCurrentUser={changeCurrentUser}
        randomSuggestion={fakeUserSolo}
      />
    </ThemeProvider>
  );

test('<Nav />', () => {
  const { getByTestId, queryByTestId, queryAllByTestId, debug } = renderNav();
  const nav = getByTestId('nav');
  const navBadge = getByTestId('badge');
  const thumbnail = getByTestId('thumbnail');
  const unrenderedNav__ul = queryByTestId('nav__ul');
  const unrenderedLis = queryAllByTestId('nav__ul');

  // Content
  expect(nav).toBeInTheDocument();
  expect(thumbnail.getAttribute('src')).toBe(profilePic);
  expect(thumbnail.getAttribute('alt')).toBe(name);

  expect(unrenderedNav__ul).not.toBeInTheDocument();
  unrenderedLis.forEach((menuItem: HTMLElement) =>
    expect(menuItem).not.toBeInTheDocument()
  );

  fireEvent.click(navBadge);

  const nav__ul = queryByTestId('nav__ul');
  const lis = queryAllByTestId('nav__ul');

  expect(nav).toContainElement(nav__ul);
  lis.forEach((menuItem: any) => expect(nav__ul).toContainElement(menuItem));

  // Styles
  expect(thumbnail).toHaveStyleRule('height', '6rem');
  expect(thumbnail).toHaveStyleRule('width', '6rem');
});
