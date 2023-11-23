import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import React, { useEffect, useState } from 'react';
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
  zIndex = 0
}: LoadingProps) => {
  const [progressStatus, setProgressStatus] = useState<LoadingStatus>(status);
  const { iconSize } = useLoadingStyles({ size });

  useEffect(() => {
    switch (status) {
      case LoadingStatus.Success: {
        setProgressStatus(LoadingStatus.Success);
        break;
      }
      case LoadingStatus.Failure: {
        setProgressStatus(LoadingStatus.Failure);
        break;
      }
      default: {
        setProgressStatus(LoadingStatus.Pending);
        break;
      }
    }
  }, [status]);

  return progressStatus ? (
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
  ) : null;
};
