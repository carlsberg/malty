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

export interface SideNavProps {
  productName: string;
  navItems: navItemProps[];
}
