import {
  Icon,
  IconColors,
  IconNamesTypes as IconNames,
  IconSizesTypes as IconSizes
} from '@carlsberggroup/malty.atoms.icon';
import React from 'react';
import { StyledProductsBar } from './ProductsBar.styled';

export const ProductsBar = () => (
  <StyledProductsBar>
    <Icon color={IconColors.White} name={IconNames.CarlsbergFilled} size={IconSizes.Medium} />
  </StyledProductsBar>
);
