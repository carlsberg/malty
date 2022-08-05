import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { ProgressSpinner } from '.';
import { ProgressSpinnerStatus } from './ProgressSpinner.types';

describe('progressSpinner', () => {
  it('renders elements', () => {
    render(<ProgressSpinner status={ProgressSpinnerStatus.Pending} dataQaId="spinner" />);
    expect(screen.getByTestId('spinner-pending-icon')).toBeInTheDocument();
  });
  it('renders Success icon', () => {
    render(<ProgressSpinner status={ProgressSpinnerStatus.Success} dataQaId="spinner" />);
    expect(screen.getByTestId('spinner-success-icon')).toBeInTheDocument();
  });
  it('renders failure icon', () => {
    render(<ProgressSpinner status={ProgressSpinnerStatus.Failure} dataQaId="spinner" />);
    expect(screen.getByTestId('spinner-failure-icon')).toBeInTheDocument();
  });
});
