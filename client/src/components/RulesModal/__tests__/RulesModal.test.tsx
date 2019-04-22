import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import RulesModal from '../RulesModal';

afterEach(cleanup);

const changeComponent: Function = jest.fn();

const renderRulesModal = () =>
  render(
    <ThemeProvider theme={theme}>
      <RulesModal changeComponent={changeComponent} />
    </ThemeProvider>
  );

test('<RulesModal />', () => {
  const { getByTestId } = renderRulesModal();
  const rulesModal = getByTestId('rulesModal');
  const h4 = getByTestId('rulesModal__h4');
  const ul = getByTestId('rulesModal__ul');
  const li = getByTestId('rulesModal__li');
  const h6 = getByTestId('rulesModal__h6');
  const children = [h4, ul, li, h6];

  // Content
  expect(rulesModal).toBeInTheDocument();
  children.forEach((child: any) => {
    expect(rulesModal).toContainElement(child);
  });
  // Styles
});
