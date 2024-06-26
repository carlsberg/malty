import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { LoadingOverlay } from '.';

describe('LoadingOverlay component', () => {
  it('should render the component with some text', () => {
    render(<LoadingOverlay dataTestId="loading-overlay" text="Loading" overlayPositionFixed={false} />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    expect(screen.getByTestId('loading-overlay-icon')).toBeInTheDocument();
  });

  it('should render the component without text', () => {
    render(<LoadingOverlay dataTestId="loading-overlay" overlayPositionFixed={false} />);
    expect(screen.getByTestId('loading-overlay-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('loading-overlay-icon-label')).not.toBeInTheDocument();
  });
});
