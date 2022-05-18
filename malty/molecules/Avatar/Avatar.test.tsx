import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Avatar } from './Avatar';

const imageSrc =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';

describe('Avatar component', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Avatar userName="John Doe" />);
    expect(view).toMatchSnapshot();
  });

  it('renders with the username initials', () => {
    render(<Avatar userName="John Doe" />);
    const initialsSpan = screen.getByText('JD');
    expect(initialsSpan).toBeDefined();
  });

  it('renders with a profile image', () => {
    render(<Avatar profileImg={imageSrc} dataQaId="avatar" />);
    const avatarContainer = screen.getByTestId('avatar');

    expect(avatarContainer).toHaveStyle(`background-image: url(${imageSrc})`);
  });

  it('when profile picture is available, do not render username initials', () => {
    render(<Avatar userName="John Doe" profileImg={imageSrc} />);

    const elementWithInitials = screen.queryByText('JD');
    expect(elementWithInitials).not.toBeInTheDocument();
  });
});
