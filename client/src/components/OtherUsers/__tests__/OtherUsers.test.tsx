import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import OtherUsers from '../OtherUsers';

afterEach(cleanup);

const changeComponent: Function = jest.fn();

const renderOtherUsers = () =>
  render(
    <ThemeProvider theme={theme}>
      <OtherUsers changeComponent={changeComponent} />
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
