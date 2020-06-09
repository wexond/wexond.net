import styled, { css } from 'styled-components';

import { robotoRegular, robotoMedium } from '~/mixins/typography';
import { centerIcon } from '~/mixins/images';
import { PRIMARY_COLOR } from '~/constants/design';

export const StyledFooter = styled.footer`
  position: relative;
  padding-left: 32px;
  padding-right: 32px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
  z-index: 2;
  ${robotoRegular()};

  a {
    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;

    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }
`;

export const Container = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
`;

export const Socials = styled.div`
  margin-top: 16px;
  display: flex;
`;

export const Social = styled.a`
  width: 32px;
  height: 32px;
  background-color: rgba(0, 0, 0, 0.04);
  overflow: hidden;
  border-radius: 50%;
  margin-right: 8px;

  ${({ icon }: { icon: string }) => css`
    &::after {
      mask-image: url(${icon});
    }
  `};

  &::after {
    content: '';
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${PRIMARY_COLOR};
    ${centerIcon(16, true)};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const BrandInfo = styled.div`
  flex: 1;
`;

export const Logo = styled.img`
  width: 64px;
`;

export const Title = styled.div`
  ${robotoMedium()};
`;

export const Column = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;

  a {
    margin-top: 16px;
  }
`;

export const Line = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 1px;
`;
