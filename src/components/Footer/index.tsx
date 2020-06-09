import React from 'react';

import { Content } from '../Section';
import { IMAGE_WEXOND_SHAPE, IMAGE_DISCORD_COLOR } from '~/constants/images';
import { ICON_TWITTER, ICON_GITHUB } from '~/constants/icons';
import {
  StyledFooter,
  Container,
  BrandInfo,
  Logo,
  Title,
  Socials,
  Social,
  Column,
  Line,
} from './style';

export const Footer = () => {
  return (
    <StyledFooter>
      <Content>
        <Container>
          <BrandInfo>
            <Logo src={IMAGE_WEXOND_SHAPE} />
            <Title style={{ marginTop: 32 }}>Follow Wexond</Title>
            <Socials>
              <Social href="#" icon={ICON_TWITTER} />
              <Social href="#" icon={ICON_GITHUB} />
              <Social href="#" icon={IMAGE_DISCORD_COLOR} />
            </Socials>
          </BrandInfo>
          <Column>
            <Title>Downloads</Title>
            <a href="#">Wexond for Windows</a>
            <a href="#">Wexond for macOS</a>
            <a href="#">Wexond for Linux</a>
          </Column>

          <Column>
            <Title>Help</Title>

            <a href="#">Help & support</a>
            <a href="#">Blog</a>
            <a href="#">FAQ</a>
          </Column>

          <Column>
            <Title>Developers</Title>
            <a href="#">GitHub</a>
            <a href="#">Wexond Nightly</a>
          </Column>

          <Column>
            <Title>Legal</Title>
            <a href="#">License</a>
            <a href="#">Privacy</a>
            <a href="#">Cookie policy</a>
          </Column>

          <Column>
            <Title>Company</Title>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Become a partner</a>
          </Column>
        </Container>
        <Line />
        <Container>© 2020 Wexond</Container>
      </Content>
    </StyledFooter>
  );
};
