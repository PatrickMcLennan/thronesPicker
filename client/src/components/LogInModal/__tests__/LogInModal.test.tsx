import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import LogInModal from '../LogInModal';
import { IUser } from '../../../utils/clientDictionary';
import { fakeUserSolo } from '../../../utils/testDummies';

afterEach(cleanup);

const renderLogInModal: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <LogInModal />
    </ThemeProvider>
  );

test('<LogInModal />', () => {
  const { getByTestId } = renderLogInModal();
  const logInModal = getByTestId('logInModal');

  // Content
  expect(logInModal).toBeInTheDocument();

  // Styles
  expect(logInModal).toHaveStyleRule('background', 'orangered');
});
