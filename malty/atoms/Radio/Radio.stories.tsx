import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { RadioProps } from '.';
import { Radio } from './Radio';

const meta: Meta<RadioProps> = {
  component: Radio,
  title: 'Forms/Radio',
  parameters: {
    importObject: 'Radio',
    importPath: '@carlsberggroup/malty.atoms.radio'
  },
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
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<RadioProps>;

export const Base: Story = {
  args: {
    id: 'option1',
    label: 'Option 1',
    name: 'radioOptions',
    value: 'Option 1',
    selected: true,
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
