import styled from 'styled-components'


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

export const ButtonInput = styled.input`
  display: inline-block;
  width: auto;
  vertical-align: middle;
  padding: .375rem .75rem;
  margin-right: 5px;
  color: #495057;
  border: 1px solid #ced4da;
  background-color: #fff;
  &:focus {
    outline-color: #B4EAFF;
  }
`;

export const TextInput = ButtonInput.extend`
  background-color: #fff;
`;
