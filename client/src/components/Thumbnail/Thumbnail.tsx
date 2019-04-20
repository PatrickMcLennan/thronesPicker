import * as React from 'react';

import { StyledImg } from './Thumbnail.style';

interface IProps {
  src: string;
  name: string;
  size: string;
}

interface IState {
  triggerAnimation: boolean;
}

class Thumbnail extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentWillMount() {
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, triggerAnimation: true })
    );
  }

  compomentWillUnmount() {
    this.setState(
      (prevState: IState): IState => ({ ...prevState, triggerAnimation: false })
    );
    return setTimeout((): void => null, 750);
  }

  render(): JSX.Element {
    const { src, name, size } = this.props;
    return (
      <StyledImg data-testid="thumbnail" src={src} alt={name} size={size} />
    );
  }
}

export default Thumbnail;
