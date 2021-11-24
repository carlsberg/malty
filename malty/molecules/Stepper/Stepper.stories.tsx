import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Stepper } from './Stepper';
import { StepperProps } from './Stepper.types';

export default {
  title: 'Molecules/Stepper',
  component: Stepper,
  parameters: {
    importObject: 'Stepper',
    importPath: '@carlsberggroup/malty.molecules.stepper'
  },
  argTypes: {
    steps: {
      control: 'number',
      description: 'Total number of steps'
    },
    currentStep: {
      control: 'number',
      description: 'Current step number of progress'
    },
    isMultiStep: {
      control: 'boolean',
      description: 'Is the stepper a multi step control?'
    }
  }
} as Meta;

const Template: Story<StepperProps> = ({ steps, currentStep, isMultiStep }: StepperProps) => (
  <Stepper steps={steps} currentStep={currentStep} isMultiStep={isMultiStep} />
);

export const Main = Template.bind({});
Main.args = {
  steps: 5,
  currentStep: 2
};
