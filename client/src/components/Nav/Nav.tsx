import * as React from 'react';

import Badge from '../Badge/Badge';
import Thumbnail from '../Thumbnail/Thumbnail';

import {
  StyledNav,
  StyledUl,
  StyledLi,
  StyledH4,
  StyledH4Box
} from './Nav.style';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  user: IUser;
  changeComponent: Function;
  changeCurrentUser: Function;
  randomSuggestion?: IUser;
}

interface IState {
  renderMenu: boolean;
  triggerAnimation: boolean;
}

class Nav extends React.Component<IProps, IState> {
  state = {
    renderMenu: false,
    triggerAnimation: false
  };

  componentWillMount(): void {
    return this.setState({ triggerAnimation: true });
  }

  componentWillUnmount() {
    this.setState({ triggerAnimation: false });
    return setTimeout((): null => null, 750);
  }

  toggleMenu: Function = (): any => {
    const { renderMenu } = this.state;
    if (!renderMenu) {
      return this.setState(
        (prevState: IState): IState => ({
          ...prevState,
          renderMenu: true,
          triggerAnimation: true
        })
      );
    } else if (renderMenu) {
      this.setState(
        (prevState: IState): IState => ({
          ...prevState,
          triggerAnimation: false
        })
      );
      return setTimeout(
        () =>
          this.setState(
            (prevState: IState): IState => ({ ...prevState, renderMenu: false })
          ),
        750
      );
    }
  };

  renderPicks: Function = (
    newCurrentUser: IUser,
    newComponent: string
  ): Function => {
    const { changeComponent, changeCurrentUser } = this.props;
    changeCurrentUser(newCurrentUser);
    this.toggleMenu()
    return changeComponent(newComponent);
  };

  handleClick: Function = (newComponent: string): Function => {
    const {changeComponent} = this.props;
    this.toggleMenu();
    return changeComponent(newComponent)
  }

  render(): JSX.Element {
    const { user, randomSuggestion, changeComponent }: IProps = this.props;
    const { name, house, profilePic } = user;
    const { renderMenu, triggerAnimation }: IState = this.state;
    return (
      <StyledNav
        data-testid="nav"
        triggerAnimation={triggerAnimation}>
        <Badge src={user.profilePic} name={user.name} house={user.house.name} sigilUrl={user.sigilUrl} handler={this.toggleMenu} currentScore={user.currentScore} thumbnailSize='big' />
        {renderMenu && (
          <>
            <StyledUl data-testid="nav__ul">
              <StyledLi
                data-testid="nav__li"
                triggerAnimation={triggerAnimation}
                onClick={() => this.handleClick('showAccountEditor')}
                delay={0.15}>
                Edit Account
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => this.handleClick('showMakePicks')}
                triggerAnimation={triggerAnimation}
                delay={0.30}>
                Make Picks
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => this.handleClick('showRules')}
                triggerAnimation={triggerAnimation}
                delay={0.45}>
                The Rules
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                onClick={() => this.handleClick('showOtherUsers')}
                delay={0.6}
                triggerAnimation={triggerAnimation}>
                See other Picks
              </StyledLi>
              <StyledLi
                data-testid="nav__li"
                delay={0.75}
                triggerAnimation={triggerAnimation}>
                <Badge
                  src={randomSuggestion ? randomSuggestion.profilePic : ''}
                  name={randomSuggestion ? randomSuggestion.name : ''}
                  house={randomSuggestion ? randomSuggestion.house.name : ''}
                  sigilUrl={randomSuggestion ? randomSuggestion.sigilUrl : ''}
                  handler={
                    randomSuggestion
                      ? () =>
                          this.renderPicks(randomSuggestion, 'showUserPicks')
                      : () => console.log('please work')
                  }
                  currentScore={
                    randomSuggestion ? randomSuggestion.currentScore : 0
                  }
                  thumbnailSize={'big'}
                />
              </StyledLi>
            </StyledUl>
          </>
        )}
      </StyledNav>
    );
  }
}

export default Nav;
