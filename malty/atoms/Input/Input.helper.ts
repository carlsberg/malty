import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { InputSize, UseInputSizeProps } from './Input.types';

export const useInputSize = ({ size }: UseInputSizeProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  if (size === InputSize.Large) {
    return theme.sizes['2xl'].value.replace('px', '');
  }

  return theme.sizes.xl.value.replace('px', '');
};

export const ensureQuantityRange = (value: number, min?: number, max?: number) => {
  if (min !== undefined && max !== undefined) {
    return Math.max(Math.min(value, max), min);
  }
  if (min !== undefined) {
    return Math.max(value, min);
  }
  if (max !== undefined) {
    return Math.min(value, max);
  }
  return value;
};
