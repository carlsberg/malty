import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledNavItem, StyledNavList, StyledRightArrow, StyledSubNavItem } from './NavList.styled';
import { ItemProps, LinkComponentProps, NavItemProps, NavListProps, SubNavItemProps } from './NavList.types';

function LinkComponent({ component, href, children, componentProps }: LinkComponentProps) {
  const CustomComponent = (component as keyof JSX.IntrinsicElements) || null;

  // we need to spread props in this case in order to allow custom properties being passed to the custom component
  // eslint-disable-next-line react/jsx-props-no-spreading
  return component ? <CustomComponent {...componentProps}>{children}</CustomComponent> : <a href={href}>{children}</a>;
}

function SubNavItem({ item, itemIndex, setActiveNavItem, selected }: SubNavItemProps) {
  const { component, name, href, ...customProps } = item;
  const componentProps = { ...customProps };
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <LinkComponent component={component} href={href} componentProps={componentProps}>
      <StyledSubNavItem onClick={() => setActiveNavItem(itemIndex)} selected={selected} theme={theme}>
        <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.White}>
          {name}
        </Text>
      </StyledSubNavItem>
    </LinkComponent>
  );
}

function NavItem({ item, itemIndex, setActiveNavItem, openSubNav, selected = false, className }: NavItemProps) {
  const { component, name, href, icon, subItems, category, ...customProps } = item;
  const componentProps = { ...customProps };
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <LinkComponent component={component} href={href} componentProps={componentProps}>
      <StyledNavItem
        onClick={subItems ? () => openSubNav(itemIndex) : () => setActiveNavItem(itemIndex)}
        selected={selected}
        theme={theme}
        data-category={category}
        className={className}
      >
        {icon && <Icon name={IconName[icon]} size={IconSize.Small} color={IconColor.White} />}

        <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.White}>
          {name}
        </Text>

        {subItems && (
          <StyledRightArrow theme={theme}>
            <Icon name={IconName.ArrowSmallRight} size={IconSize.Small} color={IconColor.White} />
          </StyledRightArrow>
        )}
      </StyledNavItem>
    </LinkComponent>
  );
}

export function NavList({
  navItems,
  activeNavItem,
  activeSubItem,
  subNavIsActive,
  setActiveNavItem,
  setActiveSubItem,
  toggleSubNav
}: NavListProps) {
  const theme = useContext(ThemeContext) || defaultTheme;

  useEffect(() => {
    setInitialActiveItem();
  }, [navItems]);

  const setInitialActiveItem = () => {
    // set initial selected active item for the one that matches the current window location

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
  };

  const openSubNav = (item: number) => {
    setActiveNavItem(item);
    toggleSubNav(!subNavIsActive);
  };

  const closeSubNav = () => {
    setActiveSubItem(-1);
    toggleSubNav(false);
  };

  const activeItem = navItems[activeNavItem] || ({} as ItemProps);
  const { component, name, href, subItems, icon, category, ...customProps } = activeItem;
  const componentProps = { ...customProps };

  const resolveItemClass = (itemsInCategory: ItemProps[], item: ItemProps) => {
    let className;
    const isFirstInCategory = itemsInCategory.indexOf(item) === 0;
    const isLastInCategory = itemsInCategory.indexOf(item) === itemsInCategory.length - 1;

    if (isFirstInCategory) {
      className = 'firstInCategory';
    }
    if (isLastInCategory) {
      className = 'lastInCategory';
    }
    return className;
  };

  return (
    <StyledNavList theme={theme}>
      {!subNavIsActive &&
        navItems?.map((item, index) => {
          const selected = activeNavItem === index;
          let className;

          if (item.category) {
            const itemsInCategory = navItems.filter((navItem) => navItem.category === item.category);
            // add a class to the first and the list nav items that belong to the current category
            className = resolveItemClass(itemsInCategory, item);
          }

          return (
            <NavItem
              item={item}
              itemIndex={index}
              setActiveNavItem={setActiveNavItem}
              openSubNav={openSubNav}
              selected={selected}
              key={item.key || `navItem${index}`}
              className={className}
            />
          );
        })}

      {subNavIsActive && (
        <>
          <LinkComponent component={component} href={href} componentProps={componentProps}>
            <StyledNavItem selected={false} onClick={closeSubNav} theme={theme}>
              <Icon name={IconName.ArrowSmallLeft} size={IconSize.Small} color={IconColor.White} />
              <Text textStyle={TextStyle.MediumSmallBold} color={TextColor.White}>
                {name}
              </Text>
            </StyledNavItem>
          </LinkComponent>
          {subItems?.map((item, index) => {
            const selected = activeSubItem === index;
            return (
              <SubNavItem
                item={item}
                itemIndex={index}
                setActiveNavItem={setActiveSubItem}
                selected={selected}
                key={item.key || `subNavItem${index}`}
              />
            );
          })}
        </>
      )}
    </StyledNavList>
  );
}
