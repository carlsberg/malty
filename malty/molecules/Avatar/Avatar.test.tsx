import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarSize } from './Avatar.types';

const imageSrc =
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80';
const dataTestId = 'avatar';

describe('Avatar component', () => {
  it('should render with the username initials', () => {
    render(<Avatar userName="John Doe" />);
    const initialsSpan = screen.getByText('JD');

    expect(initialsSpan).toBeInTheDocument();
  });

  it('should render with first and last name initials when username has more than two words', () => {
    render(<Avatar userName="John Doe Yea" />);
    const initialsSpan = screen.getByText('JY');

    expect(initialsSpan).toBeInTheDocument();
  });

  it('should render with a profile image', () => {
    render(<Avatar profileImg={imageSrc} dataQaId={dataTestId} />);
    const avatarContainer = screen.getByTestId(dataTestId);

    expect(avatarContainer).toHaveStyle(`background-image: url(${imageSrc})`);
  });

  it('should not render username initials when profile picture is available', () => {
    render(<Avatar userName="John Doe" profileImg={imageSrc} />);

    const elementWithInitials = screen.queryByText('JD');
    expect(elementWithInitials).not.toBeInTheDocument();
  });

  it('should render with the correct data test id', () => {
    render(<Avatar userName="John Doe" dataQaId={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  it('should show loading indicator', () => {
    render(<Avatar userName="John Doe" loading dataQaId={dataTestId} />);

    expect(screen.getByTestId('avatar-loading')).toBeInTheDocument();
  });

  it('should click the profile image', () => {
    const mockFn = jest.fn();
    render(<Avatar userName="John Doe" profileImg={imageSrc} onClick={mockFn} dataQaId={dataTestId} />);

    const avatarContainer = screen.getByTestId(dataTestId);

    userEvent.click(avatarContainer);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should render a customer icon when no username or image is passed', () => {
    render(<Avatar dataQaId={dataTestId} />);

    expect(screen.getByTestId(`${dataTestId}-customer-icon`)).toBeInTheDocument();
  });

  it('should show a camera icon when avatar is large and editable', () => {
    render(<Avatar dataQaId={dataTestId} editable size={AvatarSize.Large} />);

    expect(screen.getByTestId(`${dataTestId}-camera-icon`)).toBeInTheDocument();
  });

  it('should show a camera icon when avatar is extra large and editable', () => {
    render(<Avatar dataQaId={dataTestId} editable size={AvatarSize.XLarge} />);

    expect(screen.getByTestId(`${dataTestId}-camera-icon`)).toBeInTheDocument();
  });

  it('should not display camera icon', () => {
    render(<Avatar dataQaId={dataTestId} />);

    expect(screen.queryByTestId(`${dataTestId}-camera-icon`)).not.toBeInTheDocument();
  });
});
