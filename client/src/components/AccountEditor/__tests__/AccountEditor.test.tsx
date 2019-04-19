import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import AccountEditor from '../AccountEditor';
import { IUser } from '../../../utils/clientDictionary';
import { fakeUserSolo } from '../../../utils/testDummies';

afterEach(cleanup);

const changeComponent: Function = jest.fn();
const putEditAccount: Function = jest.fn();

const renderAccountEditor: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <AccountEditor
        user={fakeUserSolo}
        changeComponent={changeComponent}
        putEditAccount={putEditAccount}
      />
    </ThemeProvider>
  );

test('<AccountEditor />', () => {
  const { getByTestId } = renderAccountEditor();
  const accountEditor = getByTestId('accountEditor');
  const form = getByTestId('accountEditor__form');

  // Content
  expect(accountEditor).toBeInTheDocument();
  expect(form).toBeInTheDocument();

  // Styles
  expect(form).toHaveStyleRule('background', 'purple');
});
