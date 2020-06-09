import styled from 'styled-components';

import { Overline as StyledOverline, SectionTitle } from '~/components/Section';
import { robotoRegular } from '~/mixins/typography';

export const StyledDownload = styled.div`
  border-radius: 32px;
  padding: 6rem 5rem;
  width: 100%;
  margin-top: 64px;
  margin-bottom: 64px;
  align-items: center;

  display: flex;
  background-image: linear-gradient(to right, #00a6ff, #3d5afe);
`;

export const Info = styled.div`
  color: white;
  flex: 1;
  margin-right: 5rem;
`;

export const Overline = styled(StyledOverline)`
  opacity: 0.8;
  color: #fff;
`;

export const Title = styled(SectionTitle)`
  font-size: 2rem;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  font-size: 1.2rem;
  ${robotoRegular()};
`;
