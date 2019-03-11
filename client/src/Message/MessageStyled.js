import styled from 'styled-components';
import * as style from '../styleConstants';

export const MessageContainer = styled.div`
  ${style.bottomSpacer}
`;

export const MessageStyled = styled.span`
  font-size: ${style.respText};
  font-weight: ${style.textWeight};
  color: ${style.textColor};
  padding: ${style.respPad};
  border-bottom: ${style.border};
  @media screen and (min-width: 445px) {
    font-size: 1.1rem;
    padding: ${style.padding};
  };
`;
