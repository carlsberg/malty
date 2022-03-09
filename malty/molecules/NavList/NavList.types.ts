import { IconName } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface SubItemProps {
  name: string;
  key?: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
}

export type ItemProps = {
  name: string;
  icon: IconName;
  key?: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
  subItems?: SubItemProps[];
  category?: string;
};

export interface NavItemProps {
  item: ItemProps;
  itemIndex: number;
  setActiveNavItem: (item: number) => void;
  openSubNav: (item: number) => void;
  selected?: boolean;
  className?: string;
}

export interface SubNavItemProps {
  item: SubItemProps;
  itemIndex: number;
  setActiveNavItem: (item: number) => void;
  selected: boolean;
}

type validCustomPropValues =
  | string
  | number
  | React.ReactNode
  | JSX.Element
  | React.MouseEventHandler<HTMLButtonElement>;

export type LinkComponentProps = {
  component?: React.ReactNode | JSX.Element;
  componentProps?: {
    [key: string]: validCustomPropValues;
  };
  href?: string;
  children?: React.ReactNode | JSX.Element;
};

export interface NavListProps {
  navItems: ItemProps[];
  activeNavItem: number;
  activeSubItem: number;
  subNavIsActive: boolean;
  setActiveNavItem: (item: number) => void;
  setActiveSubItem: (item: number) => void;
  toggleSubNav: (active: boolean) => void;
}
