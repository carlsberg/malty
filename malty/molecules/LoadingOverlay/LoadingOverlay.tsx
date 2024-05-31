import { Overlay } from '@carlsberggbs/malty.atoms.overlay';
import { Loading, LoadingColor, LoadingSize } from '@carlsberggbs/malty.molecules.loading';
import React from 'react';
import { StyledLoadingOverlay } from './LoadingOverlay.styled';
import { LoadingOverlayProps } from './LoadingOverlay.types';

export const LoadingOverlay = ({
  zIndex = 0,
  dataTestId,
  text,
  overlayPositionFixed = true,
  color = LoadingColor.DigitalBlack
}: LoadingOverlayProps) => {
  return (
    <StyledLoadingOverlay $zIndex={zIndex} data-testid={dataTestId}>
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
