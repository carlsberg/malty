import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { BaseIcon } from './BaseIcon';

describe('BaseIcon', () => {
  it('should render default "dataTestId"', () => {
    render(<BaseIcon />);

    expect(screen.getByTestId('icon')).toBeVisible();
  });

  it('should render component with the new "dataTestId"', () => {
    const dataTestId = 'base-icon-component';

    render(<BaseIcon dataTestId={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toBeVisible();
  });
});
