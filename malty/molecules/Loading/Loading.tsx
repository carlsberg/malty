import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import React from 'react';
import { useLoadingStyles } from './Loading.helper';
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
  zIndex = 0,
  ...props
}: LoadingProps) => {
  const { iconSize } = useLoadingStyles({ size });

  return (
    <StyledLoadingContainer data-testid={`${dataQaId}`} size={size} $zIndex={zIndex} {...props}>
      <StyledLoading
        size={iconSize}
        className={`${status === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${status}`}
      >
        <LoadingIcon negative={negative} color={color} status={status} dataTestId={dataQaId} />
      </StyledLoading>

      {text && (
        <Text dataTestId={`${dataQaId}-label`} textStyle={TextStyle.SmallBold} color={TextColor.Support60}>
          {text}
        </Text>
      )}
    </StyledLoadingContainer>
  );
};
