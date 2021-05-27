import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme as componentTheme } from '../theme';
import { Align, Color, Size, Weight } from './text.types';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: Size;
  weight?: Weight;
  align?: Align;
  color?: Color;
}

const Paragraph = styled.p<{ size?: string; weight?: string; align?: string; color?: string }>`
  font-family: ${({ theme }) => theme.fontFamily.text};
  color: ${({ theme, color }) => (color ? theme.colors[color] : theme.colors.primary)};
  text-align: ${({ align }) => align ?? Align.Left};
  font-size: ${({ theme, size }) => (size ? theme.fontSizes[size] : theme.fontSizes.medium)};
  font-weight: ${({ weight }) => weight || Weight.Normal};
`;
export const Text = ({ children, size, weight, align, color }: TextProps) => (
  <ThemeProvider theme={componentTheme}>
    <Paragraph size={size} weight={weight} align={align} color={color}>
      {children}
    </Paragraph>
  </ThemeProvider>
);
