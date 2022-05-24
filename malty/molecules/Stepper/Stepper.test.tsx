import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Stepper } from './Stepper';

describe('molecule stepper', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Stepper steps={5} currentStep={2} />);
    expect(view).toMatchSnapshot();
  });
  it('renders stepper initials', () => {
    render(<Stepper steps={5} currentStep={2} dataQaId="stepper" />);
    expect(screen.getByTestId('stepper')).toBeDefined();
  });
});
