import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { SideNav } from './SideNav';

const productName = 'Ottilia';

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

const systemOptions = [
  { icon: IconName.DataTransfer, href: '/iframe.html' },
  { icon: IconName.DataTransfer, href: '/iframe.html' }
];

const profileMenu = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconName.DataTransfer, href: '/iframe.html' },
    { name: 'Sign out', icon: IconName.DataTransfer, href: '/item2' }
  ]
};

describe('molecule sideNav', () => {
  it('should render with the correct product name', () => {
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

it('should toggle the navigation when clicking the menu button', () => {
  render(
    <SideNav
      productName={productName}
      navItems={simpleNavigation}
      systemOptions={systemOptions}
      profileMenu={profileMenu}
    />
  );

  const collapseBtn = screen.getByTestId('collapse-button');

  userEvent.click(collapseBtn);

  expect(screen.queryByText(productName)).not.toBeInTheDocument();

  fireEvent(
    collapseBtn,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true
    })
  );

  expect(screen.getByText(productName)).toBeInTheDocument();
});

describe('sideNav sub navigation', () => {
  it('should open when clicking a nav item with sub items', () => {
    render(
      <BrowserRouter>
        <SideNav
          productName={productName}
          navItems={navWithRouterItems}
          systemOptions={systemOptions}
          profileMenu={profileMenu}
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
