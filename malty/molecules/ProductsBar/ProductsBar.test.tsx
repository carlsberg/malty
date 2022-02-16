import { IconNamesTypes as IconNames } from '@carlsberggroup/malty.atoms.icon';
import { fireEvent, jsonRenderer, render, screen, within } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ProductsBar } from './ProductsBar';

const systemOptionsMock = [
  { icon: IconNames.DataTransfer, href: '/iframe.html' },
  { icon: IconNames.DataTransfer, component: Link, to: '/item2' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: IconNames.DataTransfer, component: Link, to: '/profile' },
    { name: 'Sign out', icon: IconNames.DataTransfer, component: Link, to: '/sign-out' }
  ]
};

const singleOptionConfig = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [{ name: 'User profile', icon: IconNames.DataTransfer, component: Link, to: '/profile' }]
};

const resetNavState = () => {
  console.log('reset nav state');
};

describe('Products bar component', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <BrowserRouter>
        <ProductsBar systemOptions={systemOptionsMock} profileMenu={profileMenuMock} resetNavState={resetNavState} />
      </BrowserRouter>
    );
    expect(view).toMatchSnapshot();
  });

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
