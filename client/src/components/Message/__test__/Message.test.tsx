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
      <Message success={true} message={`Success`} />
    </ThemeProvider>
  );

test('<Message />', () => {
  const { getByTestId } = renderMessage();
  const message = getByTestId('message');
  const h1 = getByTestId('message__h1');

  // Content
  expect(message).toBeInTheDocument();
  expect(message).toContainElement(h1);
  expect(h1.textContent).toBe('Success');

  // Styles
  expect(message).toHaveStyleRule('background', 'blue');
});
