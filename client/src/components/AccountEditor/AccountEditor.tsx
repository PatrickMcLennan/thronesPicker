import * as React from 'react';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  user: IUser;
  putEditAccount: Function;
}

interface IState {
  user: IUser;
  triggerAnimaton: boolean;
}

class AccountEditor extends React.Component<IProps, IState> {
  state = {
    user: { ...this.props.user },
    triggerAnimaton: false
  };
  handleChange: Function = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, [id]: value })
    );
  };

  handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): Function => {
    const { putEditAccount }: IProps = this.props;
    e.preventDefault();
    return putEditAccount(this.state.user);
  };

  render(): JSX.Element {
    return (
      <section data-testid="accountEditor">
        <form onSubmit={this.handleSubmit} />
      </section>
    );
  }
}

export default AccountEditor;
