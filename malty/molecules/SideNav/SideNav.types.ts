import { ItemProps } from '@carlsberggroup/malty.molecules.nav-list';
import { ProfileMenuType, SystemItemProps } from '@carlsberggroup/malty.molecules.products-bar';

export interface SideNavProps {
  navItems: ItemProps[];
  systemOptions: SystemItemProps[];
  profileMenu: ProfileMenuType;
  onNavItemClick: (id: string | null) => void;
  onSubItemClick: (id: string | null) => void;
  activeNavItem: string | null;
  activeSubItem: string | null;
  productName?: string;
  overlayZIndex?: number;
}
