import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  IUser,
  ISection,
  IServerCall,
  IPostLoginResponse,
  IPutEditAccountRequest,
  IPutEditAccountResponse,
  IPicks,
  IPostMakePicsResponse
} from '../../utils/clientDictionary';
import { GlobalStyle, theme } from '../../utils/globalStyles';
import { fbLogInInit, fbLogIn } from '../../utils/auth';

import LogInModal from '../LogInModal/LogInModal';
import RulesModal from '../RulesModal/RulesModal';
import AccountEditor from '../AccountEditor/AccountEditor';
import OtherUsers from '../OtherUsers/OtherUsers';
import UserPicks from '../UserPicks/UserPicks';
import Nav from '../Nav/Nav';
import Message from '../Message/Message';

interface IState {
  user: IUser;
  currentUser: IUser;
  serverCall: IServerCall;
  showLogIn: ISection;
  showAccountEditor: ISection;
  showUserPicks: ISection;
  showOtherUsers: ISection;
  showRules: ISection;
  currentComponent: string;
  otherUsers: IUser[];
}

class App extends React.Component<{}, IState> {
  state: IState = {
    user: {
      name: '',
      facebookId: '',
      accessToken: 0,
      profilePic: '',
      sigilUrl: '',
      house: {
        name: '',
        sigilUrl: ''
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
    currentUser: {
      name: '',
      facebookId: '',
      accessToken: 0,
      profilePic: '',
      sigilUrl: '',
      house: {
        name: '',
        sigilUrl: ''
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
      showResult: false,
      success: false,
      message: ''
    },
    showLogIn: {
      animate: true,
      render: true
    },
    showAccountEditor: {
      animate: false,
      render: false
    },
    showUserPicks: {
      animate: false,
      render: false
    },
    showOtherUsers: {
      animate: false,
      render: false
    },
    showRules: {
      animate: false,
      render: false
    },
    currentComponent: 'showLogIn',
    otherUsers: []
  };

  componentDidMount() {
    return fbLogInInit();
  }

  changeComponent: Function = (newComponent: string): any => {
    const { currentComponent } = this.state;
    this.setState((prevState: IState) => ({
      ...prevState,
      [currentComponent]: {
        animate: false,
        render: true
      },
      [newComponent]: {
        animate: true,
        render: true
      }
    }));
    return setTimeout(
      () =>
        this.setState((prevState: IState) => ({
          ...prevState,
          [currentComponent]: { animate: false, render: false },
          currentComponent: newComponent
        })),
      750
    );
  };

  getLogIn: Function = async (): Promise<void> => {
    const callBack: Function = ({
      user,
      otherUsers,
      success,
      message
    }: IPostLoginResponse): void => {
      this.showMessage(success, message);
      this.setState(
        (prevState: IState): IState => ({
          ...prevState,
          user,
          otherUsers
          // showLogIn: {
          //   animate: false,
          //   render: true
          // },
          // showOtherUsers: {
          //   animate: true,
          //   render: true
          // },
          // currentComponent: 'showOtherUsers'
        })
      );
      this.changeComponent('showOtherUsers');
    };
    return fbLogIn(callBack);
  };

  showMessage: Function = (
    success: IServerCall['success'],
    message: IServerCall['message']
  ) => {
    this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        serverCall: {
          showResult: true,
          success,
          message
        }
      })
    );
    return setTimeout(
      (): void =>
        this.setState(
          (prevState: IState): IState => ({
            ...prevState,
            serverCall: { showResult: false, success: false, message: '' }
          })
        ),
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
        currentUser: { ...newCurrentUser }
      })
    );
  };

  render(): JSX.Element {
    const { user, otherUsers, serverCall, currentUser }: IState = this.state;
    const { showResult, success, message } = serverCall;
    const { name }: IUser = user;
    const {
      showLogIn,
      showAccountEditor,
      showRules,
      showOtherUsers,
      showUserPicks
    }: IState = this.state;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          {name.length >= 1 && (
            <Nav
              user={user}
              changeCurrentUser={this.changeCurrentUser}
              changeComponent={this.changeComponent}
              randomSuggestion={
                otherUsers.length >= 1
                  ? otherUsers[Math.floor(Math.random() * otherUsers.length)]
                  : null
              }
            />
          )}
          {showLogIn.render && <LogInModal getLogIn={this.getLogIn} />}
          {showOtherUsers.render && (
            <OtherUsers
              animate={showOtherUsers.animate}
              changeCurrentUser={this.changeCurrentUser}
              changeComponent={this.changeComponent}
              otherUsers={otherUsers}
            />
          )}
          {showUserPicks.render && (
            <UserPicks
              animate={showUserPicks.animate}
              currentUser={currentUser}
              changeCurrentUser={this.changeCurrentUser}
              changeComponent={this.changeComponent}
            />
          )}
          {showRules.render && (
            <RulesModal
              changeComponent={this.changeComponent}
              animate={showRules.animate}
            />
          )}
          {showAccountEditor.render && (
            <AccountEditor
              user={user}
              animate={showAccountEditor.animate}
              changeComponent={this.changeComponent}
              putEditAccount={this.putEditAccount}
            />
          )}

          {showResult && <Message success={success} message={message} />}
        </>
      </ThemeProvider>
    );
  }
}

export default App;
