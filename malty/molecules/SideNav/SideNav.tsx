import { Headline, HeadlineAlign, HeadlineColor, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Overlay } from '@carlsberggroup/malty.atoms.overlay';
import { NavList } from '@carlsberggroup/malty.molecules.nav-list';
import { ProductsBar } from '@carlsberggroup/malty.molecules.products-bar';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Device, useMatchMedia } from '@carlsberggroup/malty.utils.hooks';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledListWrapper, StyledSideNav, StyledWrapper } from './SideNav.styled';
import { SideNavProps } from './SideNav.types';

export const SideNav = ({ navItems, systemOptions, profileMenu, productName, overlayZIndex = 100 }: SideNavProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  // Nav list active menu items
  const [activeNavItem, setActiveNavItem] = useState(-1);
  const [activeSubItem, setActiveSubItem] = useState(-1);
  const isDesktop = useMatchMedia(Device.Desktop);
  const [isNavOpen, setNavOpen] = useState(isDesktop);
  // Nav list subnav active state
  const [subNavIsActive, toggleSubNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    if (isDesktop) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  }, [isDesktop]);

  const onToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  // reset nav list to initial state
  const resetNavState = () => {
    setActiveNavItem(-1);
    setActiveSubItem(-1);
    toggleSubNav(false);
  };

  const sideNavZIndex = overlayZIndex + 1 || 100;

  return (
    <>
      {isNavOpen && !isDesktop && <Overlay isWhite={false} zIndex={overlayZIndex} />}
      <StyledWrapper zIndex={sideNavZIndex}>
        <ProductsBar
          systemOptions={systemOptions}
          profileMenu={profileMenu}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
        />
        {isNavOpen && (
          <StyledSideNav theme={theme} productName={productName}>
            {productName && (
              <Headline
                headlineStyle={HeadlineStyle.MediumLarge}
                align={HeadlineAlign.Left}
                color={HeadlineColor.White}
              >
                {productName}
              </Headline>
            )}
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
        )}
      </StyledWrapper>
    </>
  );
};
