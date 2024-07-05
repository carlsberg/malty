import { DataTransfer } from '@carlsberg/malty.icons.data-transfer';
import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { SideNav } from './SideNav';

const productName = 'Ottilia';

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

const systemOptions = [
  { icon: <DataTransfer />, href: '/iframe.html' },
  { icon: <DataTransfer />, href: '/iframe.html' }
];

const profileMenu = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: <DataTransfer />, href: '/iframe.html' },
    { name: 'Sign out', icon: <DataTransfer />, href: '/item2' }
  ]
};

const handleNavItemClick = jest.fn();
const handleSubItemClick = jest.fn();

describe('molecule sideNav', () => {
  beforeAll(() => {
    // TODO: find a way to include this on the jest-setup.ts and make it work when using "bit test"
    window.matchMedia = jest.fn().mockImplementation(() => {
      return {
        matches: true,
        media: '',
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn()
      };
    });
  });

  it('should render with the correct product name', () => {
    render(
      <SideNav
        productName={productName}
        navItems={simpleNavigation}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
        activeNavItem="item1"
        activeSubItem="subItem1"
        onNavItemClick={handleNavItemClick}
        onSubItemClick={handleSubItemClick}
      />
    );

    expect(screen.getByText(productName)).not.toBeNull();
  });

  it('should open the side nav when clicking the avatar if the menu is collapsed', () => {
    render(
      <SideNav
        productName={productName}
        navItems={simpleNavigation}
        systemOptions={systemOptions}
        profileMenu={profileMenu}
        activeNavItem="item1"
        activeSubItem="subItem1"
        onNavItemClick={handleNavItemClick}
        onSubItemClick={handleSubItemClick}
      />
    );

    const avatarContainer = screen.getByTestId('avatar');

    userEvent.click(avatarContainer);

    const profileOptions = screen.queryByTestId('profile-options');
    expect(profileOptions).not.toBeNull();
  });
});

it('should toggle the navigation when clicking the menu button', () => {
  render(
    <SideNav
      productName={productName}
      navItems={simpleNavigation}
      systemOptions={systemOptions}
      profileMenu={profileMenu}
      activeNavItem="item1"
      activeSubItem="subItem1"
      onNavItemClick={handleNavItemClick}
      onSubItemClick={handleSubItemClick}
    />
  );

  const collapseBtn = screen.getByTestId('collapse-button');

  userEvent.click(collapseBtn);

  expect(screen.queryByText(productName)).not.toBeInTheDocument();

  userEvent.click(collapseBtn);

  expect(screen.getByText(productName)).toBeInTheDocument();
});

describe('sideNav sub navigation', () => {
  it('should open when clicking a nav item with sub items', () => {
    const SideNavTest = () => {
      const [activeNavItem, setActiveNavItem] = useState<string | null>('item 1');
      const handleClick = (id: string | null) => {
        setActiveNavItem(id);
      };

      return (
        <BrowserRouter>
          <SideNav
            activeNavItem={activeNavItem}
            activeSubItem="subItem1"
            onNavItemClick={handleClick}
            onSubItemClick={handleSubItemClick}
            productName={productName}
            navItems={navWithRouterItems}
            systemOptions={systemOptions}
            profileMenu={profileMenu}
          />
        </BrowserRouter>
      );
    };

    render(<SideNavTest />);

    const itemWithSubNav = screen.getByText('item with subnav');

    userEvent.click(itemWithSubNav);

    expect(screen.getByText('sub item 1')).toBeInTheDocument();
  });
});
