import {
  ProgressSpinner,
  ProgressSpinnerColor,
  ProgressSpinnerStatus
} from '@carlsberggroup/malty.atoms.progress-spinner';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useEffect, useState } from 'react';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';

export function Loading({
  text,
  size = LoadingSize.Small,
  status = LoadingStatus.Pending,
  dataQaId,
  negative = false,
  color = ProgressSpinnerColor.DigitalBlack
}: LoadingProps) {
  const theme = defaultTheme;

  const [progressStatus, setProgressStatus] = useState<ProgressSpinnerStatus>(ProgressSpinnerStatus.Pending);
  const [iconSize, setIconSize] = useState(theme.sizes.m.value);

  useEffect(() => {
    switch (size) {
      case LoadingSize.Medium: {
        setIconSize(theme.sizes['2xl'].value);

        break;
      }
      default: {
        setIconSize(theme.sizes.m.value);

        break;
      }
    }
  }, [size, theme]);

  useEffect(() => {
    switch (status) {
      case LoadingStatus.Success: {
        setProgressStatus(ProgressSpinnerStatus.Success);
        break;
      }
      case LoadingStatus.Failure: {
        setProgressStatus(ProgressSpinnerStatus.Failure);
        break;
      }
      default: {
        setProgressStatus(ProgressSpinnerStatus.Pending);
        break;
      }
    }
  }, [status]);

  return status ? (
    <StyledLoadingContainer data-testid={`${dataQaId}`} size={size} theme={theme}>
      <StyledLoading
        size={iconSize}
        className={`${status === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${status}`}
      >
        <ProgressSpinner color={color} negative={negative} dataQaId={`${dataQaId}`} status={progressStatus} />
      </StyledLoading>

      {text && (
        <Text dataQaId={`${dataQaId}-label`} textStyle={TextStyle.SmallBold} color={TextColor.Support60}>
          {text}
        </Text>
      )}
    </StyledLoadingContainer>
  ) : null;
}
