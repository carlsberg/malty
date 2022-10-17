import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
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
