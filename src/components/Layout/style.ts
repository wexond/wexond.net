import styled, { createGlobalStyle } from 'styled-components';

import { noButtons } from '~/mixins/scroll';
import { body2 } from '~/mixins/typography';
import { fonts } from '~/constants/fonts';
import { noTapHighlight } from '~/mixins/user-selection';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #000;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: #FAFAFC;
    ${body2()};
    ${noTapHighlight()};
    ${noButtons({
      size: 10,
      color: 'rgba(0, 0, 0, 0.48)',
      hoverColor: 'rgba(0, 0, 0, 0.64)',
    })};
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url(${fonts.robotoRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    src: url(${fonts.robotoMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    src: url(${fonts.montserratBold}) format('woff2');
  }

  * {
    box-sizing: border-box;
  }

  a {
    color: #000;
    text-decoration: none;
  }
`;

export const StyledLayout = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
