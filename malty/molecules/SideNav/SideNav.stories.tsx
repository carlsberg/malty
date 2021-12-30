import { Meta, Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SideNav } from './SideNav';
import { SideNavProps } from './SideNav.types';

export default {
  title: 'Molecules/SideNav',
  component: SideNav,
  parameters: {
    importObject: 'SideNav',
    importPath: '@carlsberggroup/malty.molecules.sideNav'
  },
  argTypes: {
    productName: { control: 'text' }
  }
} as Meta;

const navItemsMock = [
  { icon: 'DataTransfer', name: 'item 1', href: '/iframe.html' },
  { icon: 'DataTransfer', name: 'item 2', component: Link, href: '/item2' },
  {
    icon: 'DataTransfer',
    name: 'item 3',
    component: Link,
    href: '/item3',
    subItems: [
      { name: 'sub item 1', component: Link, href: '/sub-item1' },
      { name: 'sub item 2', component: Link, href: '/sub-item2' }
    ]
  }
];

const Template: Story<SideNavProps> = ({ productName, navItems }) => (
  <BrowserRouter>
    <SideNav productName={productName} navItems={navItems} />
    <Routes>
      <Route path="/item3"> </Route>
    </Routes>
  </BrowserRouter>
);

export const Main = Template.bind({});
Main.args = {
  productName: 'Ottilia',
  navItems: navItemsMock
};
