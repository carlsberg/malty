import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Loading } from './Loading';
import { LoadingSize, LoadingStatus } from './Loading.types';

describe('molecule loading', () => {
  it('should render element with text', () => {
    render(<Loading text="Loading..." size={LoadingSize.Medium} status={LoadingStatus.Pending} />);

    expect(screen.getByText('Loading...')).toBeVisible();
  });

  it('should render success icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Success} dataQaId="loading" />);

    expect(screen.getByTestId('loading-success-icon')).toBeVisible();
  });

  it('should render failure icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Failure} dataQaId="loading" />);

    expect(screen.getByTestId('loading-failure-icon')).toBeVisible();
  });

  it('should render pending icon', () => {
    render(<Loading size={LoadingSize.Medium} status={LoadingStatus.Pending} dataQaId="loading" />);

    expect(screen.getByTestId('loading-pending-icon')).toBeVisible();
  });
});
