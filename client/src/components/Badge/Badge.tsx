import * as React from 'react';

import { StyledFigure } from './Badge.style';
import Thumbnail from '../Thumbnail/Thumbnail';

interface IProps {
  src: string;
  name: string;
  house: string;
  sigilUrl: string;
  onClick?: Function;
  handler?: Function;
  currentScore?: number;
  thumbnailSize: string;
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
    const {
      src,
      name,
      house,
      currentScore,
      thumbnailSize,
      handler
    } = this.props;
    const { triggerAnimation } = this.state;
    return (
      <StyledFigure
        data-testid="badge"
        triggerAnimation={triggerAnimation}
        onClick={handler}>
        <Thumbnail src={src} name={name} size={thumbnailSize} />
        <figcaption>
          <p data-testid="badge__name">{name}</p>
          <p data-testid="badge__house">House {house}</p>
          <p data-testid="badge__score">{currentScore}</p>
        </figcaption>
      </StyledFigure>
    );
  }
}

export default Badge;
