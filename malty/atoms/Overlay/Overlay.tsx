import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { OverlayProps } from '.';
import { StyledOverlay } from './Overlay.styled';

export const Overlay = ({ content, isWhite = false }: OverlayProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledOverlay isWhite={isWhite} theme={theme}>
      {content}
    </StyledOverlay>
  );
};
