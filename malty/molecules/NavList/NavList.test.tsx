import { DataTransfer } from '@carlsberggroup/malty.icons.data-transfer';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen, within } from '@testing-library/react';
import React from 'react';
import { NavList } from './NavList';

const simpleNavigation = [
  { id: 'item1', icon: <DataTransfer />, name: 'item 1', href: '/item1' },
  { id: 'item2', icon: <DataTransfer />, name: 'item 2', href: '/item2' },
  { id: 'item3', icon: <DataTransfer />, name: 'item 3', href: '/item3' }
];

const testHandler = jest.fn();

describe('navList molecule', () => {
  it('renders correct number of list items', () => {
    render(
      <NavList
        navItems={simpleNavigation}
        activeNavItem={'item1'}
        activeSubItem={'subItem1'}
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
});
