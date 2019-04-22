import * as React from 'react';

import { StyledH3, StyledSpan } from './SectionHeader.style';

interface IProps {
  firstLetter: string;
  lastLetter: string;
  word: string;
}

const SectionHeader: React.FunctionComponent<IProps> = ({
  firstLetter,
  word,
  lastLetter
}: IProps): JSX.Element => (
  <StyledH3 data-testid="sectionHeader">
    <StyledSpan data-testid="sectionHeader__firstLetter">
      {firstLetter}
    </StyledSpan>
    {word}
    <StyledSpan data-testid="sectionHeader__lastLetter">
      {lastLetter}
    </StyledSpan>
  </StyledH3>
);

export default SectionHeader;
