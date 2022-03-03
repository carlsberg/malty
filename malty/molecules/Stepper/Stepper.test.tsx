import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Stepper } from './Stepper';

describe('molecule stepper', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Stepper steps={5} currentStep={2} />);
    expect(view).toMatchSnapshot();
  });
});
