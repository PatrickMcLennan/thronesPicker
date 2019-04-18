import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { IUser } from '../../utils/dictionary';
import { GlobalStyle, theme } from '../../utils/globalStyles';

interface IState {
  user: IUser;
  showLogIn: boolean;
  showHome: boolean;
}

class App extends React.Component<{}, IState> {
  state = {
    user: {
      name: '',
      facebookId: 0,
      profilePic: '',
      house: '',
      description: ''
    },
    showLogIn: false,
    showHome: false
  };

  getLogIn: Function = (): void => {
    const callBack: Function = ({
      name,
      facebookId,
      profilePic,
      house,
      description
    }: IUser): void => {
      this.setState((prevState: IState) => ({
        ...prevState,
        user: {
          name,
          facebookId,
          profilePic,
          house,
          description
        }
      }));
    };
  };

  postMakePicks: Function = (user: IUser): void => {};

  putEditPicks: Function = (user: IUser): void => {};

  getOtherUsers: Function = (): IUser[] | void => {};

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
