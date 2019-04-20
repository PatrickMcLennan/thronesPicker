import * as React from 'react';

interface IProps {
  src: string;
  name: string;
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
    const { src, name } = this.props;
    return <img data-testid="thumbnail" src={src} alt={name} />;
  }
}

export default Thumbnail;
