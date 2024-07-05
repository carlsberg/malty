import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { RadioProps } from '.';
import { Radio } from './Radio';

const meta: Meta<RadioProps> = {
  title: 'Forms/Radio',
  component: Radio,
  parameters: {
    importObject: 'Radio',
    importPath: '@carlsberg/malty.atoms.radio'
  },
  argTypes: {
    label: {
      description: 'Label text radio',
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
      control: 'boolean',
      table: {
        category: 'State'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, when disabled',
      table: {
        category: 'State'
      }
    },
    readOnly: {
      control: 'boolean',
      description: 'Input state, when readOnly',
      table: {
        category: 'State'
      }
    },
    name: {
      description: 'Name attribute of the radio element.'
    },
    required: {
      control: 'boolean',
      description: 'Makes the radio input required to fill'
    },
    onValueChange: {
      description: 'Function to be executed when radio state changes',
      table: {
        category: 'Events'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Radio data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<RadioProps>;

export const Base: Story = {
  args: {
    label: 'Option 1',
    name: 'radioOptions',
    value: 'Option 1',
    required: false,
    dataTestId: 'radio'
  }
};

export const Selected: Story = {
  args: {
    ...Base.args,
    selected: true
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
