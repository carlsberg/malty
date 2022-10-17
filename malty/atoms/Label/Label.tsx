import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLabel } from './Label.styled';
import { LabelProps } from './Label.types';

export const Label = ({ htmlFor, text, children, checkbox, block, disabled }: LabelProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return htmlFor ? (
    <TypographyProvider>
      {checkbox && children}
      <StyledLabel theme={theme} htmlFor={htmlFor} checkbox={checkbox} block={block} disabled={disabled}>
        {text && <span className="label__text">{text}</span>}
      </StyledLabel>
      {!checkbox && children}
    </TypographyProvider>
  ) : (
    <TypographyProvider>
      <StyledLabel theme={theme} checkbox={checkbox} block={block} disabled={disabled}>
        {!checkbox && text && <span className="label__text">{text}</span>}
        {children}
        {checkbox && text && <span className="label__text">{text}</span>}
      </StyledLabel>
    </TypographyProvider>
  );
};
