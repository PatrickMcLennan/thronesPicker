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
      <RulesModal changeComponent={changeComponent} animate={true} />
    </ThemeProvider>
  );

test('<RulesModal />', () => {
  const { getByTestId, getAllByTestId } = renderRulesModal();
  const rulesModal = getByTestId('rulesModal');
  const ul = getByTestId('rulesModal__ul');
  const lis = getAllByTestId('rulesModal__li');
  const h6 = getByTestId('rulesModal__h6');
  const rulesChildren = [ul, h6];

  // Content
  expect(rulesModal).toBeInTheDocument();
  rulesChildren.forEach((child: HTMLElement) => {
    expect(rulesModal).toContainElement(child);
  });
  expect(lis.length).toBe(5);
  lis.forEach((singleLi: HTMLElement) => expect(ul).toContainElement(singleLi));
  expect(h6.textContent).toBe('Made By Patrick McLennan');
  // Styles
});
