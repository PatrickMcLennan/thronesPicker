import * as React from 'react';

interface IProps {
  name?: string;
  profilePic: string;
  house: string;
  changeComponent: Function;
}

interface IState {
  name: string;
}

class Nav extends React.Component<IProps, IState> {
  state = {
    name: this.props.name
  };

  render(): JSX.Element {
    return (
      <nav data-testid="nav">
        <h1>name</h1>
        <h1>house</h1>
      </nav>
    );
  }
}

export default Nav;
