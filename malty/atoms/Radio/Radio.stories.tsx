import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioProps } from '.';
import { Radio } from './Radio';

const meta: Meta<RadioProps> = {
  component: Radio,
  title: 'Forms/Radio',
  parameters: {
    importObject: 'Radio',
    importPath: '@carlsberggroup/malty.atoms.radio'
  },
  render: (args) => <Radio {...args} />,
  argTypes: {
    label: {
      description: 'label text radio',
      control: 'text'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    value: {
      description: 'Value of Radio component',
      control: 'text'
    },

    selected: {
      description: 'If Radio component is selected or not',
      control: 'boolean'
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, when disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Input state, when readOnly'
    },
    name: {
      description: 'Name attribute of the radio element.'
    },
    required: {
      control: 'boolean',
      description: 'Makes the radio input required to fill'
    },
    onValueChange: {
      description: 'Function to be executed when radio state changes'
    }
  }
};

type Story = StoryObj<RadioProps>;

export const Base: Story = {
  args: {
    label: 'Option 1',
    name: 'radioOptions',
    value: 'Option 1',
    selected: false,
    disabled: false,
    required: false
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export const ReadOnly: Story = {
  args: {
    ...Base.args,
    readOnly: true
  }
};

export default meta;
