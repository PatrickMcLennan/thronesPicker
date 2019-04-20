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
import { fbLogIn } from '../../utils/auth';

import LogInModal from '../LogInModal/LogInModal';
import RulesModal from '../RulesModal/RulesModal';
import AccountEditor from '../AccountEditor/AccountEditor';
import OtherUsers from '../OtherUsers/OtherUsers';
import UserPicks from '../OtherUsers/OtherUsers';
import Nav from '../Nav/Nav';
import Message from '../Message/Message';

interface IState {
  user: IUser;
  currentUser: IUser;
  serverCall: IServerCall;
  showLogIn: boolean;
  showAccountEditor: boolean;
  showUserPicks: boolean;
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
      house: '',
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
    currentUser: {
      name: '',
      facebookId: '',
      accessToken: 0,
      profilePic: '',
      house: '',
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
      showResult: false,
      success: true,
      message: ''
    },
    showLogIn: true,
    showAccountEditor: false,
    showUserPicks: false,
    showOtherUsers: false,
    showRules: false,
    allComponents: [
      'showLogin',
      'showAccountEditor',
      'showUserPicks',
      'showOtherUsers',
      'showRules'
    ],
    otherUsers: []
  };

  getLogIn: Function = async (): Promise<void> => {
    const callBack: Function = ({
      user,
      otherUsers,
      success,
      message
    }: IPostLoginResponse): void => {
      this.setState(
        (prevState: IState): IState => ({
          ...prevState,
          user,
          otherUsers,
          showLogIn: false,
          showOtherUsers: true
        })
      );
      this.showMessage(success, message);
    };
    return fbLogIn(callBack);
  };

  showMessage: Function = ({ success, message }: IServerCall) => {
    this.setState({
      serverCall: { showResult: true, success, message }
    });

    return setTimeout(
      (): void =>
        this.setState({
          serverCall: { showResult: false, success: false, message: '' }
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

  changeCurrentUser: Function = (newCurrentUser: IUser): void => {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        currentUser: newCurrentUser
      })
    );
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
    const { user, otherUsers, serverCall, currentUser }: IState = this.state;
    const { showResult, success, message } = serverCall;
    const { name, profilePic, house }: IUser = user;
    const {
      showLogIn,
      showAccountEditor,
      showRules,
      showOtherUsers,
      showUserPicks
    }: IState = this.state;
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav
          name={name}
          profilePic={profilePic}
          house={house}
          changeCurrentUser={this.changeCurrentUser}
          changeComponent={this.changeComponent}
          randomSuggestion={
            otherUsers[Math.floor(Math.random() * otherUsers.length)]
          }
        />
        {showLogIn && <LogInModal />}
        {showOtherUsers && (
          <OtherUsers
            changeCurrentUser={this.changeCurrentUser}
            changeComponent={this.changeComponent}
            otherUsers={otherUsers}
          />
        )}
        {showUserPicks && (
          <UserPicks
            currentUser={currentUser}
            changeCurrentUser={this.changeCurrentUser}
            changeComponent={this.changeComponent}
          />
        )}
        {showRules && <RulesModal changeComponent={this.changeComponent} />}
        {showAccountEditor && (
          <AccountEditor
            user={user}
            changeComponent={this.changeComponent}
            putEditAccount={this.putEditAccount}
          />
        )}

        {showResult && <Message success={success} message={message} />}
      </ThemeProvider>
    );
  }
}

export default App;
