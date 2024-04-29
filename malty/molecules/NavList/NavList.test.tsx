import { DataTransfer } from '@carlsberggroup/malty.icons.data-transfer';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { NavList } from './NavList';

const simpleNavigation = [
  { id: 'item1', icon: <DataTransfer />, name: 'item 1', href: '/item1' },
  { id: 'item2', icon: <DataTransfer />, name: 'item 2', href: '/item2' },
  { id: 'item3', icon: <DataTransfer />, name: 'item 3', href: '/item3' }
];

const navWithRouterItems = [
  { id: 'item1', icon: <DataTransfer />, name: 'item 1', href: '/item1' },
  { id: 'item2', icon: <DataTransfer />, name: 'item 2', href: '/item2' },
  {
    id: 'item3',
    icon: <DataTransfer />,
    name: 'item with subnav',
    component: Link,
    to: '/',
    subItems: [
      { id: 'subItem1', name: 'sub item 1', href: '/' },
      { id: 'subItem2', name: 'sub item 2', href: '/' }
    ]
  }
];

const testHandler = jest.fn();
const toggleSubNav = jest.fn();
const handleItemClick = jest.fn();

describe('navList molecule', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correct number of list items', () => {
    render(
      <NavList
        navItems={simpleNavigation}
        activeNavItem="item1"
        activeSubItem="subItem1"
        subNavIsActive={false}
        onNavItemClick={testHandler}
        onSubItemClick={testHandler}
        toggleSubNav={testHandler}
      />
    );
    const list = screen.getByRole('list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(3);
  });

  it('should not call toggle subnav when clicking item without sub items', () => {
    render(
      <BrowserRouter>
        <NavList
          navItems={simpleNavigation}
          activeNavItem="item1"
          activeSubItem="subItem1"
          subNavIsActive={false}
          onNavItemClick={handleItemClick}
          onSubItemClick={testHandler}
          toggleSubNav={toggleSubNav}
        />
      </BrowserRouter>
    );

    const itemWithoutSubNav = screen.getByText('item 1');

    userEvent.click(itemWithoutSubNav);

    expect(handleItemClick).toHaveBeenCalled();
    expect(toggleSubNav).not.toHaveBeenCalled();
  });

  it('should call toggle subnav when clicking item with sub items', () => {
    render(
      <BrowserRouter>
        <NavList
          navItems={navWithRouterItems}
          activeNavItem="item1"
          activeSubItem="subItem1"
          subNavIsActive={false}
          onNavItemClick={handleItemClick}
          onSubItemClick={testHandler}
          toggleSubNav={toggleSubNav}
        />
      </BrowserRouter>
    );

    const itemWithSubNav = screen.getByText('item with subnav');

    userEvent.click(itemWithSubNav);

    expect(toggleSubNav).toHaveBeenCalledTimes(1);
    expect(handleItemClick).toHaveBeenCalledTimes(2);
  });

  it('should list as many navigation items as configured', () => {
    render(
      <BrowserRouter>
        <NavList
          navItems={navWithRouterItems}
          activeNavItem="item1"
          activeSubItem="subItem1"
          subNavIsActive={false}
          onNavItemClick={handleItemClick}
          onSubItemClick={testHandler}
          toggleSubNav={toggleSubNav}
        />
      </BrowserRouter>
    );

    const navItems = screen.getAllByTestId('nav-item');
    expect(navItems).toHaveLength(3);
  });

  it('if sub nav is open, should list as many sub navigation items as configured', () => {
    render(
      <BrowserRouter>
        <NavList
          navItems={navWithRouterItems}
          activeNavItem="item3"
          activeSubItem="subItem1"
          subNavIsActive
          onNavItemClick={handleItemClick}
          onSubItemClick={testHandler}
          toggleSubNav={toggleSubNav}
        />
      </BrowserRouter>
    );

    const navItems = screen.getAllByTestId('subnav-item');
    expect(navItems).toHaveLength(2);
  });
});
