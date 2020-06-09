import React from 'react';

import { getPlatformIcon } from '~/utils/platform';
import { Button, OutlinedButton } from '~/components/Button';
import { Buttons } from '~/components/Button/style';
import { StyledLanding, Info, Title, Description } from './style';
import { ICON_GITHUB } from '~/constants/icons';

export const Landing = () => {
  const platformIcon = React.useMemo(() => getPlatformIcon(), []);

  return (
    <StyledLanding>
      <Info>
        <Title>You make the rules</Title>
        <Description>
          You decide what will happen with your data. You customize the browser
          to fit your needs. Just you.
        </Description>
        <Buttons>
          <Button to="/" icon={platformIcon}>
            Download now
          </Button>
          <OutlinedButton
            to="https://github.com/wexond/wexond"
            icon={ICON_GITHUB}
          >
            GitHub
          </OutlinedButton>
        </Buttons>
      </Info>
    </StyledLanding>
  );
};
