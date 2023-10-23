import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Avatar } from './Avatar';

const imageSrc =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

describe('Avatar component', () => {
  it('should render with the username initials', () => {
    render(<Avatar userName="John Doe" />);
    const initialsSpan = screen.getByText('JD');
    expect(initialsSpan).toBeDefined();
  });

  it('should render with a profile image', () => {
    render(<Avatar profileImg={imageSrc} dataQaId="avatar" />);
    const avatarContainer = screen.getByTestId('avatar');

    expect(avatarContainer).toHaveStyle(`background-image: url(${imageSrc})`);
  });

  it('should not render username initials when profile picture is available', () => {
    render(<Avatar userName="John Doe" profileImg={imageSrc} />);

    const elementWithInitials = screen.queryByText('JD');
    expect(elementWithInitials).not.toBeInTheDocument();
  });

  it('should render with the correct data test id', () => {
    render(<Avatar userName="John Doe" dataQaId="avatar" />);

    expect(screen.getByTestId('avatar')).toBeInTheDocument();
  });

  it('should show loading indicator', () => {
    render(<Avatar userName="John Doe" loading />);

    expect(screen.getByTestId('undefined-pending-icon')).toBeInTheDocument();
  });

  it('should click the profile image', () => {
    const mockFn = jest.fn();
    render(<Avatar userName="John Doe" profileImg={imageSrc} onClick={mockFn} dataQaId="avatar" />);

    const avatarContainer = screen.getByTestId('avatar');

    userEvent.click(avatarContainer);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
