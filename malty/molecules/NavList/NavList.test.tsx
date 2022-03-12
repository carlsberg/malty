import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { jsonRenderer, render, screen, within } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { NavList } from './NavList';

const simpleNavigation = [
  { icon: IconName.DataTransfer, name: 'item 1', href: '/item1' },
  { icon: IconName.DataTransfer, name: 'item 2', href: '/item2' },
  { icon: IconName.DataTransfer, name: 'item 3', href: '/item3' }
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
