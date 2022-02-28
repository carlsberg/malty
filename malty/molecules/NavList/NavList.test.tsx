import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { fireEvent, jsonRenderer, render, screen, within } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { NavList } from './NavList';

const simpleNavigation = [
  { icon: IconName.DataTransfer, name: 'item 1', href: '/item1' },
  { icon: IconName.DataTransfer, name: 'item 2', href: '/item2' },
  { icon: IconName.DataTransfer, name: 'item 3', href: '/item3' }
];

const navWithRouterItems = [
  { icon: IconName.DataTransfer, name: 'item 1', href: '/item1' },
  { icon: IconName.DataTransfer, name: 'item 2', href: '/item2' },
  {
    icon: IconName.DataTransfer,
    name: 'item with subnav',
    component: Link,
    to: '/',
    subItems: [{ name: 'sub item 1', href: '/' }]
  }
];

const testHandler = () => {
  console.log('test nav list behaviour');
};

describe('sideNav molecule', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <NavList
        navItems={simpleNavigation}
        activeNavItem={-1}
        activeSubItem={-1}
        subNavIsActive={false}
        setActiveNavItem={testHandler}
        setActiveSubItem={testHandler}
        toggleSubNav={testHandler}
      />
    );
    expect(view).toMatchSnapshot();
  });

  it('renders correct number of list items', () => {
    render(
      <NavList
        navItems={simpleNavigation}
        activeNavItem={-1}
        activeSubItem={-1}
        subNavIsActive={false}
        setActiveNavItem={testHandler}
        setActiveSubItem={testHandler}
        toggleSubNav={testHandler}
      />
    );
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
        <NavList
          navItems={navWithRouterItems}
          activeNavItem={-1}
          activeSubItem={-1}
          subNavIsActive={false}
          setActiveNavItem={testHandler}
          setActiveSubItem={testHandler}
          toggleSubNav={testHandler}
        />
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
