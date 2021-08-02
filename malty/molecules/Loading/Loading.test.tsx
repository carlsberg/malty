import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Loading } from './Loading';
import { LoadingStatus, SizeTypes } from './Loading.types';

describe('molecule loading', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Loading text="Loading..." size={SizeTypes.Medium} status={LoadingStatus.Pending} />);
    expect(view).toMatchSnapshot();
  });

  it('renders element with text', () => {
    render(<Loading text="Loading..." size={SizeTypes.Medium} status={LoadingStatus.Pending} />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders success icon', () => {
    render(<Loading size={SizeTypes.Medium} status={LoadingStatus.Success} />);
    expect(screen.getByTestId('svg-component')).toHaveClass(LoadingStatus.Success);
  });

  it('renders failure icon', () => {
    render(<Loading size={SizeTypes.Medium} status={LoadingStatus.Failure} />);
    expect(screen.getByTestId('svg-component')).toHaveClass(LoadingStatus.Failure);
  });
});
