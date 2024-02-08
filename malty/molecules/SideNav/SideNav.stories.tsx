import { DataTransfer } from '@carlsberggroup/malty.icons.data-transfer';
import { ItemProps } from '@carlsberggroup/malty.molecules.nav-list';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { SideNav as SideNavComponent } from './SideNav';
import { SideNavProps } from './SideNav.types';

export default {
  title: 'Navigation/Side Nav',
  component: SideNavComponent,
  parameters: {
    importObject: 'SideNav',
    importPath: '@carlsberggroup/malty.molecules.side-nav'
  },
  argTypes: {
    productName: {
      description: 'the name of your product',
      control: 'text'
    },
    navItems: {
      description: 'navigation items configuration, you can group items by passing to it the same category id'
    },
    systemOptions: {
      description: 'the options to be displayed on the system settings menu'
    },
    profileMenu: {
      description:
        'configuration for the profile menu, if more than one action is set a secondary profile menu will be displayed on click'
    }
  }
} as Meta;

const navItemsMock: ItemProps[] = [
  { icon: <DataTransfer />, name: 'item 1', href: '/' },
  {
    icon: <DataTransfer />,
    name: 'item 2',
    component: NavLink,
    to: '/item2',
    category: 'favourites'
  },
  {
    icon: <DataTransfer />,
    name: 'item 3',
    category: 'favourites',
    subItems: [
      { name: 'sub item 1', component: NavLink, to: '/sub-item1' },
      { name: 'sub item 2', component: NavLink, to: '/sub-item2' }
    ]
  },
  { icon: <DataTransfer />, name: 'item 4', component: NavLink, to: '/item4' }
];

const systemOptionsMock = [
  { icon: <DataTransfer />, href: '/item3' },
  { icon: <DataTransfer />, component: NavLink, to: '/item4' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: <DataTransfer />, component: NavLink, to: '/profile' },
    { name: 'Sign out', icon: <DataTransfer />, component: NavLink, to: '/sign-out' }
  ]
};

const Content = ({ route }: { route: string }) => (
  <div style={{ display: 'flex', justifyContent: 'center', top: '50px', backgroundColor: '#eaeaea', flex: 1 }}>
    {route}
  </div>
);

const Template: Story<SideNavProps> = ({ productName, navItems, systemOptions, profileMenu }) => (
  <BrowserRouter>
    <div style={{ height: '800px', display: 'flex', alignItems: 'stretch' }}>
      <SideNavComponent
        productName={productName}
        navItems={navItems}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
        overlayZIndex={100}
      />
      <Routes>
        <Route path="/item2" element={<Content route="item 2" />} />
        <Route path="/item3" element={<Content route="item 3" />} />
        <Route path="/sub-item1" element={<Content route="sub item 1" />} />
        <Route path="/sub-item2" element={<Content route="sub item 2" />} />
        <Route path="/item4" element={<Content route="item 4" />} />
        <Route path="/iframe.html" element={<Content route="iframe" />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export const SideNav = Template.bind({});
SideNav.args = {
  productName: 'Ottilia',
  navItems: navItemsMock,
  systemOptions: systemOptionsMock,
  profileMenu: profileMenuMock
};
