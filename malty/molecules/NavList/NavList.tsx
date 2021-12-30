import { Icon, IconColors, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Text } from '@carlsberggroup/malty.atoms.text';
import React, { useEffect, useState } from 'react';
import { StyledNavItem, StyledNavList, StyledRightArrow, StyledSubNavItem } from './NavList.styled';
import { NavItemProps, NavListProps, SubNavItemProps } from './NavList.types';

const LinkComponent = ({ item }) => {
  const CustomComponent = (item.component as keyof JSX.IntrinsicElements) || null;
  return (
    <>
      {item.component ? (
        <CustomComponent to={item.href}>
          <Text size="medium-small" color="white">
            {item.name}
          </Text>
        </CustomComponent>
      ) : (
        <a href={item.href}>
          <Text size="medium-small" color="white">
            {item.name}
          </Text>
        </a>
      )}
    </>
  );
};

const SubNavItem = ({ item, itemIndex, setActiveNavItem, selected }: SubNavItemProps) => (
  <StyledSubNavItem key={`subNavItem-${itemIndex}`} onClick={() => setActiveNavItem(itemIndex)} selected={selected}>
    <LinkComponent item={item} />
  </StyledSubNavItem>
);

const NavItem = ({ item, itemIndex, setActiveNavItem, openSubNav, selected = false }: NavItemProps) => (
  <StyledNavItem
    key={`navItem-${itemIndex}`}
    onClick={item.subItems ? () => openSubNav(itemIndex) : () => setActiveNavItem(itemIndex)}
    selected={selected}
  >
    <Icon name={item.icon} size={IconSizesTypes.Small} color={IconColors.White} />

    <LinkComponent item={item} />

    {item.subItems && (
      <StyledRightArrow>
        <Icon name="ArrowSmallRight" size="Small" color="White" />
      </StyledRightArrow>
    )}
  </StyledNavItem>
);

export const NavList = ({ navItems }: NavListProps) => {
  const [subNavIsActive, toggleSubNav] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(-1);
  const [activeSubItem, setActiveSubItem] = useState(-1);

  // set initial selected active item for the one that matches the current window location
  useEffect(() => {
    for (let i = 0; i < navItems.length; i++) {
      const currentItem = navItems[i];
      const currentLocation = window.location.pathname;
      const itemPath = currentItem.href;
      const selected = itemPath === currentLocation;
      if (selected) {
        setActiveNavItem(i);
        break;
      }
    }
  }, [navItems]);

  const openSubNav = (item: number) => {
    setActiveNavItem(item);
    toggleSubNav(!subNavIsActive);
  };

  const closeSubNav = () => {
    setActiveSubItem(-1);
    toggleSubNav(false);
  };

  return (
    <StyledNavList>
      {!subNavIsActive &&
        navItems?.map((item, index) => {
          const selected = activeNavItem === index;
          return (
            <NavItem
              item={item}
              itemIndex={index}
              setActiveNavItem={setActiveNavItem}
              openSubNav={openSubNav}
              selected={selected}
            />
          );
        })}

      {subNavIsActive && (
        <>
          <StyledNavItem onClick={closeSubNav}>
            <LinkComponent item={navItems[activeNavItem]} />
            <Icon name="ArrowSmallLeft" size="Small" color="White" />
            <Text size="medium-small" color="white" weight="bold">
              {navItems[activeNavItem]?.name}
            </Text>
          </StyledNavItem>
          {navItems[activeNavItem]?.subItems?.map((item, index) => {
            const selected = activeSubItem === index;
            return <SubNavItem item={item} itemIndex={index} setActiveNavItem={setActiveSubItem} selected={selected} />;
          })}
        </>
      )}
    </StyledNavList>
  );
};
