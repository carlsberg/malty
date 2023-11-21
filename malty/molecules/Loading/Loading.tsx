import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledLoading, StyledLoadingContainer } from './Loading.styled';
import { LoadingColor, LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';

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

  const getFillProp = () => {
    if (negative) {
      return theme.colors.colours.default.white.value;
    }

    if (color === LoadingColor.DigitalBlack) {
      return theme.colors.colours.default['digital-black'].value;
    }

    return theme.colors.theme[color].value;
  };

  const getFailureIcon = () => {
    return (
      <svg data-testid={`${dataQaId}-failure-icon`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
          fill={getFillProp()}
        />
        <path
          d="M8.70711 7.29289C8.31658 6.90237 7.68342 6.90237 7.29289 7.29289L7.2097 7.3871C6.90468 7.77939 6.93241 8.34662 7.29289 8.70711L10.585 12L7.29289 15.2929C6.90237 15.6834 6.90237 16.3166 7.29289 16.7071L7.3871 16.7903C7.77939 17.0953 8.34662 17.0676 8.70711 16.7071L12 13.415L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071L16.7903 16.6129C17.0953 16.2206 17.0676 15.6534 16.7071 15.2929L13.415 12L16.7071 8.70711C17.0976 8.31658 17.0976 7.68342 16.7071 7.29289L16.6129 7.2097C16.2206 6.90468 15.6534 6.93241 15.2929 7.29289L12 10.585L8.70711 7.29289Z"
          fill={getFillProp()}
        />
      </svg>
    );
  };

  const getSuccessIcon = () => {
    return (
      <svg data-testid={`${dataQaId}-success-icon`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5Z"
          fill={getFillProp()}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1178 7.71372C17.5521 8.05494 17.6275 8.68359 17.2863 9.11786L11.7863 16.1179C11.6096 16.3427 11.3451 16.4812 11.0597 16.4983C10.7742 16.5153 10.4951 16.4094 10.2929 16.2071L7.29289 13.2071C6.90237 12.8166 6.90237 12.1835 7.29289 11.7929C7.68342 11.4024 8.31658 11.4024 8.70711 11.7929L10.9101 13.9959L15.7137 7.88222C16.0549 7.44795 16.6835 7.37251 17.1178 7.71372Z"
          fill={getFillProp()}
        />
      </svg>
    );
  };

  const getLoadingIcon = () => {
    return (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" data-testid={`${dataQaId}-pending-icon`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5Z"
          fill={
            negative
              ? theme.colors.colours.overlay.white[10].value
              : theme.colors.colours.overlay['digital-black'][10].value
          }
        />
        <mask id="mask0_1664_614" maskUnits="userSpaceOnUse" x="0" y="0" style={{ maskType: 'alpha' }}>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0ZM24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C34.4934 43 43 34.4934 43 24C43 13.5066 34.4934 5 24 5Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1664_614)">
          <rect x="24" width="24" height="24" fill={getFillProp()} />
          <rect y="47" width="1" height="1" fill="transparent" />
        </g>
      </svg>
    );
  };

  const getIcon = () => {
    if (progressStatus === LoadingStatus.Success) {
      return getSuccessIcon();
    }

    if (progressStatus === LoadingStatus.Failure) {
      return getFailureIcon();
    }

    return getLoadingIcon();
  };

  return progressStatus ? (
    <StyledLoadingContainer data-testid={`${dataQaId}`} size={size} theme={theme} $zIndex={zIndex}>
      <StyledLoading
        size={iconSize}
        className={`${progressStatus === LoadingStatus.Pending ? 'spinning' : 'fade-in'} ${progressStatus}`}
      >
        {getIcon()}
      </StyledLoading>

      {text && (
        <Text dataQaId={`${dataQaId}-label`} textStyle={TextStyle.SmallBold} color={TextColor.Support60}>
          {text}
        </Text>
      )}
    </StyledLoadingContainer>
  ) : null;
};
