import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
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
  const theme = useContext(ThemeContext) || defaultTheme;

  const [progressStatus, setProgressStatus] = useState<LoadingStatus>(status);
  const iconInitialSize = size === LoadingSize.Small ? theme.sizes.m.value : theme.sizes['2xl'].value;
  const [iconSize, setIconSize] = useState(iconInitialSize);

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
    <StyledLoadingContainer data-testid={`${dataQaId}`} size={size} theme={theme} $zIndex={zIndex}>
      <StyledLoading
        size={iconSize}
        className={`${progressStatus === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${progressStatus}`}
      >
        <LoadingIcon
          negative={negative}
          color={color}
          progressStatus={progressStatus}
          dataQaId={`${dataQaId}-${progressStatus}`}
        />
      </StyledLoading>

      {text && (
        <Text dataQaId={`${dataQaId}-label`} textStyle={TextStyle.SmallBold} color={TextColor.Support60}>
          {text}
        </Text>
      )}
    </StyledLoadingContainer>
  ) : null;
};
