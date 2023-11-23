import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import React from 'react';
import { useLoadingStatus, useLoadingStyles } from './Loading.helper';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingColor, LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';
import { LoadingIcon } from './LoadingIcon';

export const Loading = ({
  text,
  size = LoadingSize.Small,
  status = LoadingStatus.Pending,
  dataQaId,
  negative = false,
  color = LoadingColor.DigitalBlack,
  zIndex = 0
}: LoadingProps) => {
  const progressStatus = useLoadingStatus({ status });
  const { iconSize } = useLoadingStyles({ size });

  return (
    <StyledLoadingContainer data-testid={`${dataQaId}`} size={size} $zIndex={zIndex}>
      <StyledLoading
        size={iconSize}
        className={`${progressStatus === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${progressStatus}`}
      >
        <LoadingIcon negative={negative} color={color} progressStatus={progressStatus} dataTestId={dataQaId} />
      </StyledLoading>

      {text && (
        <Text dataQaId={`${dataQaId}-label`} textStyle={TextStyle.SmallBold} color={TextColor.Support60}>
          {text}
        </Text>
      )}
    </StyledLoadingContainer>
  );
};
