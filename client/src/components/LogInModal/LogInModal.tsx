import * as React from 'react';

import { StyledSection } from './LogInModal.style';

class LogInModal extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <StyledSection data-testid="logInModal">hello from login</StyledSection>
    );
  }
}

export default LogInModal;
