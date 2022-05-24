import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Stepper as StepperComponent } from './Stepper';
import { StepperProps } from './Stepper.types';

export default {
  title: 'Progress Indicators/Stepper',
  component: StepperComponent,
  parameters: {
    importObject: 'Stepper',
    importPath: '@carlsberggroup/malty.molecules.stepper'
  },
  argTypes: {
    steps: {
      control: 'object',
      description: 'Array of objects defining the steps or number of steps '
    },
    currentStep: {
      control: 'number',
      description: 'Current step number of progress'
    },
    isMultiStep: {
      control: 'boolean',
      description: 'Is the stepper a multi step control?'
    },
    dataQaId: {
      control: 'text',
      description: 'Stepper dataQaId'
    }
  }
} as Meta;

const Template: Story<StepperProps> = ({ steps, currentStep, isMultiStep, dataQaId }: StepperProps) => (
  <StepperComponent steps={steps} currentStep={currentStep} isMultiStep={isMultiStep} dataQaId={dataQaId} />
);

export const Stepper = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'number':
    Stepper.args = {
      steps: 5,
      currentStep: 2,
      dataQaId: 'stepper'
    };
    break;
  default:
    Stepper.args = {
      steps: [
        { key: 0, label: 'label 1' },
        { key: 1, label: 'label 2' },
        { key: 2, label: 'label 3' },
        { key: 3, label: 'label 4' },
        { key: 4, label: 'label 5' }
      ],
      currentStep: 2,
      dataQaId: 'stepper'
    };
    break;
}
