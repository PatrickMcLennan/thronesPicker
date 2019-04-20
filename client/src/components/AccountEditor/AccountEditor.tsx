import * as React from 'react';

import Badge from '../Badge/Badge';

import {
  StyledForm,
  StyledSection,
  StyledLabel,
  StyledInput,
  StyledP,
  StyledUl
} from './AccountEditor.style';
import { allHouses } from '../../utils/houseList';
import { IUser, IHouse } from '../../utils/clientDictionary';

interface IProps {
  user: IUser;
  changeComponent: Function;
  putEditAccount: Function;
}

interface IState {
  newHouse: IHouse;
  newDescription: string;
  triggerAnimation: boolean;
  showHouseList: boolean;
}

class AccountEditor extends React.Component<IProps, IState> {
  state = {
    newHouse: this.props.user.house,
    newDescription: this.props.user.description,
    triggerAnimation: false,
    showHouseList: false
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

  renderHouseList: Function = (): void => {
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        showHouseList: !this.state.showHouseList
      })
    );
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target;
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, [id]: value })
    );
  };

  handleHouseChange: Function = (newHouse: IHouse): void => {
    this.renderHouseList();
    return this.setState(
      (prevState: IState): IState => ({ ...prevState, newHouse })
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
    const {
      user: { house }
    } = this.props;
    const { triggerAnimation, newDescription, showHouseList } = this.state;
    return (
      <StyledSection
        data-testid="accountEditor"
        triggerAnimation={triggerAnimation}>
        <StyledForm
          data-testid="accountEditor__form"
          triggerAnimation={triggerAnimation}
          onSubmit={this.handleSubmit}>
          <StyledLabel
            data-testid="accountEditor__label--newHouse"
            htmlFor="newHouse">
            <StyledP data-testid="accountEditor__p--newHouse">
              Choose Your House
            </StyledP>
            <Badge
              data-testid="accountEditor__badge--button"
              src={house.name.length >= 1 ? house.sigilUrl : ''}
              name={house.name.length >= 1 ? house.name : ''}
              house={house.name.length >= 1 ? house.name : `Bend the knee...`}
              sigilUrl={house.name.length >= 1 ? house.sigilUrl : ''}
              onClick={() => this.renderHouseList}
              thumbnailSize="small"
            />
            {showHouseList && (
              <StyledUl data-testid="accountEditor__ul">
                {allHouses.filter(
                  (houseList: IHouse): JSX.Element =>
                    houseList.name !== house.name && (
                      <li>
                        <Badge
                          data-testid="accountEditor__badge--house"
                          src={houseList.sigilUrl}
                          name={houseList.name}
                          house=""
                          sigilUrl={houseList.sigilUrl}
                          handler={this.handleHouseChange(houseList)}
                          thumbnailSize={'small'}
                        />
                      </li>
                    )
                )}
              </StyledUl>
            )}
          </StyledLabel>
          <StyledLabel
            data-testid="accountEditor__label--newDescription"
            htmlFor="newDescription">
            <StyledP data-testid="accountEditor__p--newDescription">
              Your Description
            </StyledP>
            <StyledInput
              data-testid="accountEditor__input--newDescription"
              type="text"
              placeholder={newDescription}
              value={newDescription}
              id="newDescription"
              onChange={this.handleChange}
            />
          </StyledLabel>
        </StyledForm>
      </StyledSection>
    );
  }
}

export default AccountEditor;
