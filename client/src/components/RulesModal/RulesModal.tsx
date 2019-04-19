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
      <StyledSection triggerAnimation={triggerAnimation}>
        <h1>hello from the rules modal</h1>
      </StyledSection>
    );
  }
}

export default RulesModal;
