import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { IUser, IPostLoginResponseSuccess } from '../../utils/dictionary';
import { GlobalStyle, theme } from '../../utils/globalStyles';

interface IState {
  user: IUser;
  showLogIn: boolean;
  showHome: boolean;
  otherUsers: IUser[];
}

class App extends React.Component<{}, IState> {
  state = {
    user: {
      name: '',
      facebookId: 0,
      profilePic: '',
      house: '',
      description: ''
      // picks:
    },
    showLogIn: false,
    showHome: false,
    otherUsers: []
  };

  getLogIn: Function = (): void => {
    const callBack: Function = ({
      user,
      otherUsers
    }: IPostLoginResponseSuccess): void => {
      this.setState((prevState: IState) => ({
        ...prevState,
        user: {
          name: user.name,
          facebookId: user.facebookId,
          profilePic: user.profilePic,
          house: user.house,
          description: user.description
        },
        otherUsers
      }));
    };
  };

  postMakePicks: Function = async (): Promise<void> => {
    const {
      user: { facebookId }
    } = this.state;

    await fetch(`http://linktobackend.com/makePicks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ facebookId, picks })
    });
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
