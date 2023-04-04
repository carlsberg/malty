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

// TODO: I would like to do something like <T extends SpaceProps>(props: T), but then I get a warning in the style
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const space = ({ m = '', mx = '', my = '', mt = '', mr = '', mb = '', ml = '' }: any) => `
  margin: ${m};
  margin-left: ${mx};
  margin-right: ${mx};
  margin-top: ${my};
  margin-bottom: ${my};
  margin-top: ${mt};
  margin-right: ${mr};
  margin-bottom: ${mb};
  margin-left: ${ml};
`;
