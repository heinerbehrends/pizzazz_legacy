import styled from 'styled-components';
import {
  textColor, borderColor, padding,
  respText, respPad, bottomSpacer,
} from './styleConstants';

export const MessageContainer = styled.div`
  ${bottomSpacer}
`;

export const MessageStyled = styled.span`
  font-size: ${respText};
  font-weight: 200;
  color: ${textColor};
  padding: ${respPad};
  border-bottom: .5px solid ${borderColor};
  @media screen and (min-width: 445px) {
    font-size: 1.1rem;
    padding: ${padding};
  };
`;
