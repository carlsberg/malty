import { Align, Color, Headline, Size } from '@carlsberggroup/malty.atoms.headline';
import { NavList } from '@carlsberggroup/malty.molecules.nav-list';
import { ProductsBar } from '@carlsberggroup/malty.molecules.products-bar';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledListWrapper, StyledSideNav, StyledWrapper } from './SideNav.styled';
import { SideNavProps } from './SideNav.types';

export const SideNav = ({ productName, navItems, systemOptions, profileMenu }: SideNavProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledWrapper>
      <ProductsBar systemOptions={systemOptions} profileMenu={profileMenu} />
      <StyledSideNav theme={theme}>
        <Headline align={Align.Left} color={Color.White} size={Size.Medium}>
          {productName}
        </Headline>
        <StyledListWrapper theme={theme}>
          <NavList navItems={navItems} />
        </StyledListWrapper>
      </StyledSideNav>
    </StyledWrapper>
  );
};
