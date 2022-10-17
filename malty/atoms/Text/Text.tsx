import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledParagraph } from './Text.styled';
import { TextAlign, TextColor, TextProps, TextStyle } from './Text.types';

export const Text = ({
  textStyle = TextStyle.MediumDefault,
  align = TextAlign.Left,
  color = TextColor.DigitalBlack,
  italic = false,
  children,
  dataQaId
}: TextProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <TypographyProvider>
      <StyledParagraph
        data-testid={dataQaId}
        textStyle={textStyle}
        color={color}
        align={align}
        italic={italic}
        theme={theme}
      >
        {children}
      </StyledParagraph>
    </TypographyProvider>
  );
};
