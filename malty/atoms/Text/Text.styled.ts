import styled, { css } from 'styled-components';
import { Align, Color, Size, Weight } from './Text.types';

export const StyledParagraph = styled.p<{
  size?: Size;
  weight?: string;
  align?: string;
  color?: Color;
  underline?: boolean;
  italic?: boolean;
}>`
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
  color: ${({ color, theme }) => {
    if (color === Color.White) {
      return theme.color.white.value;
    }
    if (color === Color.Support) {
      return theme.color.support.support20.value;
    }
    if (color === Color.Disable) {
      return theme.color.system.disableStrong.value;
    }
    return theme.color.default.value;
  }};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ size, theme }) =>
    size ? theme.typography.text[size]['font-size'].value : theme.typography.text.medium['font-size'].value}px;
  line-height: ${({ size, theme }) =>
    size ? theme.typography.text[size]['line-height'].value : theme.typography.text.medium['font-size'].value}px;
  font-weight: ${({ weight }) => weight || Weight.Regular};
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
  ${({ italic }) =>
    italic &&
    css`
      font-style: italic;
    `}

  ${({ theme }) => css`
    @media screen and (max-width: ${theme.variables.global.breakpoints.small.value}px) {
      ${theme.typography.text.small['mobile-font-size'] &&
      `font-size:${theme.typography.text.small['mobile-font-size'].value}px`}
    }
  `}
`;
