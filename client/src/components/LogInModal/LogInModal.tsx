import * as React from 'react';

import { StyledSection } from './LogInModal.style';

interface IState {
  triggerAnimation: boolean;
}

class LogInModal extends React.Component<{}, {}> {
  state = {
    triggerAnimation: false
  };

  componentDidMount() {
    return this.setState((prevState: IState) => ({
      ...prevState,
      triggerAnimation: true
    }));
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
        triggerAnimation={triggerAnimation}
        data-testid="logInModal">
        hello from login
      </StyledSection>
    );
  }
}

export default LogInModal;
