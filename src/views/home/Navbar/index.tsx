import React from 'react';

import { StyledNavbar, Content, Logo, Title } from './style';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Content>
        <Logo />
        <Title>Wexond</Title>
      </Content>
    </StyledNavbar>
  );
};
