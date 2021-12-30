import { Align, Color, Headline, Size } from '@carlsberggroup/malty.atoms.headline';
import { NavList } from '@carlsberggroup/malty.molecules.nav-list';
import { ProductsBar } from '@carlsberggroup/malty.molecules.products-bar';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledNavList, StyledSideNav, StyledWrapper } from './SideNav.styled';
import { SideNavProps } from './SideNav.types';

export const SideNav = ({ productName, navItems }: SideNavProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledWrapper theme={theme}>
      <ProductsBar />
      <StyledSideNav>
        <Headline align={Align.Left} color={Color.White} size={Size.Medium}>
          {productName}
        </Headline>
        <StyledNavList>
          <NavList navItems={navItems} />
        </StyledNavList>
      </StyledSideNav>
    </StyledWrapper>
  );
};
