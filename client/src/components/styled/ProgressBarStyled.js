import styled from 'styled-components';
import { gameDuration } from '../../Constants';
import * as style from './styleConstants';

export const Container = styled.div`
  ${style.centerH};
  position: relative;
  height: 11px;
  background: ${style.white};
  padding: 4.5px;
  box-shadow: ${style.shadow};
  ${style.bottomSpacer};
`;

export const Bar = styled.div`
  position: relative;
  background: ${style.beige};
  height: 100%;
  border-right: solid ${style.pink} 1px;
  animation-name: status-bar;
  animation-timing-function: linear;
  animation-duration: ${props => props.duration}s;
  @keyframes status-bar {
    from { width: ${props => 100 - (props.duration / gameDuration) * 100}%; }
    to { width: 100%; }
  }
`;
