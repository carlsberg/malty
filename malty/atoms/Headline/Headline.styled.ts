import styled from 'styled-components';
import { Align, Color, Size } from './Headline.types';

export const StyledHeadline = styled.h1<{
  size?: Size;
  weight?: string;
  align?: string;
  color?: Color;
}>`
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
  color: ${({ color, theme }) => {
    if (color === Color.White) {
      return theme.color.white.value;
    }
    if (color === Color.Support) {
      return theme.color.support.support20.value;
    }
    return theme.color.theme.themePrimary.value;
  }};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ size, theme }) =>
    size ? theme.typography.headline[size]['font-size'].value : theme.typography.headline.medium['font-size'].value}px;
  line-height: ${({ size, theme }) =>
    size
      ? theme.typography.headline[size]['line-height'].value
      : theme.typography.headline.medium['font-size'].value}px;
`;
