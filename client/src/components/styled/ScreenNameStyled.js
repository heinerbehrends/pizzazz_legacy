import styled from 'styled-components';
import {
  textColor, fadedText, borderColor, white, blue, spacer, padding, shadow,
} from './styleConstants';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3em;
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

const InputStyled = styled.input`
  display: inline-block;
  vertical-align: middle;
  width: auto;
  font-size: 1.1rem;
  font-weight: 200;
  padding: ${padding};
  margin-bottom: ${spacer};
  color: ${textColor};
  border: .5px solid ${borderColor};
  background-color: ${white};
  box-shadow: ${shadow};
  :focus {
    outline: 0;
    border: 1px solid ${blue};
  }
`;

export const ButtonInput = styled(InputStyled)`
  border-radius: .3rem;
  text-align: center;
  :active {
    box-shadow: inset ${shadow};
  }
`;

export const ButtonForm = styled(ButtonInput)`
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
