import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledParagraph } from './Text.styled';
import { TextProps } from './Text.types';

export const Text = ({ size, weight, align, color, children }: TextProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledParagraph size={size} weight={weight} align={align} color={color} theme={theme}>
      {children}
    </StyledParagraph>
  );
};
