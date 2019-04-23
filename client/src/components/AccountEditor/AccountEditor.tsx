import * as React from 'react';

import Badge from '../Badge/Badge';
import SectionHeader from '../SectionHeader/SectionHeader';

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
  animate: boolean;
  changeComponent: Function;
  putEditAccount: Function;
}

interface IState {
  newHouse: IHouse;
  newDescription: string;
  showHouseList: boolean;
  houseList: IHouse[];
}

class AccountEditor extends React.Component<IProps, IState> {
  state = {
    newHouse: this.props.user.house,
    newDescription: this.props.user.description,
    showHouseList: false,
    houseList: allHouses
  };

  renderHouseList: Function = (): void => {
    const { user } = this.props;
    return this.setState(
      (prevState: IState): IState => ({
        ...prevState,
        showHouseList: !this.state.showHouseList,
        houseList: this.state.houseList.filter(
          (singleHouse: IHouse): boolean => singleHouse.name !== user.house.name
        )
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
      (prevState: IState): IState => ({
        ...prevState,
        newHouse,
        houseList: this.state.houseList.filter(
          (singleHouse: IHouse): boolean =>
            singleHouse.name !== this.state.newHouse.name
        )
      })
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
    const { animate } = this.props;
    const { newHouse, newDescription, showHouseList, houseList } = this.state;
    return (
      <StyledSection data-testid="accountEditor" triggerAnimation={animate}>
        <SectionHeader
          firstLetter="E"
          word="dit Accoun"
          lastLetter="t"
          size={3.5}
        />
        <StyledForm
          data-testid="accountEditor__form"
          onSubmit={this.handleSubmit}>
          <StyledLabel
            data-testid="accountEditor__label--newHouse"
            htmlFor="newHouse">
            <StyledP data-testid="accountEditor__p--newHouse">
              Choose Your House:
            </StyledP>
            <Badge
              src={newHouse.sigilUrl}
              name={''}
              house={newHouse.name}
              sigilUrl={newHouse.sigilUrl}
              handler={this.renderHouseList}
              thumbnailSize="small"
            />
            {showHouseList && (
              <StyledUl data-testid="accountEditor__ul">
                {houseList.map(
                  (singleHouse: IHouse): JSX.Element => (
                    <li data-testid="accountEditor__li">
                      <Badge
                        src={singleHouse.sigilUrl}
                        name=""
                        house={singleHouse.name}
                        sigilUrl={singleHouse.sigilUrl}
                        handler={() => this.handleHouseChange(singleHouse)}
                        thumbnailSize={'small'}
                        key={Math.random()}
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
              Your Description:
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
          <StyledInput
            data-testid="accountEditor__input--submit"
            type="submit"
            value="Edit Account"
            id="submit"
          />
        </StyledForm>
      </StyledSection>
    );
  }
}

export default AccountEditor;
