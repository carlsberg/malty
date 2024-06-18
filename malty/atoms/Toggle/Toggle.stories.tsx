import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Toggle } from './Toggle';
import { ToggleProps } from './Toggle.types';

const ToggleComponent = ({ checked, ...props }: ToggleProps) => {
  const [stateChecked, setStateChecked] = useState(checked);

  return <Toggle {...props} checked={stateChecked} onValueChange={() => setStateChecked(!stateChecked)} />;
};

const meta: Meta<ToggleProps> = {
  title: 'Forms/Toggle',
  component: Toggle,
  parameters: {
    importObject: 'Toggle',
    importPath: '@carlsberggbs/malty.atoms.toggle'
  },
  render: (args) => <ToggleComponent {...args} />,
  argTypes: {
    label: {
      control: 'text',
      description: 'Progress indicating text'
    },
    checked: {
      control: 'none',
      description: 'If toggle is on (checked) or off (unchecked)',
      table: {
        category: 'State'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Toggle state, when disabled it is read-only',
      table: {
        category: 'State'
      }
    },
    error: {
      description: 'Error message to be displayed when error is present',
      control: 'text'
    },
    onValueChange: {
      description: 'Function to be executed when toggle state changes',
      table: {
        category: 'Events'
      }
    },
    required: {
      control: 'boolean',
      description: 'Makes the toogle required to fill'
    },
    dataTestId: {
      description: 'Toggle data-testid',
      control: 'text'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ToggleProps>;

export const Base: Story = {
  args: {
    label: 'Toggle label',
    disabled: false,
    required: false,
    dataTestId: 'toggle'
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export const Checked: Story = {
  args: {
    ...Base.args,
    checked: true
  }
};

export default meta;
