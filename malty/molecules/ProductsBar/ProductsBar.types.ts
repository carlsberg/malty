import { IconNamesTypes as IconNames } from '@carlsberggroup/malty.atoms.icon';

export type SystemItemProps = {
  icon: IconNames;
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
  icon: IconNames;
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
}
