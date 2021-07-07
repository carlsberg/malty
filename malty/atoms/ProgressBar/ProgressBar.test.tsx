import { jsonRenderer, render, screen } from '@/utils/test';
import React from 'react';
import { ProgressBar } from '.';

describe('pill', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<ProgressBar progress={30} displayAmount label="Test text" />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(<ProgressBar progress={30} displayAmount label="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });
});
