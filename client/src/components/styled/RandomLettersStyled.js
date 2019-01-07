import styled from 'styled-components';
import { bottomSpacer, centerH } from './styleConstants';

const RandomLettersStyled = styled.div`
  ${bottomSpacer};
  ${centerH};
  padding: 4.1px;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
`;

export default RandomLettersStyled;
