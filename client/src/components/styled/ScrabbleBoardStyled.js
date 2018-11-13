import styled from 'styled-components';
import { white, shadow } from './styleConstants';

const ScrabbleBoardStyled = styled.div`
  background-image: url('images/pizzazzBoard.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${white};
  padding: 1.1vw;
  box-shadow: ${shadow};
  margin: 0 auto 40px auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  max-width: 500px;
  @media screen and (min-width: 501px) {
    padding: 4.1px;
  }
`;

export default ScrabbleBoardStyled;
