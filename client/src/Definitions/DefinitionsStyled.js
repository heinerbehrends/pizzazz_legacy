import styled from 'styled-components';
import * as style from '../styleConstants';

const DefinitionsStyled = styled.div`
  ${style.halfBottomSpacer};
  text-align: left;
  font-style: italic;
  font-weight: ${style.textWeight};
  font-size: ${style.respText};
  color: ${style.textColor};
  border-left:${style.border};
  padding: ${style.respPad};
  @media screen and (min-width: 445px) {
    padding: ${style.padding};
    font-size: ${style.textSize};
  };
`;

export default DefinitionsStyled;
