import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { ProgressCircle } from './ProgressCircle';

describe('Progress Circle', () => {
  test('renders correctly with default props', () => {
    const percentage = 30;
    render(<ProgressCircle percentage={percentage} />);

    expect(screen.getByText(`${percentage}%`)).toBeInTheDocument();
  });

  test('label shows only round numbers', () => {
    const percentage = 30.516;
    render(<ProgressCircle percentage={percentage} />);

    expect(screen.getByText(`${Math.round(percentage)}%`)).toBeInTheDocument();
  });

  test('if percentage is below zero, label displays x%', () => {
    const percentage = -30;
    render(<ProgressCircle percentage={percentage} />);

    expect(screen.getByText(`${percentage}%`)).toBeInTheDocument();
  });

  test('if percentage is above 100, label displays x%', () => {
    const percentage = 123;
    render(<ProgressCircle percentage={percentage} />);

    expect(screen.getByText(`${percentage}%`)).toBeInTheDocument();
  });
});
