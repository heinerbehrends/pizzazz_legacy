import styled from 'styled-components';
import * as style from '../../styleConstants';

export const InputStyled = styled.input`
  display: inline-block;
  vertical-align: middle;
  font-size: ${style.respText};
  font-weight: ${style.textWeight};
  padding: 3vw 6vw;
  margin-bottom: ${style.respSpacer};
  color: ${style.textColor};
  border: .5px solid ${style.borderColor};
  background-color: ${style.white};
  box-shadow: ${style.shadow};
  @media screen and (min-width: 445px) {
    margin-bottom: ${style.spacer};
    font-size: 1.1rem;
    padding: ${style.padding};
  };
  :focus {
    outline: 0;
    border: 1px solid ${style.blue};
  }
`;

export const ButtonStyled = styled(InputStyled)`
  border-radius: .3rem;
  text-align: center;
  :active {
    box-shadow: inset ${style.shadow};
  }
`;



