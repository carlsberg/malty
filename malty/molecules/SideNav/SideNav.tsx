import { Headline } from '@carlsberggroup/malty.atoms.headline';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { NavList } from '../NavList';
import { ProductsBar } from '../ProductsBar';
import { StyledNavList, StyledSideNav, StyledWrapper } from './SideNav.styled';
import { SideNavProps } from './SideNav.types';

export const SideNav = ({ productName, navItems }: SideNavProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledWrapper theme={theme}>
      <ProductsBar />
      <StyledSideNav>
        <Headline align="left" color="white" size="medium">
          {productName}
        </Headline>
        <StyledNavList>
          <NavList navItems={navItems} />
        </StyledNavList>
      </StyledSideNav>
    </StyledWrapper>
  );
};
