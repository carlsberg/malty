import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledHeadline } from './Headline.styled';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

export const Headline = ({
  headlineStyle = HeadlineStyle.Medium,
  align = HeadlineAlign.Left,
  color = HeadlineColor.DigitalBlack,
  children
}: HeadlineProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <TypographyProvider>
      <StyledHeadline headlineStyle={headlineStyle} align={align} color={color} theme={theme}>
        {children}
      </StyledHeadline>
    </TypographyProvider>
  );
};
