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
  render(): JSX.Element {
    return (
      <StyledDiv data-testid="message">
        <h1>hello</h1>
      </StyledDiv>
    );
  }
}

export default Message;
