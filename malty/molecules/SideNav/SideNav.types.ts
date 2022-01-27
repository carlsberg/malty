import { ItemProps } from '@carlsberggroup/malty.molecules.nav-list';
import { ProfileMenuType, SystemItemProps } from '@carlsberggroup/malty.molecules.products-bar';

export interface SideNavProps {
  productName: string;
  navItems: ItemProps[];
  systemOptions: SystemItemProps[];
  profileMenu: ProfileMenuType;
}
