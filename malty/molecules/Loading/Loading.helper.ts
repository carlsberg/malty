import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { LoadingSize, LoadingStatus, UseLoadingStatusProps, UseLoadingStylesProps } from './Loading.types';

export const useLoadingStyles = ({ size }: UseLoadingStylesProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const loadingStyles = {
    [LoadingSize.Small]: {
      iconSize: theme.sizes.m.value
    },
    [LoadingSize.Medium]: {
      iconSize: theme.sizes['2xl'].value
    }
  };

  return loadingStyles[size];
};

export const useLoadingStatus = ({ status }: UseLoadingStatusProps) => {
  if (!status) return LoadingStatus.Pending;
  return status;
};
