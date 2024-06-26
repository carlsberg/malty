import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Stepper } from './Stepper';

describe('molecule stepper', () => {
  it('renders stepper initials', () => {
    render(<Stepper steps={5} currentStep={2} dataQaId="stepper" />);
    expect(screen.getByTestId('stepper')).toBeDefined();
  });
});
