import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { StepperProps } from './Stepper.types';

const meta: Meta<StepperProps> = {
  title: 'Progress Indicators/Stepper',
  component: Stepper,
  parameters: {
    importObject: 'Stepper',
    importPath: '@carlsberggbs/malty.molecules.stepper'
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
      description: 'Stepper data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<StepperProps>;

export const Base: Story = {
  args: {
    steps: [
      { key: 0, label: 'label 1' },
      { key: 1, label: 'label 2' },
      { key: 2, label: 'label 3' },
      { key: 3, label: 'label 4' },
      { key: 4, label: 'label 5' }
    ],
    currentStep: 2,
    dataQaId: 'stepper',
    isMultiStep: false
  }
};

export const Number: Story = {
  args: {
    ...Base.args,
    steps: 5
  }
};

export default meta;
