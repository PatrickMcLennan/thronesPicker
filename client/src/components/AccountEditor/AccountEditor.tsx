import * as React from 'react';

import { StyledForm, StyledSection } from './AccountEditor.style';
import { IUser } from '../../utils/clientDictionary';

interface IProps {
  user: IUser;
  changeComponent: Function;
  putEditAccount: Function;
}

interface IState {
  user: IUser;
  newHouse: string;
  newDescription: string;
  triggerAnimation: boolean;
}

class AccountEditor extends React.Component<IProps, IState> {
  state = {
    user: { ...this.props.user },
    newHouse: '',
    newDescription: '',
    triggerAnimation: false
  };

  componentDidMount(): void {
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, triggerAnimation: true })
    );
  }

  componentWillUnmount() {
    this.setState((prevState: IState) => ({
      ...prevState,
      triggerAnimation: false
    }));
    return setTimeout((): null => null, 750);
  }

  handleChange: Function = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, [id]: value })
    );
  };

  handleSubmit = async (
    e: React.ChangeEvent<HTMLFormElement>
  ): Promise<Function> => {
    const { newHouse, newDescription } = this.state;
    const { putEditAccount, changeComponent }: IProps = this.props;
    e.preventDefault();
    await putEditAccount({ newHouse, newDescription });
    return changeComponent('showHome');
  };

  render(): JSX.Element {
    const { triggerAnimation } = this.state;
    return (
      <StyledSection
        data-testid="accountEditor"
        triggerAnimation={triggerAnimation}>
        <StyledForm
          triggerAnimation={triggerAnimation}
          data-testid="accountEditor__form"
          onSubmit={this.handleSubmit}
        />
      </StyledSection>
    );
  }
}

export default AccountEditor;
