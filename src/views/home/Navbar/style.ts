import styled from 'styled-components';

import { montserratBold } from '~/mixins/typography';
import { centerIcon } from '~/mixins/images';
import { IMAGE_WEXOND_SHAPE } from '~/constants/images';

export const StyledNavbar = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 24px;
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-image: url(${IMAGE_WEXOND_SHAPE});
  ${centerIcon(64)};
`;

export const Title = styled.div`
  margin-left: 24px;
  font-size: 24px;
  ${montserratBold()};
`;
