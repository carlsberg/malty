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
  children,
  dataQaId
}: TextProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  let StyledTag = as || 'p';

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
      theme={theme}
      as={StyledTag}
    >
      {children}
    </StyledParagraph>
  );
};
