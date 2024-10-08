import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { OverlayProps } from '.';
import { StyledOverlay } from './Overlay.styled';

export const Overlay = ({ content, isWhite = false, zIndex = 0, fixed = true, dataTestId }: OverlayProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledOverlay zIndex={zIndex} isWhite={isWhite} theme={theme} $fixed={fixed} data-testid={dataTestId}>
      {content}
    </StyledOverlay>
  );
};
