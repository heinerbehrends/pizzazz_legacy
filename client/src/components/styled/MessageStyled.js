import styled from 'styled-components';
import {
  textColor, borderColor, spacer, padding,
} from './styleConstants';

export const MessageContainer = styled.div`
  margin-bottom: ${spacer};
  margin-top: 0.5rem;
`;

export const MessageStyled = styled.span`
  font-size: 1.1rem;
  font-weight: 200;
  color: ${textColor};
  padding: ${padding};
  border-bottom: .5px solid ${borderColor};
`;
