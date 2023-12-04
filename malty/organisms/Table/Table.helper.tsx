import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { TableSize, UseTableStylesProps } from './Table.types';

export const truncate = (value1: number, value2: number) => {
  if (value1 - value2 !== 0) return true;
  return false;
};

export const useTableStyles = ({ size }: UseTableStylesProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const tableStyles = {
    [TableSize.Medium]: theme.sizes.xl.value,
    [TableSize.Large]: theme.sizes['2xl'].value,
    [TableSize.XLarge]: theme.sizes['3xl'].value
  };

  return tableStyles[size];
};
