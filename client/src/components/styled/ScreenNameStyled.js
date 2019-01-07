import styled from 'styled-components';
import {
  textColor, fadedText, borderColor, white, blue, spacer, padding, shadow, respText,
} from './styleConstants';

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
  font-size: ${respText};
  font-weight: 200;
  padding: 3vw 6vw;
  margin-bottom: ${spacer};
  color: ${textColor};
  border: .5px solid ${borderColor};
  background-color: ${white};
  box-shadow: ${shadow};
  @media screen and (min-width: 445px) {
    font-size: 1.1rem;
    padding: ${padding};
  };
  :focus {
    outline: 0;
    border: 1px solid ${blue};
  }
`;

export const ButtonStyled = styled(InputStyled)`
  border-radius: .3rem;
  text-align: center;
  :active {
    box-shadow: inset ${shadow};
  }
`;

export const ButtonForm = styled(ButtonStyled)`
  border-radius: 0 .3rem .3rem 0;
`;

export const TextInput = styled(InputStyled)`
  text-align: left;
  border-radius: .3rem 0 0 .3rem;
  ::placeholder {
    color: ${textColor};
  }
  :focus {
    ::placeholder {
      color: ${fadedText};
    }
  }
`;
