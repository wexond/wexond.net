import React from 'react';

import {
  SectionTitle,
  Content,
  Overline,
  SectionDescription,
} from '~/components/Section';
import { IMAGE_SCREENSHOT } from '~/constants/images';
import { StyledCustomization, Box, Screenshot } from './style';

export const Customization = () => {
  return (
    <Content>
      <StyledCustomization>
        <Box>
          <Overline>Customization</Overline>
          <SectionTitle>The design is all yours</SectionTitle>
          <SectionDescription>
            Customize the browser UI however you want.
          </SectionDescription>
        </Box>
        <Screenshot src={IMAGE_SCREENSHOT} />
      </StyledCustomization>
    </Content>
  );
};
