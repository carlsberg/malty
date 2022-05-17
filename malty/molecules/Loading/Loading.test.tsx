import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Loading } from './Loading';
import { LoadingSize, LoadingStatus } from './Loading.types';

describe('molecule loading', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Loading text="Loading..." size={LoadingSize.Medium} status={LoadingStatus.Pending} />);
    expect(view).toMatchSnapshot();
  });

  it('renders element with text', () => {
    render(<Loading text="Loading..." size={LoadingSize.Medium} status={LoadingStatus.Pending} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders success icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Success} dataQaId="loading" />);
    expect(screen.getByTestId('loading-success-icon')).toBeInTheDocument();
  });

  it('renders failure icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Failure} dataQaId="loading" />);
    expect(screen.getByTestId('loading-failure-icon')).toBeInTheDocument();
  });
});
