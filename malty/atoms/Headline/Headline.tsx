import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledHeadline } from './Headline.styled';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

export const Headline = ({
  headlineStyle = HeadlineStyle.Medium,
  align = HeadlineAlign.Left,
  color = HeadlineColor.DigitalBlack,
  as,
  children,
  dataTestId,
  ...props
}: HeadlineProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  let StyledTagHeadline = as;
  const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

  switch (headlineStyle) {
    case HeadlineStyle.Banner:
      StyledTagHeadline = 'h2';
      break;
    case HeadlineStyle.Huge:
      StyledTagHeadline = 'h3';
      break;
    case HeadlineStyle.Big:
      StyledTagHeadline = 'h4';
      break;
    case HeadlineStyle.Large:
      StyledTagHeadline = 'h5';
      break;
    case HeadlineStyle.MediumLarge:
      StyledTagHeadline = 'h6';
      break;
    case HeadlineStyle.Medium:
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
    <StyledHeadline
      data-testid={dataTestId}
      as={StyledTagHeadline}
      headlineStyle={headlineStyle}
      align={align}
      color={color}
      theme={theme}
      {...props}
    >
      {children}
    </StyledHeadline>
  );
};
