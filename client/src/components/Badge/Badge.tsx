import * as React from 'react';

import { StyledFigure } from './Badge.style';
import Thumbnail from '../Thumbnail/Thumbnail';
import { IUser } from '../../../../server/src/utils/serverDictionary';

interface IProps {
  src: string;
  name: string;
  house: string;
  sigilUrl: string;
  handler: Function;
  currentScore?: number;
}

interface IState {
  triggerAnimation: boolean;
}

class Badge extends React.Component<IProps, IState> {
  state = {
    triggerAnimation: false
  };

  componentDidMount(): void {
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
    const { src, name, house, handler, currentScore } = this.props;
    const { triggerAnimation } = this.state;
    return (
      <StyledFigure data-testid="badge" triggerAnimation={triggerAnimation}>
        <Thumbnail src={src} name={name} />
        <figcaption>
          <p>{name}</p>
          <p>House {house}</p>
          {currentScore && <p>{currentScore}</p>}
        </figcaption>
      </StyledFigure>
    );
  }
}

export default Badge;
