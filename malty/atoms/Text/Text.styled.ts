import styled from 'styled-components';
import { Align, Color, Size, Weight } from './Text.types';

export const StyledParagraph = styled.p<{ size?: Size; weight?: string; align?: string; color?: Color }>`
  font-family: ${({ theme }) => theme.typography.global['font-family'].value};
  color: ${({ color, theme }) => (color ? theme.color[color].value : theme.color.default.value)};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ size, theme }) =>
    size ? theme.typography.text[size]['font-size'].value : theme.typography.text.medium['font-size'].value};
  font-weight: ${({ weight }) => weight || Weight.Normal};
`;
