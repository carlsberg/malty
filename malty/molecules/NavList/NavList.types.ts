import React, { ReactElement } from 'react';

export interface SubItemProps {
  id: string;
  name: string;
  key?: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
  to?: string;
}

export type ItemProps = {
  id: string;
  name: string;
  icon: ReactElement;
  key?: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
  subItems?: SubItemProps[];
  category?: string;
  to?: string;
};

export interface NavItemProps {
  item: ItemProps;
  onNavItemClick: (item: string | null) => void;
  openSubNav: (itemId: string, firstSubItemId: string) => void;
  selected?: boolean;
  className?: string;
}

export interface SubNavItemProps {
  item: SubItemProps;
  itemIndex: number;
  onSubItemClick: (itemId: string) => void;
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
  activeNavItem: string | null;
  activeSubItem: string | null;
  subNavIsActive: boolean;
  onNavItemClick: (id: string | null) => void;
  onSubItemClick: (id: string | null) => void;
  toggleSubNav: (active: boolean) => void;
}
