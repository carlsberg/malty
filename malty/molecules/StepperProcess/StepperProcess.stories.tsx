import { Meta, Story } from '@storybook/react';
import { StepperProcess } from './StepperProcess';
import { StepperProcessProps } from './StepperProcess.types';
import React from 'react';

export default {
  title: 'Molecules/StepperProcess',
  component: StepperProcess,
  parameters: {
    importObject: 'StepperProcess',
    importPath: '@carlsberggroup/malty.atoms.stepperProcess'
  },
  argTypes: {
    steps: { control: 'text' },
    currentStep: { control: 'text' },
    isMultiStep: { control: 'boolean' }
  }
} as Meta;

const Template: Story<StepperProcessProps> = ({ steps, currentStep, isMultiStep }: StepperProcessProps) => (
  <StepperProcess steps={steps} currentStep={currentStep} isMultiStep={isMultiStep} />
);

export const Main = Template.bind({});
Main.args = {
  steps: 5,
  currentStep: 2
};
