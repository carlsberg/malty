import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import { Stepper } from './Stepper';
import React from 'react';

describe('molecule stepper', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Stepper steps={5} currentStep={2} />);
    expect(view).toMatchSnapshot();
  });
});
