/* eslint-disable */
// @ts-nocheck
import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Hero } from './Hero';

const title = 'Title';
const description = 'This is a test';
const imageSrc = 'https://placehold.co/300x180';
const actions = [
  {
    variant: ButtonStyle.Secondary,
    label: 'Cancel'
  },
  {
    variant: ButtonStyle.Primary,
    label: 'Confirm'
  }
];

describe('Hero', () => {
  it('renders with correct basic content', () => {
    render(<Hero title={title} imageSrc={imageSrc} />);
    expect(screen.getByText(title)).not.toBeNull();
    expect(screen.getByTestId('hero-component')).not.toBeNull();
  });

  it('renders with correct full content', () => {
    render(<Hero title={title} description={description} imageSrc={imageSrc} actions={actions} />);
    expect(screen.getByText(title)).not.toBeNull();
    expect(screen.getByText(description)).not.toBeNull();
    expect(screen.getAllByRole('button')).toHaveLength(2);
    expect(screen.getByTestId('hero-component')).not.toBeNull();
  });
});
