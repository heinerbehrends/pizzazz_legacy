import styled from 'styled-components';


export const Svg = styled.svg`
  transform: rotate(270deg);
  width: 200px;
  height: 200px;
`;

export const Circle = styled.circle`
  r: 97;
  cx: 100;
  cy: 100;
  fill: none;
  stroke: lightgray;
  stroke-width: 6px;
  stroke-dasharray: 609.4689;
  stroke-dashoffset: 0;
  animation: dash 40s linear;
  animation-direction: reverse;
  @keyframes dash {
    to {
      stroke-dashoffset: 609.4689;
    }
  }
`;

export const NumberDisplay = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4rem;
  font-weight: 300;
  color: #6c757d;
`;

export const Container = styled.div`
  position: relative;
  margin-top: 3rem;
`;
