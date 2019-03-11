import styled from 'styled-components';
import { spacer, centerH } from '../styleConstants';

const AppStyled = styled.div`
  ${centerH};
  text-align: center;
  max-width: 500px;
  margin-top: 18vw;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  @media screen and (min-width: 500px) {
    margin-top: ${spacer};
  }
`;

export default AppStyled;
