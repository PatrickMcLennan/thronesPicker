import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Pick from '../Pick';

afterEach(cleanup);

const renderPick: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <Pick jobProperty="Iron Throne" personalPicks={false} picked={false} />
    </ThemeProvider>
  );

test('<Pick />', () => {
  const { getByTestId } = renderPick();
  const pick = getByTestId('pick');

  // Content
  expect(pick).toBeInTheDocument();

  // Styles
  // expect(message).toHaveStyleRule('background', 'blue');
});
