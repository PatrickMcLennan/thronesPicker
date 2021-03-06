import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import Badge from '../Badge';

import { fakeUserSolo } from '../../../utils/testDummies';
import { IUser } from '../../../utils/clientDictionary';

afterEach(cleanup);

const fakeThumbnailHandler: Function = jest.fn();
const { profilePic, name, house, sigilUrl, currentScore }: IUser = fakeUserSolo;

const renderBadge = () =>
  render(
    <ThemeProvider theme={theme}>
      <Badge
        src={profilePic}
        name={name}
        house={house.name}
        sigilUrl={sigilUrl}
        handler={fakeThumbnailHandler}
        thumbnailSize={'big'}
      />
    </ThemeProvider>
  );

test('<Badge />', () => {
  const { getByTestId } = renderBadge();
  const badge = getByTestId('badge');
  const thumbnail = getByTestId('thumbnail');

  // Content
  expect(badge).toBeInTheDocument();
  expect(badge).toContainElement(thumbnail);

  expect(thumbnail.getAttribute('src')).toBe(profilePic);
  expect(thumbnail.getAttribute('alt')).toBe(name);

  // Styles
  expect(thumbnail).toHaveStyleRule('height', '6rem');
  expect(thumbnail).toHaveStyleRule('width', '6rem');
});
