import { IconNamesTypes as IconNames } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SideNav as SideNavComponent } from './SideNav';
import { SideNavProps } from './SideNav.types';

export default {
  title: 'Molecules/Side Nav',
  component: SideNavComponent,
  parameters: {
    importObject: 'SideNav',
    importPath: '@carlsberggroup/malty.molecules.sideNav'
  },
  argTypes: {
    productName: { control: 'text' }
  }
} as Meta;

const navItemsMock = [
  { icon: IconNames.DataTransfer, name: 'item 1', href: '/iframe.html' },
  { icon: IconNames.DataTransfer, name: 'item 2', component: Link, to: '/item2', category: 'favourites' },
  {
    icon: IconNames.DataTransfer,
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
  { icon: IconNames.DataTransfer, name: 'item 4', component: Link, to: '/item4' }
];

const systemOptionsMock = [
  { icon: IconNames.DataTransfer, href: '/iframe.html' },
  { icon: IconNames.DataTransfer, component: Link, to: '/item2' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconNames.DataTransfer, component: Link, to: '/profile' },
    { name: 'Sign out', icon: IconNames.DataTransfer, component: Link, to: '/sign-out' }
  ]
};

const Template: Story<SideNavProps> = ({ productName, navItems }) => (
  <BrowserRouter>
    <div style={{ height: '800px' }}>
      <SideNavComponent
        productName={productName}
        navItems={navItems}
        systemOptions={systemOptionsMock}
        profileMenu={profileMenuMock}
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
  navItems: navItemsMock
};
