import * as React from 'react';

import { StyledDiv } from './Message.style';

interface IProps {}
interface IState {
  triggerAnimation: boolean;
}

class Message extends React.Component<IProps, IState> {
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
      <StyledDiv triggerAnimation={triggerAnimation} data-testid="message">
        <h1>hello</h1>
      </StyledDiv>
    );
  }
}

export default Message;
