import { fireEvent, jsonRenderer, render, screen, within } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { NavList } from './NavList';

const simpleNavigation = [
  { icon: 'DataTransfer', name: 'item 1', href: '/item1' },
  { icon: 'DataTransfer', name: 'item 2', href: '/item2' },
  { icon: 'DataTransfer', name: 'item 3', href: '/item3' }
];

const navWithRouterItems = [
  { icon: 'DataTransfer', name: 'item 1', href: '/item1' },
  { icon: 'DataTransfer', name: 'item 2', href: '/item2' },
  {
    icon: 'DataTransfer',
    name: 'item with subnav',
    component: Link,
    href: '/',
    subItems: [{ name: 'sub item 1', href: '/' }]
  }
];

describe('sideNav molecule', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<NavList navItems={simpleNavigation} />);
    expect(view).toMatchSnapshot();
  });

  it('renders correct number of list items', () => {
    render(<NavList navItems={simpleNavigation} />);
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });
});

describe('sideNav sub navigation', () => {
  it('opens when clicking a nav item with sub items', () => {
    render(
      <BrowserRouter>
        <NavList navItems={navWithRouterItems} />
      </BrowserRouter>
    );

    const itemWithSubNav = screen.getByText('item with subnav');

    fireEvent(
      itemWithSubNav,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );
    expect(screen.getByText('sub item 1')).toBeInTheDocument();
  });
});
