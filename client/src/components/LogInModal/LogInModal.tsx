import * as React from 'react';

import {
  StyledSection,
  StyledH1,
  StyledH2,
  StyledButton
} from './LogInModal.style';

interface IProps {
  getLogIn: Function;
}

interface IState {
  triggerAnimation: boolean;
}

class LogInModal extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentDidMount() {
    return this.setState((prevState: IState) => ({
      ...prevState,
      triggerAnimation: true
    }));
  }

  handleClick: Function = (): any => {
    const { getLogIn } = this.props;
    this.setState({ triggerAnimation: false });
    return setTimeout(() => getLogIn(), 750);
  };

  render(): JSX.Element {
    const { triggerAnimation } = this.state;
    return (
      <StyledSection
        triggerAnimation={triggerAnimation}
        data-testid="logInModal">
        <StyledH1 data-testid="logInModal__h1">
          <span>t</span>hronePicke<span>r</span>{' '}
        </StyledH1>
        <StyledH2 data-testid="logInModal__h2">
          Place your bets on who will win the Game of Thrones
        </StyledH2>
        <StyledButton
          onClick={this.handleClick}
          data-testid="logInModal__button">
          Log In With Facebook
        </StyledButton>
      </StyledSection>
    );
  }
}

export default LogInModal;
