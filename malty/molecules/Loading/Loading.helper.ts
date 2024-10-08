import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { LoadingSize, UseLoadingStylesProps } from './Loading.types';

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
