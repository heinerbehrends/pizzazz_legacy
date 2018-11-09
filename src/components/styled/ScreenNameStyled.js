import styled from 'styled-components';


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
  font-size: 1rem;
  padding: .5rem 1.5rem;
  margin-bottom: 3rem;
  color: #6c757d;
  border: .5px solid #ced4da;
  background-color: #fff;
  box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.05);
  :focus {
    outline: 0;
    border: 1px solid #bdeafe;
  }
`;

export const ButtonInput = styled(InputStyled)`
  border-radius: .3rem;
  text-align: center;
  :active {
    box-shadow: inset 1px 2px 1px 0 rgba(0, 0, 0, 0.05);
  }
`;

export const ButtonForm = styled(ButtonInput)`
  border-radius: 0 .3rem .3rem 0;
  text-align: center;
  :active {
    box-shadow: inset 1px 2px 1px 0 rgba(0, 0, 0, 0.05);
  }
`;

export const TextInput = styled(InputStyled)`
  text-align: left;
  border-radius: .3rem 0 0 .3rem;
  ::placeholder {
    color: #adb6c1;
  }
`;
