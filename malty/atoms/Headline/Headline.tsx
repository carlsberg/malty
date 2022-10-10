import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledHeadline } from './Headline.styled';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

export const Headline = ({
  headlineStyle = HeadlineStyle.Medium,
  align = HeadlineAlign.Left,
  color = HeadlineColor.DigitalBlack,
  as = 'h1',
  children
}: HeadlineProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  let StyledTagHeadline = as || 'h1';

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

  return (
    <>
      <StyledHeadline as={StyledTagHeadline} headlineStyle={headlineStyle} align={align} color={color} theme={theme}>
        {children}
      </StyledHeadline>
    </>
  );
};
