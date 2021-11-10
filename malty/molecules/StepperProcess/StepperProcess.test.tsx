import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import { StepperProcess } from './StepperProcess';

describe('molecule stepperProcess', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<StepperProcess steps={5} currentStep={2} />);
    expect(view).toMatchSnapshot();
  });
});
