import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Banner } from './Banner';
import { ActionButtonProps } from './Banner.types';

const title = 'Title';
const description = 'This is a test';
const label = 'label text';
const imageSrc = 'https://placehold.co/300x180';
const actions: ActionButtonProps[] = [
  {
    key: 'cancel',
    style: ButtonStyle.Primary,
    text: 'Cancel'
  },
  {
    key: 'confirm',
    style: ButtonStyle.Secondary,
    text: 'Confirm'
  }
];

describe('Banner', () => {
  it('should render with correct basic content', () => {
    render(<Banner title={title} imageSrc={imageSrc} />);

    expect(screen.getByText(title)).not.toBeNull();
    expect(screen.getByTestId('banner-component')).not.toBeNull();
  });

  it('should render with correct full content', () => {
    render(<Banner title={title} description={description} label={label} imageSrc={imageSrc} actions={actions} />);

    expect(screen.getByText(title)).not.toBeNull();
    expect(screen.getByText(description)).not.toBeNull();
    expect(screen.getByText(label)).not.toBeNull();
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByTestId('banner-component')).not.toBeNull();
  });

  it('should be able to click the buttons when rendered', () => {
    render(<Banner title={title} description={description} label={label} imageSrc={imageSrc} actions={actions} />);

    const primaryButton = screen.getByText('Cancel');
    const secondaryButton = screen.getByText('Confirm');

    fireEvent(
      primaryButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    fireEvent(
      secondaryButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true
      })
    );

    expect(screen.getByText('Cancel')).toBeInTheDocument();
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });
});
