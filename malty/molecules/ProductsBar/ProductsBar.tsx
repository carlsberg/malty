import {
  Icon,
  IconColors,
  IconNamesTypes as IconNames,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledProductsBar } from './ProductsBar.styled';

export const ProductsBar = () => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledProductsBar theme={theme}>
      <Icon color={IconColors.White} name={IconNames.CarlsbergFilled} size={IconSizes.Medium} />
    </StyledProductsBar>
  );
};
