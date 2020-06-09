import styled, { css } from 'styled-components';

import { centerIcon } from '~/mixins/images';
import { robotoRegular } from '~/mixins/typography';

interface Props {
  outlined: boolean;
  foreground: string;
  background: string;
}

export const StyledButton = styled.a`
  position: relative;
  cursor: pointer;
  user-select: none;
  border-radius: 30px;
  padding: 16px 32px;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  overflow: hidden;
  margin-right: 16px;
  transition: 0.3s box-shadow, 0.2s background-image, 0.2s background-color;
  ${robotoRegular()};

  ${({ outlined, foreground, background }: Props) => css`
    color: ${foreground};

    ${!outlined
      ? css`
          box-shadow: 0 12px 32px -12px rgba(0, 84, 222, 0.6);
          background: ${background};
        `
      : css`
          border: 1px solid ${foreground};
          transition: 0.1s background-color;
        `}
  `}

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: 0.1s opacity;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  transition: 0.3s filter;
  ${centerIcon('contain', true)};

  ${({ src, white }: { src: string; white: boolean }) => css`
    background-color: ${white ? '#fff' : '#000'};
    mask-image: url(${src});
  `}
`;

export const Label = styled.div`
  position: relative;
  z-index: 2;
`;

export const Buttons = styled.div`
  margin-top: 24px;
  display: flex;
`;
