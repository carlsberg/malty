import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Banner } from './Banner';
import { ActionButtonProps } from './Banner.types';

const title = 'Title';
const description = 'This is a test';
const label = 'label text';
const imageSrc = 'https://placehold.co/300x180';
const mockFn = jest.fn();
const actions: ActionButtonProps[] = [
  {
    key: 'cancel',
    style: ButtonStyle.Primary,
    text: 'Cancel',
    onClick: mockFn
  },
  {
    key: 'confirm',
    style: ButtonStyle.Secondary,
    text: 'Confirm',
    onClick: mockFn
  }
];

describe('Banner', () => {
  it('should render with correct basic content', () => {
    render(<Banner title={title} imageSrc={imageSrc} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByTestId('banner-component')).toBeInTheDocument();
  });

  it('should render with correct full content', () => {
    render(<Banner title={title} description={description} label={label} imageSrc={imageSrc} actions={actions} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByTestId('banner-component')).toBeInTheDocument();
  });

  it('should be able to click the buttons when rendered', () => {
    render(<Banner title={title} description={description} label={label} imageSrc={imageSrc} actions={actions} />);

    const primaryButton = screen.getByText('Cancel');
    const secondaryButton = screen.getByText('Confirm');

    userEvent.click(primaryButton);
    userEvent.click(secondaryButton);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  it('should render with a custom button', () => {
    const CustomButton = <button type="button">Custom text button</button>;

    render(<Banner title={title} description={description} label={label} imageSrc={imageSrc} actions={CustomButton} />);

    expect(screen.getByText('Custom text button')).toBeVisible();
  });
});
