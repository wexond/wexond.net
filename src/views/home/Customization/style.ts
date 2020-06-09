import styled from 'styled-components';

import { montserratBold } from '~/mixins/typography';

export const StyledCustomization = styled.div`
  margin-top: 32px;
  border-radius: 8px;
  color: black;
  margin-bottom: 32px;
  display: flex;
  max-width: 1280px;
`;

export const Box = styled.div`
  min-width: 350px;
  max-width: 350px;
  padding-top: 24px;
  padding-right: 24px;
`;

export const Screenshot = styled.img`
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transform: translateY(-5vw);
  flex: 1;
  width: calc(100% - 500px);
  right: 32px;
`;
