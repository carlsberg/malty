import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Checkbox } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

const ControlledCheckbox = ({ checked, ...args }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return <Checkbox {...args} onValueChange={() => setIsChecked(!isChecked)} checked={isChecked} />;
};

const meta: Meta<CheckboxProps> = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  render: (args) => <ControlledCheckbox {...args} />,
  parameters: {
    importObject: 'Checkbox',
    importPath: '@carlsberg/malty.atoms.checkbox'
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'This is the value to be passed'
    },
    labelText: {
      control: 'text',
      description: 'This is the label for the checkbox'
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox required to fill'
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the checkbox readonly',
      table: {
        category: 'State'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Makes the checkbox disabled',
      table: {
        category: 'State'
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the checkbox width 100%',
      table: {
        category: 'Styling'
      }
    },
    isIndeterminate: {
      control: 'boolean',
      description: 'Makes the checkbox Indeterminate',
      table: {
        category: 'State'
      }
    },
    error: {
      control: 'text',
      description: 'Error message below'
    },
    checked: {
      control: 'boolean',
      description: 'Checked `true` or `false`.',
      table: {
        category: 'State'
      }
    },
    onValueChange: {
      description: 'Function to be executed when checkbox state changes',
      table: {
        category: 'Events'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Checkbox data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<CheckboxProps>;

export const Base: Story = {
  args: {
    value: 'Base',
    labelText: 'Base label',
    error: '',
    checked: true,
    required: false,
    dataTestId: 'checkbox'
  }
};

export const Checked: Story = {
  args: {
    value: 'Checked',
    labelText: 'Checked label',
    error: '',
    checked: true,
    required: false
  }
};

export const Undetermined: Story = {
  args: {
    value: 'Undetermined',
    labelText: 'Undetermined label',
    error: '',
    required: false,
    isIndeterminate: true
  }
};

export const Unchecked: Story = {
  args: {
    value: 'Unchecked',
    labelText: 'Unchecked label',
    error: '',
    checked: false,
    required: false
  }
};

export const Disabled: Story = {
  args: {
    labelText: 'Disabled label',
    error: '',
    checked: true,
    required: false,
    disabled: true
  }
};

export const ReadOnly: Story = {
  args: {
    labelText: 'Readonly label',
    error: '',
    checked: true,
    required: false,
    readOnly: true
  }
};

export const Required: Story = {
  args: {
    labelText: 'Required label',
    error: '',
    checked: false,
    required: true
  }
};

export const Errored: Story = {
  args: {
    labelText: 'With error label',
    checked: true,
    required: true,
    error: 'This input is required'
  }
};

export default meta;
