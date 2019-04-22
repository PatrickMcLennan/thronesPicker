import * as React from 'react';

import { StyledDiv, StyledH5 } from './Message.style';

interface IProps {
  success: boolean;
  message: string;
}

interface IState {
  triggerAnimation: boolean;
}

class Message extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentDidMount() {
    this.setState({ triggerAnimation: true });
    return setTimeout(() => this.setState({ triggerAnimation: false }), 2000);
  }
  render(): JSX.Element {
    const { triggerAnimation } = this.state;
    const { success, message } = this.props;
    return (
      <StyledDiv
        triggerAnimation={triggerAnimation}
        data-testid="message"
        success={success}>
        <StyledH5 data-testid="message__h1">{message}</StyledH5>
      </StyledDiv>
    );
  }
}

// 2750

export default Message;
