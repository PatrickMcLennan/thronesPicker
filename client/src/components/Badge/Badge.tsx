import * as React from 'react';

import { StyledFigure, StyledFigCaption, StyledP } from './Badge.style';
import Thumbnail from '../Thumbnail/Thumbnail';

interface IProps {
  src: string;
  name: string;
  house: string;
  sigilUrl: string;
  onClick?: Function;
  handler?: Function;
  currentScore?: number;
  home?: string;
  delay?: number;
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
      home,
      currentScore,
      thumbnailSize,
      handler,
      sigilUrl
    } = this.props;
    const { triggerAnimation } = this.state;
    return (
      <StyledFigure
        data-testid="badge"
        triggerAnimation={triggerAnimation}
        onClick={handler}>
        <Thumbnail src={src} name={name} size={thumbnailSize} />
        <StyledFigCaption>
          <StyledP data-testid="badge__name">{name}</StyledP>
          <StyledP data-testid="badge__house">House {house}</StyledP>
          {name.length >= 1 && (
            <StyledP data-testid="badge__score">Score: {currentScore}</StyledP>
          )}
          {home && (
            <StyledP data-testid="badge__score">Score: {currentScore}</StyledP>
          )}
        </StyledFigCaption>
        <Thumbnail src={sigilUrl} name={name} size={thumbnailSize} />
      </StyledFigure>
    );
  }
}

export default Badge;
