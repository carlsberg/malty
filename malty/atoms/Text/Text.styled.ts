import styled from 'styled-components';
import { Align, Weight } from './Text.types';

export const StyledParagraph = styled.p<{ size?: string; weight?: string; align?: string; color?: string }>`
  font-family: ${({ theme }) => theme.fontFamily.text};
  color: ${({ color, theme }) => (color ? theme.colors[color] : theme.themeColors.primary)};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ size, theme }) => (size ? theme.fontSizes[size] : theme.fontSizes.medium)};
  font-weight: ${({ weight }) => weight || Weight.Normal};
`;
