import React from 'react'
import styled from 'styled-components'

const LetterStyled = styled.div`
  opacity: ${props => props.letter !== '0' ? '100' : '0'}
  border: 1px solid lightgray;
  border-radius: 0.5vw;
  color: ${props => props.letter !== '8' | '0' ? '#555' : 'rgba(0,0,0,0)'};
  background-color: ${props => props.isValid ? '#C4F2CB' : '#f7e9b7'};
  font-weight: 200;
  font-size: 8vw;
  text-align: center;
  line-height: 11.5vw;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.05);

  @media screen and (min-width: 501px) {
      font-size: 40px;
      line-height: 65px;
      border-radius: 4px;
  }
`;

const NumberSub = styled.sub`
  line-height: normal;
  font-size: 2.6vw;
  font-weight: 400;
  vertical-align: -25%;

  @media screen and (min-width: 501px) {
    font-size:14.5px;
  }
`;

const ScrabbleTile = (props) => {
  const letter = props.letter;
  return (
    <LetterStyled isValid={ props.isValid } letter={ props.letter }>
      { letter }
      <NumberSub>
        { props.letterValues[letter] }
      </NumberSub>
    </LetterStyled>
  )
};

export default ScrabbleTile;
