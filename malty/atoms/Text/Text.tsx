import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledParagraph } from './Text.styled';
import { TextAlign, TextColor, TextProps, TextStyle } from './Text.types';

export const Text = ({
  textStyle = TextStyle.MediumDefault,
  align = TextAlign.Left,
  color = TextColor.DigitalBlack,
  italic = false,
  as = 'p',
  ellipsis = false,
  children,
  width,
  className,
  dataQaId,
  ...props
}: TextProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  let StyledTag = as;
  const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

  if (as && allowedTags.includes(`${as}`)) {
    StyledTag = as;
  }

  return (
    <StyledParagraph
      data-testid={dataQaId}
      textStyle={textStyle}
      color={color}
      align={align}
      italic={italic}
      ellipsis={ellipsis}
      width={width}
      theme={theme}
      as={StyledTag}
      className={className}
      {...props}
    >
      {children}
    </StyledParagraph>
  );
};
