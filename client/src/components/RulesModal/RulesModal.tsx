import * as React from 'react';

import { StyledSection } from './RulesModal.style';

interface IProps {
  changeComponent: Function;
}

interface IState {
  triggerAnimation: boolean;
}

class RulesModal extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentWillMount(): void {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        triggerAnimation: true
      })
    );
  }

  componentWillUnmount() {
    this.setState((prevState: IState) => ({
      ...prevState,
      triggerAnimation: false
    }));
    return setTimeout((): null => null, 750);
  }

  render(): JSX.Element {
    const { triggerAnimation } = this.state;
    return (
      <StyledSection
        data-testid="rulesModal"
        triggerAnimation={triggerAnimation}>
        <h4 data-testid="rulesModal__h4">The Rules:</h4>
        <ul data-testid="rulesModal__ul">
          <li data-testid="rulesModal__li">
            Choose which Character is most likely to be doing what at the end of
            the series. Dead, Warden of the East, Lord of WinterFell, Nights
            Watch, etc.
          </li>
          <li data-testid="rulesModal__li">
            Each correct pick earns you 1 point. Whoever has the most points at
            the end will win.
          </li>
          <li data-testid="rulesModal__li">
            Unpicked Characters earn no points.
          </li>
          <li data-testid="rulesModal__li">
            All Picks have to be locked in by <b>8 P.M Sunday, April 29th.</b>{' '}
            You will not be able to change your picks after that.
          </li>
          <li data-testid="rulesModal__li">Ties will be settled by combat.</li>
        </ul>
        <div>
          <h6 data-testid="rulesModal__h6">Made By Patrick McLennan</h6>
        </div>
      </StyledSection>
    );
  }
}

export default RulesModal;
