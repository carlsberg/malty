import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledHeadline } from './Headline.styled';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

export function Headline({
  headlineStyle = HeadlineStyle.Medium,
  align = HeadlineAlign.Left,
  color = HeadlineColor.DigitalBlack,
  as,
  children
}: HeadlineProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  let StyledTagHeadline = as;
  const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

  switch (headlineStyle) {
    case 'hero':
      StyledTagHeadline = 'h2';
      break;
    case 'huge':
      StyledTagHeadline = 'h3';
      break;
    case 'big':
      StyledTagHeadline = 'h4';
      break;
    case 'large':
      StyledTagHeadline = 'h5';
      break;
    case 'medium-large':
      StyledTagHeadline = 'h6';
      break;
    case 'medium':
      StyledTagHeadline = 'p';
      break;
    default:
      StyledTagHeadline = 'h1';
      break;
  }

  if (as && allowedTags.includes(`${as}`)) {
    StyledTagHeadline = as;
  }
  return (
    <StyledHeadline as={StyledTagHeadline} headlineStyle={headlineStyle} align={align} color={color} theme={theme}>
      {children}
    </StyledHeadline>
  );
}
