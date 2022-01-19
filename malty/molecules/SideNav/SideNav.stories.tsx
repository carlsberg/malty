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
  { icon: IconNames.DataTransfer, name: 'item 2', component: Link, to: '/item2' },
  {
    icon: IconNames.DataTransfer,
    name: 'item 3',
    component: Link,
    to: '/item3',
    replace: true,
    subItems: [
      { name: 'sub item 1', component: Link, to: '/sub-item1' },
      { name: 'sub item 2', component: Link, to: '/sub-item2' }
    ]
  }
];

const Template: Story<SideNavProps> = ({ productName, navItems }) => (
  <BrowserRouter>
    <SideNavComponent productName={productName} navItems={navItems} />
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
