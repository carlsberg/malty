import { css } from 'styled-components';

// Hide an element to all devices except screen readers. More info here: https://webaim.org/techniques/css/invisiblecontent/
export const srOnly = css`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;
