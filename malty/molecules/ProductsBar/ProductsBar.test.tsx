import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen, within } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ProductsBar } from './ProductsBar';

const systemOptionsMock = [
  { icon: IconName.DataTransfer, href: '/iframe.html' },
  { icon: IconName.DataTransfer, component: Link, to: '/item2' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconName.DataTransfer, component: Link, to: '/profile' },
    { name: 'Sign out', icon: IconName.DataTransfer, component: Link, to: '/sign-out' }
  ]
};

const singleOptionConfig = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [{ name: 'User profile', icon: IconName.DataTransfer, component: Link, to: '/profile' }]
};

const resetNavState = jest.fn();

describe('Products bar component', () => {
  it('renders with correct number of system options', () => {
    render(
      <BrowserRouter>
        <ProductsBar systemOptions={systemOptionsMock} profileMenu={profileMenuMock} resetNavState={resetNavState} />
      </BrowserRouter>
    );
    const options = screen.getByTestId('system-options');
    const { getAllByRole } = within(options);
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('opens profile menu when there is more than on action configured', () => {
    render(
      <BrowserRouter>
        <ProductsBar systemOptions={systemOptionsMock} profileMenu={profileMenuMock} resetNavState={resetNavState} />
      </BrowserRouter>
    );
    const avatarContainer = screen.getByTestId('avatar');

    fireEvent.click(avatarContainer);
    const profileMenu = screen.getByTestId('profile-options');
    expect(profileMenu).toBeDefined();
  });

  it("doesn't render profile menu when there is only one action configured", () => {
    render(
      <BrowserRouter>
        <ProductsBar systemOptions={systemOptionsMock} profileMenu={singleOptionConfig} resetNavState={resetNavState} />
      </BrowserRouter>
    );
    const avatarContainer = screen.getByTestId('avatar');

    fireEvent.click(avatarContainer);
    const profileMenu = screen.queryByTestId('profile-options');
    expect(profileMenu).toBeNull();
  });
});
