import styled from 'styled-components';

import { CONTENT_WIDTH, PRIMARY_COLOR } from '~/constants/design';
import {
  robotoMedium,
  robotoRegular,
  montserratBold,
} from '~/mixins/typography';

export const Section = styled.div`
  position: relative;
  display: flex;
  z-index: 2;
  justify-content: center;
`;

export const SectionTitle = styled.div`
  font-size: 2em;
  ${montserratBold()};
`;

export const SectionDescription = styled.div`
  font-size: 1.2em;
  margin-top: 16px;
  ${robotoRegular()};
`;

export const Content = styled.div`
  width: 100%;
  max-width: ${CONTENT_WIDTH}px;
  margin: 0 auto;
`;

export const Overline = styled.div`
  color: ${PRIMARY_COLOR};
  font-size: 0.8em;
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: 0.2em;
  ${robotoMedium};
`;
