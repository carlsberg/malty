import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
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

const navItemsMock = [
  { icon: IconName.DataTransfer, name: 'item 1', href: '/iframe.html' },
  { icon: IconName.DataTransfer, name: 'item 2', component: Link, to: '/item2', category: 'favourites' },
  {
    icon: IconName.DataTransfer,
    name: 'item 3',
    component: Link,
    to: '/item3',
    category: 'favourites',
    replace: true,
    subItems: [
      { name: 'sub item 1', component: Link, to: '/sub-item1' },
      { name: 'sub item 2', component: Link, to: '/sub-item2' }
    ]
  },
  { icon: IconName.DataTransfer, name: 'item 4', component: Link, to: '/item4' }
];

const systemOptionsMock = [
  { icon: IconName.DataTransfer, href: '/iframe.html' },
  { icon: IconName.DataTransfer, component: Link, to: '/item2' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconName.DataTransfer, component: Link, to: '/profile' },
    { name: 'Sign out', icon: IconName.DataTransfer, component: Link, to: '/sign-out' }
  ]
};

const Template: Story<SideNavProps> = ({ productName, navItems, systemOptions, profileMenu }) => (
  <BrowserRouter>
    <div style={{ height: '800px' }}>
      <SideNavComponent
        productName={productName}
        navItems={navItems}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
      />
    </div>
    <Routes>
      <Route path="/item3"> </Route>
    </Routes>
  </BrowserRouter>
);

export const SideNav = Template.bind({});
SideNav.args = {
  productName: 'Ottilia',
  navItems: navItemsMock,
  systemOptions: systemOptionsMock,
  profileMenu: profileMenuMock
};
