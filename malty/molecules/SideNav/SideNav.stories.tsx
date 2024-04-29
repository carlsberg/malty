import { DataTransfer } from '@carlsberggroup/malty.icons.data-transfer';
import { ItemProps } from '@carlsberggroup/malty.molecules.nav-list';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
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

const navItemsMock: ItemProps[] = [
  { id: 'item1', icon: <DataTransfer />, name: 'item 1', href: '/iframe.html' },
  {
    id: 'item2',
    icon: <DataTransfer />,
    name: 'item 2',
    component: Link,
    to: '/item2',
    category: 'favourites'
  },
  {
    id: 'item3',
    icon: <DataTransfer />,
    name: 'item 3',
    category: 'favourites',
    subItems: [
      { id: 'subItem1', name: 'sub item 1', component: Link, to: '/sub-item1' },
      { id: 'subItem2', name: 'sub item 2', component: Link, to: '/sub-item2' }
    ]
  },
  { id: 'item4', icon: <DataTransfer />, name: 'item 4', component: Link, to: '/item4' }
];

const systemOptionsMock = [
  { icon: <DataTransfer />, href: '/item3' },
  { icon: <DataTransfer />, component: Link, to: '/item4' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: <DataTransfer />, component: Link, to: '/profile' },
    { name: 'Sign out', icon: <DataTransfer />, component: Link, to: '/sign-out' }
  ]
};

const Content = ({ route }: { route: string }) => (
  <div style={{ display: 'flex', justifyContent: 'center', top: '50px', backgroundColor: '#eaeaea', flex: 1 }}>
    {route}
  </div>
);

const Template: Story<SideNavProps> = ({ productName, navItems, systemOptions, profileMenu }) => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>('item1');
  const [activeSubItem, setActiveSubItem] = useState<string | null>('subItem1');

  const handleNavItemClick = (id: string | null) => {
    setActiveNavItem(id);
  };

  const handleSubItemClick = (id: string | null) => {
    setActiveSubItem(id);
  };

  return (
    <BrowserRouter>
      <div style={{ height: '800px', display: 'flex', alignItems: 'stretch' }}>
        <SideNavComponent
          productName={productName}
          navItems={navItems}
          systemOptions={systemOptions}
          profileMenu={profileMenu}
          overlayZIndex={100}
          activeNavItem={activeNavItem}
          activeSubItem={activeSubItem}
          onNavItemClick={handleNavItemClick}
          onSubItemClick={handleSubItemClick}
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
};

export const SideNav = Template.bind({});
SideNav.args = {
  productName: 'Ottilia',
  navItems: navItemsMock,
  systemOptions: systemOptionsMock,
  profileMenu: profileMenuMock
};
