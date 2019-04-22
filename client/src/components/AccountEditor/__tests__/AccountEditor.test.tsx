import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import AccountEditor from '../AccountEditor';
import { fakeUserSolo } from '../../../utils/testDummies';
import { allHouses } from '../../../utils/houseList';

afterEach(cleanup);

const changeComponent: Function = jest.fn();
const putEditAccount: Function = jest.fn();

const renderAccountEditor: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <AccountEditor
        user={fakeUserSolo}
        animate={true}
        changeComponent={changeComponent}
        putEditAccount={putEditAccount}
      />
    </ThemeProvider>
  );

test('<AccountEditor />', () => {
  const {
    getByTestId,
    queryByTestId,
    queryAllByTestId
  } = renderAccountEditor();
  const accountEditor = getByTestId('accountEditor');
  const form = getByTestId('accountEditor__form');
  const [labelNewDescription, inputNewDescription] = [
    getByTestId('accountEditor__label--newDescription'),
    getByTestId('accountEditor__input--newDescription')
  ];

  const houseList = queryByTestId('accountEditor__ul');
  const houseBadges = queryAllByTestId('accountEditor__badge--house');
  const buttonBadge = queryByTestId('accountEditor__badge--button');
  const buttonBadge__name = queryByTestId('badge__name');
  const buttonBadge__house = queryByTestId('badge__house');
  const thumbnail = queryByTestId('thumbnail');

  // Content
  expect(accountEditor).toBeInTheDocument();
  expect(accountEditor).toContainElement(form);

  expect(labelNewDescription).toContainElement(inputNewDescription);
  expect(labelNewDescription.getAttribute('for')).toBe(
    inputNewDescription.getAttribute('id')
  );
  expect(inputNewDescription.value).toBe('user/solo/description');
  fireEvent.change(inputNewDescription, { target: { value: 'Go Starks!' } });
  expect(inputNewDescription.value).toBe('Go Starks!');

  expect(thumbnail.getAttribute('src')).toBe('stark sigil link');
  expect(buttonBadge__name.textContent).toBe('Stark');
  expect(buttonBadge__house.textContent).toBe('House Stark');
  expect(houseList).not.toBeInTheDocument();
  houseBadges.forEach((houseBadge: JSX.Element) =>
    expect(houseBadge).not.toBeInTheDocument()
  );

  // fireEvent.click(buttonBadge);

  // Styles
  expect(form).toHaveStyleRule('background', 'purple');
});
