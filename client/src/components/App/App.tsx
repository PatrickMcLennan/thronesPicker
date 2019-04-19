import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  IUser,
  IServerCall,
  IPostLoginResponse,
  IPutEditAccountRequest,
  IPutEditAccountResponse,
  IPicks,
  IPostMakePicsResponse
} from '../../utils/clientDictionary';
import { GlobalStyle, theme } from '../../utils/globalStyles';

import LogInModal from '../LogInModal/LogInModal';
import RulesModal from '../RulesModal/RulesModal';
import AccountEditor from '../AccountEditor/AccountEditor';
import Nav from '../Nav/Nav';

interface IState {
  user: IUser;
  serverCall: IServerCall;
  showLogIn: boolean;
  showAccountEditor: boolean;
  showMakePicks: boolean;
  showOtherUsers: boolean;
  showRules: boolean;
  allComponents: string[];
  otherUsers: IUser[];
}

class App extends React.Component<{}, IState> {
  state: IState = {
    user: {
      name: '',
      facebookId: '',
      accessToken: 0,
      profilePic: '',
      house: {
        name: '',
        sigil: '',
        members: [],
        wikiLink: ''
      },
      description: '',
      picks: {
        ironThrone: '',
        handOfTheKing: '',
        nightsWatchLordCommander: '',
        nightsWatch: '',
        winterfellLord: '',
        casterlyRockLord: '',
        dorneLord: '',
        reachLord: '',
        riverrunLord: '',
        ironIslandsLord: '',
        wardenNorth: '',
        wardenEast: '',
        wardenSouth: '',
        wardenWest: '',
        dead: [],
        unpicked: []
      },
      currentScore: 0
    },
    serverCall: {
      show: false,
      success: true,
      message: ''
    },
    showLogIn: true,
    showAccountEditor: false,
    showMakePicks: false,
    showOtherUsers: false,
    showRules: false,
    allComponents: [
      'showLogin',
      'showAccountEditor',
      'showMakePicks',
      'showOtherUsers',
      'showRules'
    ],
    otherUsers: []
  };

  getLogIn: Function = (): void => {
    const callBack: Function = ({
      user,
      otherUsers
    }: IPostLoginResponse): void => {
      this.setState(
        (prevState: IState): IState => ({
          ...prevState,
          user,
          showLogIn: false,
          showOtherUsers: true,
          otherUsers
        })
      );
    };
  };

  showMessage: Function = ({ success, message }: IServerCall): void => {
    this.setState({
      serverCall: { show: true, success, message }
    });

    setTimeout(
      (): void =>
        this.setState({
          serverCall: { show: false, success: false, message: '' }
        }),
      2750
    );
  };

  putEditAccount: Function = async ({
    newHouse,
    newDescription
  }: IPutEditAccountRequest) => {
    const {
      user: { facebookId }
    } = this.state;

    await fetch(`http://linktobackend.com/editAccount`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, newHouse, newDescription })
    })
      .then(
        (response: IPutEditAccountResponse): Function => {
          const { newName } = response;
          this.setState((prevState: IState) => ({
            ...prevState,
            user: {
              ...this.state.user,
              name: newName,
              house: newHouse,
              description: newDescription
            }
          }));
          return this.showMessage(response);
        }
      )
      .catch((err: IServerCall): Function => this.showMessage(err));
  };

  postMakePicks: Function = async (newPicks: IPicks): Promise<void> => {
    const {
      user: { facebookId }
    } = this.state;

    await fetch(`http://linktobackend.com/makePicks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, newPicks })
    })
      .then(
        (response: IPostMakePicsResponse): Function => {
          this.setState((prevState: IState) => ({
            ...prevState,
            user: { ...this.state.user, picks: newPicks }
          }));
          return this.showMessage(response);
        }
      )
      .catch((err: IServerCall): Function => this.showMessage(err));
  };

  changeComponent: Function = (newComponent: string): void => {
    return this.state.allComponents.forEach(
      (componentKey: string): void =>
        this.setState(
          (prevState: IState): IState => ({
            ...prevState,
            [componentKey]: componentKey === newComponent
          })
        )
    );
  };

  render(): JSX.Element {
    const { user, otherUsers }: IState = this.state;
    const { name, profilePic, house }: IUser = user;
    const { showLogIn, showAccountEditor, showRules }: IState = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav
          name={name}
          profilePic={profilePic}
          house={house}
          changeComponent={this.changeComponent}
          randomSuggestion={
            otherUsers[Math.floor(Math.random() * otherUsers.length)]
          }
        />
        {showLogIn && <LogInModal />}
        {showRules && <RulesModal changeComponent={this.changeComponent} />}
        {showAccountEditor && (
          <AccountEditor
            user={user}
            changeComponent={this.changeComponent}
            putEditAccount={this.putEditAccount}
          />
        )}
      </ThemeProvider>
    );
  }
}

export default App;
