import * as React from 'react';

import {
  StyledSection,
  StyledUl,
  StyledLi,
  StyledH6,
  StyledSpan
} from './RulesModal.style';
import SectionHeader from '../SectionHeader/SectionHeader';

interface IProps {
  animate: boolean;
  changeComponent: Function;
}

class RulesModal extends React.Component<IProps, {}> {
  render(): JSX.Element {
    const { animate } = this.props;
    return (
      <StyledSection data-testid="rulesModal" triggerAnimation={animate}>
        <SectionHeader firstLetter="T" word="he Rule" lastLetter="s" />
        <StyledUl data-testid="rulesModal__ul">
          <StyledLi data-testid="rulesModal__li">
            Choose which Character is most likely to be doing what at the end of
            the series.{' '}
            <StyledSpan>
              EX - Dead, Warden of the East, Lord of WinterFell, Nights Watch,
              etc.
            </StyledSpan>
          </StyledLi>
          <StyledLi data-testid="rulesModal__li">
            Each correct pick earns you 1 point. Whoever has the most points at
            the end will win.
            <StyledSpan>
              EX - Jaime Lannister wins the Iron Throne and Sansa Stark dies.
              You picked both to die. You gain 1 point for Sansa, 0 for Jaime.
            </StyledSpan>
          </StyledLi>
          <StyledLi data-testid="rulesModal__li">
            Unpicked Characters earn no points.
            <StyledSpan>
              EX - Brienne of Tarth becomes Warden of the West. You left her
              unpicked. You get nothing. Don't do this.
            </StyledSpan>
          </StyledLi>
          <StyledLi data-testid="rulesModal__li">
            <b>
              All Picks have to be locked in by <b>8 P.M Sunday, April 29th.</b>{' '}
              You will not be able to change your picks after that.
            </b>
            <StyledSpan>
              The further we get into this season the easier it will be to make
              correct picks. You will still be able to Log In, edit your account
              and observe scores.
            </StyledSpan>
          </StyledLi>
          <StyledLi data-testid="rulesModal__li">
            Ties will be settled by combat.
            <StyledSpan>Non - negotiable.</StyledSpan>
          </StyledLi>
        </StyledUl>
        <StyledH6 data-testid="rulesModal__h6">
          Made By Patrick McLennan
        </StyledH6>
      </StyledSection>
    );
  }
}

export default RulesModal;
