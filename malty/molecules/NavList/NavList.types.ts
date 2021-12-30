import { IconNamesTypes as IconNames } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface SubItemProps {
  name: string;
  href: string;
  component?: React.ReactNode | JSX.Element;
}

export interface ItemProps {
  name: string;
  icon: IconNames;
  href: string;
  component?: React.ReactNode | JSX.Element;
  subItems?: SubItemProps[];
}

export interface NavItemProps {
  item: ItemProps;
  itemIndex: number;
  setActiveNavItem: (item: number) => void;
  openSubNav: (item: number) => void;
  selected?: boolean;
}

export interface SubNavItemProps {
  item: SubItemProps;
  itemIndex: number;
  setActiveNavItem: (item: number) => void;
  selected: boolean;
}

export type LinkComponentProps = {
  href: string;
  children: React.ReactNode | JSX.Element;
  component?: React.ReactNode | JSX.Element;
};

export interface NavListProps {
  navItems: ItemProps[];
}
