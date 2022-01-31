import { IconNamesTypes as IconNames } from '@carlsberggroup/malty.atoms.icon';
import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { SideNav } from './SideNav';

const productName = 'Ottilia';

const simpleNavigation = [
  { icon: IconNames.DataTransfer, name: 'item 1', href: '/item1' },
  { icon: IconNames.DataTransfer, name: 'item 2', href: '/item2' },
  { icon: IconNames.DataTransfer, name: 'item 3', href: '/item3' }
];

const systemOptions = [
  { icon: IconNames.DataTransfer, href: '/iframe.html' },
  { icon: IconNames.DataTransfer, href: '/iframe.html' }
];

const profileMenu = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconNames.DataTransfer, href: '/iframe.html' },
    { name: 'Sign out', icon: IconNames.DataTransfer, href: '/item2' }
  ]
};

describe('molecule sideNav', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <SideNav
        productName="Ottilia"
        navItems={simpleNavigation}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
      />
    );
    expect(view).toMatchSnapshot();
  });

  it('renders with correct product name', () => {
    render(
      <SideNav
        productName={productName}
        navItems={simpleNavigation}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
      />
    );
    expect(screen.getByText(productName)).not.toBeNull();
  });
});
