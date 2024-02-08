import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { Checkbox as CheckboxComponent } from './Checkbox';
import { CheckboxProps } from './Checkbox.types';

const ControlledCheckbox = ({ checked, ...args }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return <CheckboxComponent {...args} onValueChange={() => setIsChecked(!isChecked)} checked={isChecked} />;
};

const meta: Meta<CheckboxProps> = {
  title: 'Forms/Checkbox',
  component: CheckboxComponent,
  render: (args) => <ControlledCheckbox {...args} />,
  parameters: {
    importObject: 'Checkbox',
    importPath: '@carlsberggroup/malty.atoms.checkbox',
    variants: []
  },
  argTypes: {
    value: {
      control: {
        type: 'text'
      },
      description: 'This is the value to be passed'
    },
    labelText: {
      control: {
        type: 'text'
      },
      description: 'This is the label for the checkbox'
    },
    required: {
      control: 'boolean',
      description: 'Makes the checkbox required to fill'
    },
    readOnly: {
      control: 'boolean',
      description: 'Makes the checkbox readonly'
    },
    disabled: {
      control: 'boolean',
      description: 'Makes the checkbox disabled'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the checkbox width 100%'
    },
    isIndeterminate: {
      control: 'boolean',
      description: 'Makes the checkbox Indeterminate'
    },
    error: {
      control: {
        type: 'text'
      },
      description: 'Error message below'
    },
    checked: {
      control: 'boolean',
      description: 'Checked `true` or `false`.'
    },
    onValueChange: {
      description: 'Function to be executed when checkbox state changes'
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
    required: false
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
