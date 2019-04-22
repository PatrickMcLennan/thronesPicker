import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../../utils/globalStyles';
import SectionHeader from '../SectionHeader';

afterEach(cleanup);

const renderSectionHeader = () =>
  render(
    <ThemeProvider theme={theme}>
      <SectionHeader firstLetter="t" word="es" lastLetter="t" />
    </ThemeProvider>
  );

test('<SectionHeader />', () => {
  const { getByTestId } = renderSectionHeader();
  const sectionHeader = getByTestId('sectionHeader');
  const firstLetter = getByTestId('sectionHeader__firstLetter');
  const lastLetter = getByTestId('sectionHeader__firstLetter');

  expect(sectionHeader.textContent).toBe('test');
  expect(firstLetter.textContent).toBe('t');
  expect(lastLetter.textContent).toBe('t');
  [firstLetter, lastLetter].forEach((letter: HTMLElement) => {
    expect(sectionHeader).toContainElement(letter);
    expect(letter).toHaveStyleRule('font-size', '5.5rem');
  });
});
