import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Message from '../Message';

const successMessage = { success: true, message: `Success` };

afterEach(cleanup);

const renderMessage: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <Message {...successMessage} />
    </ThemeProvider>
  );

test('<Message />', () => {
  const { getByTestId } = renderMessage();
  const message = getByTestId('message');
  const h1 = getByTestId('message__h1');

  // Content
  expect(message).toBeInTheDocument();
  expect(message).toContainElement(h1);
  expect(h1.textContent).toBe('Succedefss');

  // Styles
  expect(message).toHaveStyleRule('background', 'blue');
  expect(message).toHaveStyleRule('border-top', '1px solid green');
  expect(message).toHaveStyleRule('border-bottom', '1px solid green');

  setTimeout(() => expect(message).not.toBeInTheDocument(), 2750);
});
