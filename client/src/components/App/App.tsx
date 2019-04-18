import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  IUser,
  IServerCall,
  IPostLoginResponse,
  IPutEditAccountRequest,
  IPutEditAccountResponse,
  IPicks
} from '../../utils/clientDictionary';
import { GlobalStyle, theme } from '../../utils/globalStyles';

interface IState {
  user: IUser;
  serverCall: IServerCall;
  showLogIn: boolean;
  showHome: boolean;
  otherUsers: IUser[];
}

class App extends React.Component<{}, IState> {
  state: IState = {
    user: {
      name: '',
      facebookId: '',
      profilePic: '',
      house: '',
      description: '',
      picks: {}
    },
    serverCall: {
      show: false,
      success: true,
      message: ''
    },
    showLogIn: true,
    showHome: false,
    otherUsers: []
  };

  getLogIn: Function = (): void => {
    const callBack: Function = ({
      user,
      otherUsers
    }: IPostLoginResponse): void => {
      this.setState({
        user,
        showLogIn: false,
        showHome: true,
        otherUsers
      });
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
      user: { facebookId, picks, profilePic }
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
        (response: IServerCall): Function => {
          this.setState((prevState: IState) => ({
            ...prevState,
            user: { ...this.state.user, picks: newPicks }
          }));
          return this.showMessage(response);
        }
      )
      .catch((err: Response): Function => this.showMessage(err));
  };

  render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <h1>hello</h1>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
