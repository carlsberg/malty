import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import { Loading, LoadingColor, LoadingSize } from '@carlsberggroup/malty.molecules.loading';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLoadingOverlay } from './LoadingOverlay.styled';
import { LoadingOverlayProps } from './LoadingOverlay.types';

export const LoadingOverlay = ({
  zIndex = 0,
  dataTestId,
  text,
  overlayPositionFixed = true,
  color = LoadingColor.DigitalBlack
}: LoadingOverlayProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return (
    <StyledLoadingOverlay $zIndex={zIndex} data-testid={dataTestId} theme={theme}>
      <Loading
        zIndex={zIndex + 1}
        size={LoadingSize.Medium}
        text={text}
        dataQaId={`${dataTestId}-icon`}
        color={color}
      />
      <Overlay isWhite fixed={overlayPositionFixed} />
    </StyledLoadingOverlay>
  );
};
