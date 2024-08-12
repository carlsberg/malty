import { DataTransfer } from '@carlsberg/malty.icons.data-transfer';
import { render } from '@carlsberg/malty.utils.test';
import { fireEvent, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { ProductsBar } from './ProductsBar';

const systemOptionsMock = [
  { icon: <DataTransfer />, href: '/iframe.html' },
  { icon: <DataTransfer />, component: Link, to: '/item2' }
];

const profileMenuMock = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [
    { name: 'User profile', icon: <DataTransfer />, component: Link, to: '/profile' },
    { name: 'Sign out', icon: <DataTransfer />, component: Link, to: '/sign-out' }
  ]
};

const singleOptionConfig = {
  username: 'Maria Snow',
  userRole: 'Market director',
  profileActions: [{ name: 'User profile', icon: <DataTransfer />, component: Link, to: '/profile' }]
};

const resetNavState = jest.fn();
const onToggleNav = jest.fn();
const onOpenNav = jest.fn();

describe('Products bar component', () => {
  it('should render with correct number of system options', () => {
    render(
      <BrowserRouter>
        <ProductsBar
          systemOptions={systemOptionsMock}
          profileMenu={profileMenuMock}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
          isNavOpen={false}
          onOpenNav={onOpenNav}
        />
      </BrowserRouter>
    );
    const options = screen.getByTestId('system-options');
    const { getAllByRole } = within(options);
    const items = getAllByRole('listitem');
    expect(items).toHaveLength(2);
  });

  it('should open profile menu when there is more than on action configured', () => {
    render(
      <BrowserRouter>
        <ProductsBar
          systemOptions={systemOptionsMock}
          profileMenu={profileMenuMock}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
          isNavOpen={false}
          onOpenNav={onOpenNav}
        />
      </BrowserRouter>
    );
    const avatarContainer = screen.getByTestId('avatar');

    userEvent.click(avatarContainer);

    const profileMenu = screen.getByTestId('profile-options');
    expect(profileMenu).toBeDefined();
  });

  it('should not render profile menu when there is only one action configured', () => {
    render(
      <BrowserRouter>
        <ProductsBar
          systemOptions={systemOptionsMock}
          profileMenu={singleOptionConfig}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
          isNavOpen={false}
          onOpenNav={onOpenNav}
        />
      </BrowserRouter>
    );
    const avatarContainer = screen.getByTestId('avatar');

    fireEvent.click(avatarContainer);
    const profileMenu = screen.queryByTestId('profile-options');
    expect(profileMenu).toBeNull();
  });

  it('should call onToggleNav when clicking menu button', () => {
    render(
      <BrowserRouter>
        <ProductsBar
          systemOptions={systemOptionsMock}
          profileMenu={singleOptionConfig}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
          isNavOpen={false}
          onOpenNav={onOpenNav}
        />
      </BrowserRouter>
    );

    const collapseBtn = screen.getByTestId('collapse-button');

    userEvent.click(collapseBtn);

    expect(onToggleNav).toHaveBeenCalledTimes(1);
  });

  it('should open nav when clicking avatar, if there are multiple profile actions available', () => {
    render(
      <BrowserRouter>
        <ProductsBar
          systemOptions={systemOptionsMock}
          profileMenu={profileMenuMock}
          resetNavState={resetNavState}
          onToggleNav={onToggleNav}
          isNavOpen={false}
          onOpenNav={onOpenNav}
        />
      </BrowserRouter>
    );
    const avatarContainer = screen.getByTestId('avatar');

    userEvent.click(avatarContainer);

    expect(onToggleNav).toHaveBeenCalledTimes(1);
  });
});
