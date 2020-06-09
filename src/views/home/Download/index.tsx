import React from 'react';

import { Content } from '~/components/Section';
import { Button } from '~/components/Button';
import { getPlatformIcon } from '~/utils/platform';
import { StyledDownload, Overline, Title, Description, Info } from './style';

export const Download = () => {
  const platformIcon = React.useMemo(() => getPlatformIcon(), []);

  return (
    <Content>
      <StyledDownload>
        <Info>
          <Overline>Download</Overline>
          <Title>Be just the way you are</Title>
          <Description>
            Don't let big companies to spy on you. Browse the way you want,
            thanks to the built-in adblocker, UI customization and more.
          </Description>
        </Info>
        <Button
          to=""
          iconWhite={false}
          background="rgba(255,255,255,0.8)"
          foreground="#000"
          icon={platformIcon}
        >
          Download now
        </Button>
      </StyledDownload>
    </Content>
  );
};
