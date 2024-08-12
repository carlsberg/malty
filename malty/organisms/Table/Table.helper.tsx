import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { TableSize, UseTableSizesProps } from './Table.types';

export const truncate = (value1: number, value2: number) => {
  if (value1 - value2 !== 0) return true;
  return false;
};

export const useTableSizes = ({ size }: UseTableSizesProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const tableSizes = {
    [TableSize.Medium]: theme.sizes.xl.value,
    [TableSize.Large]: theme.sizes['2xl'].value,
    [TableSize.XLarge]: theme.sizes['3xl'].value
  };

  return tableSizes[size];
};
