import styled from 'styled-components';

import { Content } from '~/components/Section';

export const Container = styled(Content)`
  min-height: 364px;
  display: flex;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const Image = styled.img`
  width: 196px;
`;

export const StyledCommunity = styled.div`
  display: flex;
  flex-flow: column;
  margin-left: 64px;
`;
