import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledHeadline } from './Headline.styled';
import { Align, Color, HeadlineProps, Size } from './Headline.types';

export const Headline = ({
  size = Size.Medium,
  align = Align.Left,
  color = Color.Primary,
  children
}: HeadlineProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledHeadline size={size} align={align} color={color} theme={theme}>
      {children}
    </StyledHeadline>
  );
};
