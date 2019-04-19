import * as React from 'react';

import { StyledSection } from './OtherUsers.style';

interface IProps {
  changeComponent: Function;
}

interface IState {
  triggerAnimation: boolean;
}

class OtherUsers extends React.Component<IProps, IState> {
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
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        triggerAnimation: false
      })
    );
    return setTimeout((): void => null, 750);
  }

  render(): JSX.Element {
    const { triggerAnimation } = this.state;
    return (
      <StyledSection
        data-testid="otherUsers"
        triggerAnimation={triggerAnimation}>
        <h1>hello from otherUsers</h1>
      </StyledSection>
    );
  }
}

export default OtherUsers;
