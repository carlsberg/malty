import { IconName } from '@carlsberggroup/malty.atoms.icon';

export type SystemItemProps = {
  icon: IconName;
  href?: string;
  component?: React.ReactNode | JSX.Element;
};

export interface ProfileMenuProps {
  username: string;
  open: boolean;
  setProfileMenuOpen: (open: boolean) => void;
  children: React.ReactNode;
  userRole?: string;
}

type ProfileItemProps = {
  icon: IconName;
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
}
