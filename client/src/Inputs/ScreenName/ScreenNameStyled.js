import styled from 'styled-components';
import { InputStyled, ButtonStyled } from '../Buttons/ButtonStyled';
import * as style from '../../styleConstants';

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
