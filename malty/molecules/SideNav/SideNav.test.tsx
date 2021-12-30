import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { SideNav } from './SideNav';

const productName = 'Ottilia';

const simpleNavigation = [
  { icon: 'DataTransfer', name: 'item 1', href: '/item1' },
  { icon: 'DataTransfer', name: 'item 2', href: '/item2' },
  { icon: 'DataTransfer', name: 'item 3', href: '/item3' }
];

describe('molecule sideNav', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<SideNav productName="Ottilia" navItems={simpleNavigation} />);
    expect(view).toMatchSnapshot();
  });

  it('renders with correct product name', () => {
    render(<SideNav productName={productName} navItems={simpleNavigation} />);
    expect(screen.getByText(productName)).not.toBeNull();
  });
});
