// colours
export const textColor = '#7A828A';
export const fadedText = '#AAB0B5';
export const borderColor = '#CED4DA';
export const white = '#FFF';
export const beige = '#E7DDCF';
export const pink = '#FFC2C0';
export const green = '#C4F2CB';
export const yellow = '#F7E9B7';
export const letterColor = '#555';
export const blue = '#BDEAFE';
// spacing
export const spacer = '3rem';
export const halfSpacer = '1.5rem';
export const padding = '0.8rem 1.6rem';
export const respPad = '3vw 6vw';
export const respSpacer = '9vw';
export const halfRespSpacer = '4.5vw';
// shadow
export const shadow = '1.8px 2.4px 1.8px rgba(0, 0, 0, 0.05)';
// text
export const respText = '4vw';
export const textSize = '1.1rem';
export const textWeight = '300';
// border
export const border = `1px solid ${borderColor}`;
// helpers
export const bottomSpacer = `
  margin-bottom: ${respSpacer};
  @media screen and (min-width: 501px) {
    margin-bottom: ${spacer};
  }
`;
export const halfBottomSpacer = `
  margin-bottom: ${halfRespSpacer};
  @media screen and (min-width: 501px) {
    margin-bottom: ${halfSpacer};
  }
`;
export const centerH = `
  margin-left: auto;
  margin-right: auto;
`;
