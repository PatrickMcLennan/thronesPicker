import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import AccountEditor from '../AccountEditor';
import { fakeUserSolo } from '../../../utils/testDummies';
import { allHouses } from '../../../utils/houseList';
import { debug } from 'util';

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
    queryAllByTestId,
    debug
  } = renderAccountEditor();
  const accountEditor = getByTestId('accountEditor');
  const form = getByTestId('accountEditor__form');
  const [labelNewDescription, inputNewDescription] = [
    getByTestId('accountEditor__label--newDescription'),
    getByTestId('accountEditor__input--newDescription')
  ];
  const submit = getByTestId('accountEditor__input--submit');
  const badges = queryAllByTestId('badge');
  const thumbnail = queryByTestId('thumbnail');

  // Content
  expect(accountEditor).toContainElement(form);

  expect(labelNewDescription).toContainElement(inputNewDescription);
  expect(labelNewDescription.getAttribute('for')).toBe(
    inputNewDescription.getAttribute('id')
  );
  expect(inputNewDescription.value).toBe('user/solo/description');
  fireEvent.change(inputNewDescription, { target: { value: 'Go Starks!' } });
  expect(inputNewDescription.value).toBe('Go Starks!');
  expect(thumbnail.getAttribute('src')).toBe('stark sigil link');
  expect(badges.length).toBe(1);

  fireEvent.click(badges[0]);
  const houseUl = queryByTestId('accountEditor__ul');
  const houseBadges = queryAllByTestId('accountEditor__li');

  fireEvent.click(submit);
  expect(putEditAccount).toBeCalledTimes(1);
  // expect(putEditAccount).toBeCalledWith('Targaryen', 'Go Starks!');

  // Styles
  expect(form).toHaveStyleRule('background', 'purple');
  expect(thumbnail).toHaveStyleRule('height', '4rem');
  expect(thumbnail).toHaveStyleRule('width', '4rem');
});
