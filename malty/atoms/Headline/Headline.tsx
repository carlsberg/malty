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

  let StyledTagHeadline = StyledHeadline.withComponent('h1');

  switch (headlineStyle) {
    case 'hero':
      StyledTagHeadline = StyledHeadline.withComponent('h2');
      break;
    case 'huge':
      StyledTagHeadline = StyledHeadline.withComponent('h3');
      break;
    case 'big':
      StyledTagHeadline = StyledHeadline.withComponent('h4');
      break;
    case 'large':
      StyledTagHeadline = StyledHeadline.withComponent('h5');
      break;
    case 'medium-large':
      StyledTagHeadline = StyledHeadline.withComponent('h6');
      break;
    case 'medium':
      StyledTagHeadline = StyledHeadline.withComponent('p');
      break;
    default:
      StyledTagHeadline = StyledHeadline.withComponent('h1');
      break;
  }

  return (
    <TypographyProvider>
      <StyledHeadline as={StyledTagHeadline} headlineStyle={headlineStyle} align={align} color={color} theme={theme}>
        {children}
      </StyledHeadline>
    </TypographyProvider>
  );
};
