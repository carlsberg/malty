import styled from 'styled-components';
import { theme } from '../../theme';
import { Align, Weight } from './Text.types';

export const Paragraph = styled.p<{ size?: string; weight?: string; align?: string; color?: string }>`
  font-family: ${theme.fontFamily.text};
  color: ${({ color }) => (color ? theme.colors[color] : theme.colors.primary)};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ size }) => (size ? theme.fontSizes[size] : theme.fontSizes.medium)};
  font-weight: ${({ weight }) => weight || Weight.Normal};
`;
