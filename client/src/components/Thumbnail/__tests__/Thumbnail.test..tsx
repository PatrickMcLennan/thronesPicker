import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Thumbnail from '../Thumbnail';
import { IThumbnail } from '../../../utils/clientDictionary';

afterEach(cleanup);

const fakeHandler: Function = jest.fn();
const fakeProps: IThumbnail = {
  src: 'solo/src',
  alt: 'solo/alt',
  handler: fakeHandler
};

const renderThumbnail = () =>
  render(
    <ThemeProvider theme={theme}>
      <Thumbnail {...fakeProps} />
    </ThemeProvider>
  );

test('<Thumbnail />', () => {
  const { getByTestId } = renderThumbnail();
  const badge = getByTestId('badge');

  // Content
  expect(badge).toBeInTheDocument();
  // Styles
});
