import { Icon, IconColors, IconSizesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Text } from '@carlsberggroup/malty.atoms.text';
import React, { useEffect, useState } from 'react';
import { StyledNavItem, StyledNavList, StyledRightArrow, StyledSubNavItem } from './NavList.styled';
import { LinkComponentProps, NavItemProps, NavListProps, SubNavItemProps } from './NavList.types';

const LinkComponent = ({ component, href, children }: LinkComponentProps) => {
  const CustomComponent = (component as keyof JSX.IntrinsicElements) || null;
  return <>{component ? <CustomComponent to={href}>{children}</CustomComponent> : <a href={href}>{children}</a>}</>;
};

const SubNavItem = ({ item, itemIndex, setActiveNavItem, selected }: SubNavItemProps) => {
  const { component, name, href } = item;
  return (
    <StyledSubNavItem key={`subNavItem-${itemIndex}`} onClick={() => setActiveNavItem(itemIndex)} selected={selected}>
      <LinkComponent component={component} href={href}>
        <Text size="medium-small" color="white">
          {name}
        </Text>
      </LinkComponent>
    </StyledSubNavItem>
  );
};

const NavItem = ({ item, itemIndex, setActiveNavItem, openSubNav, selected = false }: NavItemProps) => {
  const { component, name, href, icon, subItems } = item;

  return (
    <StyledNavItem
      key={`navItem-${itemIndex}`}
      onClick={subItems ? () => openSubNav(itemIndex) : () => setActiveNavItem(itemIndex)}
      selected={selected}
    >
      <Icon name={icon} size={IconSizesTypes.Small} color={IconColors.White} />

      <LinkComponent component={component} href={href}>
        <Text size="medium-small" color="white">
          {name}
        </Text>
      </LinkComponent>

      {subItems && (
        <StyledRightArrow>
          <Icon name="ArrowSmallRight" size="Small" color="White" />
        </StyledRightArrow>
      )}
    </StyledNavItem>
  );
};

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

  const activeItem = navItems[activeNavItem] || {};
  const { component, name, href, subItems } = activeItem;

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
            <LinkComponent component={component} href={href}>
              <Text size="medium-small" color="white">
                {name}
              </Text>
            </LinkComponent>
            <Icon name="ArrowSmallLeft" size="Small" color="White" />
            <Text size="medium-small" color="white" weight="bold">
              {name}
            </Text>
          </StyledNavItem>
          {subItems?.map((item, index) => {
            const selected = activeSubItem === index;
            return <SubNavItem item={item} itemIndex={index} setActiveNavItem={setActiveSubItem} selected={selected} />;
          })}
        </>
      )}
    </StyledNavList>
  );
};
