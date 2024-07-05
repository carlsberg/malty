import { Headline, HeadlineAlign, HeadlineColor, HeadlineStyle } from '@carlsberg/malty.atoms.headline';
import { Overlay } from '@carlsberg/malty.atoms.overlay';
import { NavList } from '@carlsberg/malty.molecules.nav-list';
import { ProductsBar } from '@carlsberg/malty.molecules.products-bar';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { Device, useMatchMedia } from '@carlsberg/malty.utils.hooks';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledListWrapper, StyledSideNav, StyledWrapper } from './SideNav.styled';
import { SideNavProps } from './SideNav.types';

export const SideNav = ({
  navItems,
  systemOptions,
  profileMenu,
  activeNavItem,
  activeSubItem,
  onNavItemClick,
  onSubItemClick,
  productName,
  overlayZIndex = 100
}: SideNavProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const sideNavZIndex = overlayZIndex + 1;

  const isDesktop = useMatchMedia(Device.Desktop);
  const [isNavOpen, setNavOpen] = useState(isDesktop);
  // Nav list subnav active state
  const [subNavIsActive, toggleSubNav] = useState(false);

  useEffect(() => {
    setNavOpen(isDesktop);
  }, [isDesktop]);

  const onToggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleOnOpenNav = () => {
    setNavOpen(true);
  };

  // reset nav list to initial state
  const resetNavState = () => {
    onNavItemClick(null);
    onSubItemClick(null);
    toggleSubNav(false);
  };

  return (
    <>
      {isNavOpen && !isDesktop && <Overlay zIndex={overlayZIndex} />}
      <StyledWrapper zIndex={sideNavZIndex}>
        <ProductsBar
          systemOptions={systemOptions}
          profileMenu={profileMenu}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
          onOpenNav={handleOnOpenNav}
          isNavOpen={isNavOpen}
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
                onNavItemClick={onNavItemClick}
                onSubItemClick={onSubItemClick}
                toggleSubNav={toggleSubNav}
              />
            </StyledListWrapper>
          </StyledSideNav>
        )}
      </StyledWrapper>
    </>
  );
};
