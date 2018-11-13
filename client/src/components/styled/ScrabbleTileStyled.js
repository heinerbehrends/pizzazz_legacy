import styled from 'styled-components';
import {
  borderColor, green, yellow, letterColor, shadow,
} from './styleConstants';

export const LetterContainer = styled.div`
  width: 13.68%
`;

export const LetterStyled = styled.div`
  opacity: ${props => (props.letter !== '0' ? '100' : '0')};
  user-select: none;
  border: 1px solid ${borderColor};
  border-radius: 0.5vw;
  color: ${props => (props.letter !== ('8' || '0') ? letterColor : 'rgba(0,0,0,0)')};
  background-color: ${props => (props.isValid ? green : yellow)};
  font-weight: 400;
  font-size: 8vw;
  text-align: center;
  line-height: 12.2vw;
  box-shadow: ${shadow};
  @media screen and (min-width: 501px) {
      font-size: 40px;
      line-height: 65px;
      border-radius: 4px;
  }
`;

export const NumberSub = styled.sub`
  line-height: normal;
  font-size: 2.6vw;
  font-weight: 400;
  vertical-align: -25%;
  @media screen and (min-width: 501px) {
    font-size:14.5px;
  }
`;
