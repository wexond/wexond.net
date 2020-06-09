import React from 'react';

import Seo from '../Seo';
import { Footer } from '../Footer';
import { GlobalStyle, StyledLayout } from './style';

export default ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Seo />
      <GlobalStyle />
      <StyledLayout>
        {children}
        <Footer />
      </StyledLayout>
    </>
  );
};
