import { ReactElement } from 'react';

export type SystemItemProps = {
  icon: ReactElement;
  key?: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
};

export interface ProfileMenuProps {
  username: string;
  open: boolean;
  setProfileMenuOpen: (open: boolean) => void;
  children: React.ReactNode;
  userRole?: string;
  onOpenNav: () => void;
  isNavOpen: boolean;
}

type ProfileItemProps = {
  icon: ReactElement;
  key?: string;
  name?: string;
  href?: string;
  component?: React.ReactNode | JSX.Element;
};

export type ProfileMenuType = {
  username: string;
  userRole?: string;
  profileActions: ProfileItemProps[];
};

export interface ProductsBarProps {
  systemOptions: SystemItemProps[];
  profileMenu: ProfileMenuType;
  resetNavState: () => void;
  onToggleNav: () => void;
  onOpenNav: () => void;
  isNavOpen: boolean;
}
