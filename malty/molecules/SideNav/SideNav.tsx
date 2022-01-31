import { Align, Color, Headline, Size } from '@carlsberggroup/malty.atoms.headline';
import { NavList } from '@carlsberggroup/malty.molecules.nav-list';
import { ProductsBar } from '@carlsberggroup/malty.molecules.products-bar';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledListWrapper, StyledSideNav, StyledWrapper } from './SideNav.styled';
import { SideNavProps } from './SideNav.types';

export const SideNav = ({ productName, navItems, systemOptions, profileMenu }: SideNavProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  // Nav list active menu items
  const [activeNavItem, setActiveNavItem] = useState(-1);
  const [activeSubItem, setActiveSubItem] = useState(-1);

  // Nav list subnav active state
  const [subNavIsActive, toggleSubNav] = useState(false);

  // reset nav list to initial state
  const resetNavState = () => {
    setActiveNavItem(-1);
    setActiveSubItem(-1);
    toggleSubNav(false);
  };

  return (
    <StyledWrapper>
      <ProductsBar systemOptions={systemOptions} profileMenu={profileMenu} resetNavState={resetNavState} />
      <StyledSideNav theme={theme}>
        <Headline align={Align.Left} color={Color.White} size={Size.Medium}>
          {productName}
        </Headline>
        <StyledListWrapper theme={theme}>
          <NavList
            navItems={navItems}
            activeNavItem={activeNavItem}
            activeSubItem={activeSubItem}
            subNavIsActive={subNavIsActive}
            setActiveNavItem={setActiveNavItem}
            setActiveSubItem={setActiveSubItem}
            toggleSubNav={toggleSubNav}
          />
        </StyledListWrapper>
      </StyledSideNav>
    </StyledWrapper>
  );
};
