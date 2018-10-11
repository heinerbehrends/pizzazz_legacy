import styled from 'styled-components';


const ScrabbleBoard = styled.div`
  background-image: url('images/pizzazzBoard.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-color: white;
  padding: 1.1vw;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.05);
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

export default ScrabbleBoard;
