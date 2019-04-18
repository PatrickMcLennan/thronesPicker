import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Badge from '../Badge';
import { IBadge } from '../../../utils/clientDictionary';

afterEach(cleanup);

const fakeHandler: Function = jest.fn();
const fakeProps: IBadge = {
  src: 'solo/src',
  alt: 'solo/alt',
  handler: fakeHandler
};

const renderBadge = () =>
  render(
    <ThemeProvider theme={theme}>
      <Badge {...fakeProps} />
    </ThemeProvider>
  );

test('<Badge />', () => {
  const { getByTestId } = renderBadge();
  const badge = getByTestId('badge');

  // Content
  expect(badge).toBeInTheDocument();
  // Styles
});
