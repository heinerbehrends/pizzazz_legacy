import styled from 'styled-components';
import { white, shadow, halfBottomSpacer, centerH } from '../../styleConstants';

const ScrabbleBoardStyled = styled.div`
  ${centerH};
  position: relative;
  padding: 1.1vw;
  box-shadow: ${shadow};
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  @media screen and (min-width: 501px) {
    padding: 0.25rem;
  }
`;
export const PizzazzBoardStyled = styled.div`
  width: 100%;
  position: absolute;
`;
export const ScrabbleBoardContainer = styled.div`
  ${halfBottomSpacer};
  position: relative;
  margin-left: auto;
  margin-right: auto;
  background-color: ${white};
`;


export default ScrabbleBoardStyled;
