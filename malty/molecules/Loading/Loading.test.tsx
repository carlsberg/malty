import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Loading } from './Loading';
import { LoadingSize, LoadingStatus } from './Loading.types';

describe('molecule loading', () => {
  it('should render element with text', () => {
    render(<Loading text="Loading..." size={LoadingSize.Medium} status={LoadingStatus.Pending} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render success icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Success} dataQaId="loading" />);
    expect(screen.getByTestId('loading-success-icon')).toBeInTheDocument();
  });

  it('should render failure icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Failure} dataQaId="loading" />);
    expect(screen.getByTestId('loading-failure-icon')).toBeInTheDocument();
  });
});
