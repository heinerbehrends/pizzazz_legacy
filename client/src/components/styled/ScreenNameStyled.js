import styled from 'styled-components';
import * as style from './styleConstants';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
`;

export const HiddenLabel = styled.label`
  display: none!important;
`;

export const FormGroup = styled.div`
  flex: 0 0 auto;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-box-flex: 0;
`;

export const InputStyled = styled.input`
  display: inline-block;
  vertical-align: middle;
  font-size: ${style.respText};
  font-weight: 200;
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

export const ButtonForm = styled(ButtonStyled)`
  border-radius: 0 .3rem .3rem 0;
`;

export const TextInput = styled(InputStyled)`
  text-align: left;
  border-radius: .3rem 0 0 .3rem;
  ::placeholder {
    color: ${style.textColor};
  }
  :focus {
    ::placeholder {
      color: ${style.fadedText};
    }
  }
`;
