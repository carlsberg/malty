import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledParagraph } from './Text.styled';
import { TextAlign, TextColor, TextProps, TextStyle } from './Text.types';

export function Text({
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
}: TextProps) {
  const theme = useContext(ThemeContext) || defaultTheme;
  let StyledTag = as;

  switch (as) {
    case 'span':
      StyledTag = 'span';
      break;
    default:
      StyledTag = 'p';
      break;
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
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </StyledParagraph>
  );
}
