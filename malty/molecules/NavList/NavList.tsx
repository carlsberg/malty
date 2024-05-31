import { CloneIcon, IconColor, IconSize } from '@carlsberggbs/malty.atoms.base-icon';
import { Text, TextColor, TextStyle } from '@carlsberggbs/malty.atoms.text';
import { ArrowSmallLeft } from '@carlsberggbs/malty.icons.arrow-small-left';
import { ArrowSmallRight } from '@carlsberggbs/malty.icons.arrow-small-right';
import { globalTheme as defaultTheme } from '@carlsberggbs/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledNavItem, StyledNavList, StyledRightArrow, StyledSubNavItem } from './NavList.styled';
import { ItemProps, LinkComponentProps, NavItemProps, NavListProps, SubNavItemProps } from './NavList.types';

const LinkComponent = ({ component, href, children, componentProps }: LinkComponentProps) => {
  const CustomComponent = (component as keyof JSX.IntrinsicElements) || null;

  return component ? <CustomComponent {...componentProps}>{children}</CustomComponent> : <a href={href}>{children}</a>;
};

const SubNavItem = ({ item, onSubItemClick, selected }: SubNavItemProps) => {
  const { id, component, name, href, ...customProps } = item;
  const componentProps = { ...customProps };
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledSubNavItem onClick={() => onSubItemClick(id)} selected={selected} theme={theme} data-testid="subnav-item">
      <LinkComponent component={component} href={href} componentProps={componentProps}>
        <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.White}>
          {name}
        </Text>
      </LinkComponent>
    </StyledSubNavItem>
  );
};

const NavItem = ({ item, onNavItemClick, openSubNav, selected = false, className }: NavItemProps) => {
  const { id, component, name, href, icon, subItems, category, ...customProps } = item;
  const componentProps = { ...customProps };
  const theme = useContext(ThemeContext) || defaultTheme;
  const firstSubItemId = subItems && subItems[0]?.id;

  const handleOnClick = () => {
    if (subItems) {
      openSubNav(id, firstSubItemId as string);
    } else {
      onNavItemClick(id);
    }
  };

  return (
    <StyledNavItem
      data-testid="nav-item"
      onClick={handleOnClick}
      selected={selected}
      theme={theme}
      data-category={category}
      className={className}
    >
      <LinkComponent component={component} href={href} componentProps={componentProps}>
        <CloneIcon icon={icon} color={IconColor.White} size={IconSize.Small} />

        <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.White}>
          {name}
        </Text>

        {subItems && (
          <StyledRightArrow theme={theme}>
            <ArrowSmallRight size={IconSize.Small} color={IconColor.White} />
          </StyledRightArrow>
        )}
      </LinkComponent>
    </StyledNavItem>
  );
};

export const NavList = ({
  navItems,
  activeNavItem,
  activeSubItem,
  subNavIsActive,
  onNavItemClick,
  onSubItemClick,
  toggleSubNav
}: NavListProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const handleOpenSubNav = (itemId: string, firstSubItemId: string) => {
    onNavItemClick(itemId);
    toggleSubNav(!subNavIsActive);
  };

  const handleCloseSubNav = () => {
    toggleSubNav(false);
  };

  type EmptyObj = Record<PropertyKey, never>;

  const getActiveItem = (items: ItemProps[], activeItem: string | null): ItemProps | EmptyObj => {
    if (!activeNavItem) {
      return {} as ItemProps;
    }
    return items.find((item) => item.id === activeNavItem) || {};
  };

  const activeItem = getActiveItem(navItems, activeNavItem) || ({} as ItemProps);
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
    <StyledNavList theme={theme} data-testid="nav-list">
      {!subNavIsActive &&
        navItems?.map((item) => {
          const selected = activeNavItem === item.id;
          let className;

          if (item.category) {
            const itemsInCategory = navItems.filter((navItem) => navItem.category === item.category);
            // add a class to the first and the last nav items that belong to the current category
            className = resolveItemClass(itemsInCategory, item);
          }

          return (
            <NavItem
              item={item}
              onNavItemClick={onNavItemClick}
              openSubNav={handleOpenSubNav}
              selected={selected}
              key={item.key || `navItem${item.id}`}
              className={className}
            />
          );
        })}

      {subNavIsActive && (
        <>
          <StyledNavItem selected={false} onClick={handleCloseSubNav} theme={theme}>
            <LinkComponent component={component} href={href} componentProps={componentProps}>
              <ArrowSmallLeft size={IconSize.Small} color={IconColor.White} />
              <Text textStyle={TextStyle.MediumSmallBold} color={TextColor.White}>
                {name}
              </Text>
            </LinkComponent>
          </StyledNavItem>
          {subItems?.map((item, index) => {
            const selected = activeSubItem === item.id;
            return (
              <SubNavItem
                item={item}
                itemIndex={index}
                onSubItemClick={onSubItemClick}
                selected={selected}
                key={item.key || `subNavItem${index}`}
              />
            );
          })}
        </>
      )}
    </StyledNavList>
  );
};
