import * as React from 'react';
import { cleanup, render, fireEvent } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Thumbnail from '../Thumbnail';
import { fakeThumbnailSolo } from '../../../utils/testDummies';

afterEach(cleanup);

const big = 'big';

const renderThumbnail = () =>
  render(
    <ThemeProvider theme={theme}>
      <Thumbnail
        src={fakeThumbnailSolo.src}
        name={fakeThumbnailSolo.name}
        size={big}
      />
    </ThemeProvider>
  );

test('<Thumbnail />', () => {
  const { getByTestId } = renderThumbnail();
  const thumbnail = getByTestId('thumbnail');

  // Content
  expect(thumbnail).toBeInTheDocument();
  expect(thumbnail.getAttribute('src')).toBe(fakeThumbnailSolo.src);
  expect(thumbnail.getAttribute('alt')).toBe(fakeThumbnailSolo.name);

  // Styles

  expect(thumbnail).toHaveStyleRule('height', '4rem');
  expect(thumbnail).toHaveStyleRule('width', '4rem');
});
