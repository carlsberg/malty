import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { ProgressBar, ProgressBarSize } from '.';

describe('progressBar', () => {
  it('renders elements', () => {
    render(<ProgressBar progress={30} displayAmount label="Test text" />);

    expect(screen.getByText('Test text')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });

  it('does not display progress when display amount is disabled', () => {
    render(<ProgressBar progress={30} displayAmount={false} />);

    expect(screen.queryByText('30%')).not.toBeInTheDocument();
  });

  it.each([ProgressBarSize.Small, ProgressBarSize.Medium])('renders elements correctly when size is %s', (size) => {
    render(<ProgressBar progress={30} size={size} displayAmount label="Test text" />);

    expect(screen.getByText('Test text')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });
});
