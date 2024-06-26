import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Label } from '.';

const defaultText = 'Test label';

describe('label', () => {
  it('should render with correct text', () => {
    render(<Label label={defaultText} />);

    expect(screen.getByText(defaultText)).not.toBeNull();
  });

  it('should have htmlFor with correct text', () => {
    render(<Label dataTestId="Label" label={defaultText} htmlFor="htmlString" />);

    expect(screen.getByTestId('Label')).toHaveAttribute('for', 'htmlString');
  });
});
