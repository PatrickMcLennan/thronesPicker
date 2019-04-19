import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Message from '../Message';

afterEach(cleanup);

const renderMessage: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <Message />
    </ThemeProvider>
  );

test('<Message />', () => {
  const { getByTestId } = renderMessage();
  const message = getByTestId('message');

  // Content
  expect(message).toBeInTheDocument();

  // Styles
  expect(message).toHaveStyleRule('background', 'blue');
});
