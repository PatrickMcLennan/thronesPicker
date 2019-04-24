import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Pick from '../Pick';
import { emptyUser } from '../../../utils/emptyUser';

afterEach(cleanup);

const handleCharacterChange = jest.fn();

const renderPick: Function = (): any =>
  render(
    <ThemeProvider theme={theme}>
      <Pick
        jobHeader="Iron Throne"
        pickName="ironThrone"
        pick={emptyUser.picks.ironThrone}
        personalPicks={true}
        handleCharacterChange={handleCharacterChange}
      />
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
