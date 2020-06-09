import React from 'react';

import {
  Overline,
  SectionTitle,
  SectionDescription,
} from '~/components/Section';
import { IMAGE_DISCORD_CIRCLE } from '~/constants/images';
import { Buttons } from '~/components/Button/style';
import { OutlinedButton } from '~/components/Button';
import { Container, StyledCommunity, Image } from './style';

export const Community = () => {
  return (
    <Container>
      <Image src={IMAGE_DISCORD_CIRCLE} />
      <StyledCommunity>
        <Overline>Discord community</Overline>
        <SectionTitle>Join Wexond's community</SectionTitle>
        <SectionDescription>
          We're always happy to hear feedback from you on our browser. With your
          help we can develop and adjust it better to fit your needs and
          expectations. Just talk.
        </SectionDescription>
        <Buttons>
          <OutlinedButton to="https://discord.gg/P7Vn4VX">
            Join us
          </OutlinedButton>
        </Buttons>
      </StyledCommunity>
    </Container>
  );
};
