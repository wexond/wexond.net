import styled from 'styled-components';

import { robotoRegular, montserratBold } from '~/mixins/typography';

export const StyledLanding = styled.div`
  z-index: 3;
  display: flex;
  width: 100%;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 64px;
`;

export const Info = styled.div`
  z-index: 2;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 128px;
`;

export const Title = styled.div`
  font-size: 4em;
  margin-bottom: 16px;
  ${montserratBold()};
`;

export const Description = styled.h2`
  max-width: 600px;
  opacity: 0.8;
  font-size: 1.6em;
  ${robotoRegular()};
`;
