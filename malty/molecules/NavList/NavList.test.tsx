import { DataTransfer } from '@carlsberggroup/malty.icons.data-transfer';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen, within } from '@testing-library/react';
import React from 'react';
import { NavList } from './NavList';

const simpleNavigation = [
  { icon: <DataTransfer />, name: 'item 1', href: '/item1' },
  { icon: <DataTransfer />, name: 'item 2', href: '/item2' },
  { icon: <DataTransfer />, name: 'item 3', href: '/item3' }
];

const testHandler = jest.fn();

describe('navList molecule', () => {
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
