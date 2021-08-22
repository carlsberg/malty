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
    if (color === Color.Alert) {
      return theme.color.system.alertStrong.value;
    }
    if (color === Color.Disable) {
      return theme.color.system.disableStrong.value;
    }
    if (color === Color.Fail) {
      return theme.color.system.failStrong.value;
    }
    if (color === Color.Notification) {
      return theme.color.system.notificationStrong.value;
    }
    if (color === Color.Success) {
      return theme.color.system.successStrong.value;
    }
    return theme.color.default.value;
  }};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ size, theme }) =>
    size ? theme.typography.text[size]['font-size'].value : theme.typography.text.medium['font-size'].value}px;
  line-height: ${({ size, theme }) =>
    size ? theme.typography.text[size]['line-height'].value : theme.typography.text.medium['font-size'].value}px;
  font-weight: ${({ weight }) => weight || Weight.Normal};
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
`;
