import { IconNamesTypes as IconNames } from '@carlsberggroup/malty.atoms.icon';
import React from 'react';

export interface SubItemProps {
  name: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
}

export interface ItemProps {
  name: string;
  icon: IconNames;
  href?: string;
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

type validCustomPropValues =
  | string
  | number
  | React.ReactNode
  | JSX.Element
  | React.MouseEventHandler<HTMLButtonElement>;

export type LinkComponentProps = {
  children: React.ReactNode | JSX.Element;
  component?: React.ReactNode | JSX.Element;
  componentProps?: {
    [key: string]: validCustomPropValues;
  };
  href?: string;
};

export interface NavListProps {
  navItems: ItemProps[];
}
