import React from 'react';

export interface subItemProps {
  name: string;
  href: string;
  component?: React.ReactNode | JSX.Element;
}

export interface navItemProps {
  name: string;
  icon?: string;
  href: string;
  component?: React.ReactNode | JSX.Element;
  subItems?: subItemProps[];
}

export type NavItemProps = {
  item: navItemProps;
  itemIndex: number;
  setActiveNavItem: (item: number) => void;
  openSubNav: (item: number) => void;
  selected?: boolean;
};

export type SubNavItemProps = {
  item: navItemProps;
  itemIndex: number;
  setActiveNavItem: (item: number) => void;
  selected: boolean;
};

export interface NavListProps {
  navItems: navItemProps[];
}
