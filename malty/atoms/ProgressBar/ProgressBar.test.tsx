import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { ProgressBar } from '.';

describe('progressBar', () => {
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
