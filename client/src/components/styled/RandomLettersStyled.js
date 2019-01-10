import styled from 'styled-components';
import { halfBottomSpacer, centerH } from './styleConstants';

const RandomLettersStyled = styled.div`
  ${halfBottomSpacer};
  ${centerH};
  padding: 4.1px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`;

export default RandomLettersStyled;
