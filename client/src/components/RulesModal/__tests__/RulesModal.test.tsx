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

  // Content
  expect(rulesModal).toBeInTheDocument();
  // Styles
  expect(rulesModal).toHaveStyleRule('background', 'purple');
});
