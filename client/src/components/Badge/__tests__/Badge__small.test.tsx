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
        currentScore={0}
        thumbnailSize={'small'}
      />
    </ThemeProvider>
  );

test('<Badge />', () => {
  const { getByTestId, queryByTestId } = renderBadge();
  const badge = getByTestId('badge');
  const thumbnail = getByTestId('thumbnail');
  const badge__name = getByTestId('badge__name');
  const badge__house = getByTestId('badge__house');
  const badge__score = getByTestId('badge__score');

  // Content
  expect(badge).toBeInTheDocument();
  expect(badge).toContainElement(thumbnail);
  expect(badge).toContainElement(badge__name);
  expect(badge).toContainElement(badge__score);

  expect(thumbnail.getAttribute('src')).toBe(profilePic);
  expect(thumbnail.getAttribute('alt')).toBe(name);
  expect(badge__name.textContent).toBe('user/solo');
  expect(badge__house.textContent).toBe('House Stark');
  expect(badge__score.textContent).toBe('0');

  // Styles
  expect(badge).toHaveStyleRule('background', 'green');
  expect(thumbnail).toHaveStyleRule('height', '4rem');
  expect(thumbnail).toHaveStyleRule('width', '4rem');
});
