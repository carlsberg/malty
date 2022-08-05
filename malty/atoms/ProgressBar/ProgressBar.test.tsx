import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { ProgressBar } from '.';

describe('progressBar', () => {
  it('renders elements', () => {
    render(<ProgressBar progress={30} displayAmount label="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });
});
