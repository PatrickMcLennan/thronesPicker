import * as React from 'react';
import { cleanup, render, wait } from 'react-testing-library';
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
        name={name}
        profilePic={profilePic}
        house={house}
        changeComponent={changeComponent}
        changeCurrentUser={changeCurrentUser}
        randomSuggestion={fakeUserSolo}
      />
    </ThemeProvider>
  );

test('<Nav />', () => {
  const { getByTestId, queryByTestId, queryAllByTestId } = renderNav();
  const nav = getByTestId('nav');
  const nav__name = getByTestId('nav__name');
  const nav__house = getByTestId('nav__house');
  const thumbnail = getByTestId('thumbnail');

  const nav__ul = queryByTestId('nav__ul');
  const lis = queryAllByTestId('nav__ul');

  // Content
  expect(nav).toBeInTheDocument();
  expect(thumbnail.getAttribute('src')).toBe(profilePic);
  expect(thumbnail.getAttribute('alt')).toBe(name);
  expect(nav__name.textContent).toBe(name);
  expect(nav__house.textContent).toBe(house.name);

  expect(nav__ul).not.toBeInTheDocument();
  lis.forEach((menuItem: HTMLElement) =>
    expect(menuItem).not.toBeInTheDocument()
  );

  fireEvent.click(thumbnail);

  expect(nav).toContainElement(nav__ul);
  lis.forEach((menuItem: any) => expect(nav__ul).toContainElement(menuItem));

  // Styles
  expect(thumbnail).toHaveStyleRule('height', '2rem');
  expect(thumbnail).toHaveStyleRule('width', '2rem');
});
