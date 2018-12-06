import styled from 'styled-components';


const RandomLettersStyled = styled.div`
  padding: 4.1px;
  margin: 0 auto 8vw auto;
  list-style: none;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  max-width: 500px;
  @media screen and (min-width: 501px) {
    margin-bottom: 40px;
  }
`;

export default RandomLettersStyled;
