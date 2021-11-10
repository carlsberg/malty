import { Meta, Story } from '@storybook/react';
import { StepperProcess } from './StepperProcess';
import { StepperProcessProps } from './StepperProcess.types';

export default {
  title: 'Molecules/StepperProcess',
  component: StepperProcess,
  parameters: {
    importObject: 'StepperProcess',
    importPath: '@carlsberggroup/malty.atoms.stepperProcess'
  },
  argTypes: {
    steps: { control: 'text' },
    currentStep: { control: 'text' }
  }
} as Meta;

const Template: Story<StepperProcessProps> = ({ steps, currentStep }: StepperProcessProps) => (
  <StepperProcess steps={steps} currentStep={currentStep} />
);

export const Main = Template.bind({});
Main.args = {
  steps: 5,
  currentStep: 2
};
