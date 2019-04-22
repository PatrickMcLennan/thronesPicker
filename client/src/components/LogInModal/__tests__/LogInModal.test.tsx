import * as React from 'react';
import { cleanup, render, fireEvent, wait } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import LogInModal from '../LogInModal';

afterEach(cleanup);

const getLogIn = jest.fn();
const renderLogInModal: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <LogInModal getLogIn={getLogIn} />
    </ThemeProvider>
  );

test('<LogInModal />', async () => {
  const { getByTestId } = renderLogInModal();
  const logInModal = getByTestId('logInModal');
  const h1 = getByTestId('logInModal__h1');
  const h2 = getByTestId('logInModal__h2');
  const button = getByTestId('logInModal__button');
  const children = [h1, h2, button];

  // Content
  expect(logInModal).toBeInTheDocument();
  children.forEach((child: HTMLElement) =>
    expect(logInModal).toContainElement(child)
  );
  expect(h1.textContent).toBe('thronePicker');
  expect(h2.textContent).toBe(
    'Place your bets on who will win the Game of Thrones'
  );
  expect(button.textContent).toBe('Log In With Facebook');

  // Styles
  fireEvent.click(button);
  await wait(() => {
    expect(getLogIn).toBeCalledTimes(1);
    expect(logInModal).toBeInTheDocument();
    setTimeout(() => expect(logInModal).not.toBeInTheDocument(), 751);
  });
});
