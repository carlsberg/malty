import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';
import { InputIconPosition, InputMaskTypes, InputProps, InputSize, InputType } from './Input.types';

const InputComponent = (props: InputProps) => {
  const { value } = props;
  const [stateValue, setStateValue] = useState(value);

  return <Input {...props} value={stateValue} onValueChange={setStateValue} />;
};

const meta: Meta<InputProps> = {
  component: Input,
  title: 'Forms/Input',
  parameters: {
    importObject: 'Input',
    importPath: '@carlsberggroup/malty.atoms.input'
  },
  render: (args) => <InputComponent {...args} />,
  argTypes: {
    label: {
      description: 'Label for the input, goes above',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text to go inside the input field, when empty',
      control: 'text'
    },
    error: {
      description: 'Error message to be displayed when error is present',
      control: 'text'
    },
    hint: {
      description: 'Helper message to be displayed',
      control: 'text'
    },
    size: {
      description: 'Input size options, at the moment only the two below',
      options: Object.values(InputSize),
      control: 'radio'
    },
    type: {
      options: Object.values(InputType),
      mapping: InputType,
      control: 'select',
      description: 'Input type options'
    },
    icon: {
      options: Object.values({ undefined, ...IconName }),
      control: 'select',
      description: 'Icon to be displayed inside input.'
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, disabled'
    },
    readOnly: {
      control: 'boolean',
      description: 'Input state, readOnly'
    },
    required: {
      control: 'boolean',
      description: 'Makes the input required to fill'
    },
    iconPosition: {
      options: Object.keys(InputIconPosition),
      mapping: InputIconPosition,
      control: 'radio',
      description: 'Icon position within the input'
    },
    clearable: {
      control: 'boolean',
      description: 'Should input be clearable?'
    },
    onClearButtonClick: {
      description: 'Function to be executed when clear button is clicked'
    },
    mask: {
      escription: 'RegEx to be applies as mask for input value',
      options: Object.values(InputMaskTypes),
      control: 'select'
    },
    dataTestId: {
      control: 'text',
      description: 'Tooltip data-testid'
    },
    value: {
      description: 'Value of Input',
      control: 'text'
    },
    onValueChange: {
      description: 'Function to be executed when input state changes'
    },
    onInputBlur: {
      description: 'Function to be executed when input loses focus'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum length (number of characters)'
    },
    minLength: {
      control: 'number',
      description: 'Minimum length (number of characters)'
    },
    max: {
      control: 'number',
      description: 'Maximum number'
    },
    min: {
      control: 'number',
      description: 'Minimum number'
    },
    pattern: {
      control: 'text',
      description: 'Pattern to be applied to input value'
    },
    disableRightButton: {
      control: 'boolean',
      description: 'Right Button state, disabled'
    },
    disableLeftButton: {
      control: 'boolean',
      description: 'Left Button state, disabled'
    },
    disableQuantityInput: {
      control: 'boolean',
      description: 'Input Quantity, disabled'
    },
    name: {
      control: 'text',
      description: `HTML name attribute for the input, useful if you're trying to enable browser native autocomplete`
    },
    showCharacterCounter: {
      control: 'boolean',
      description: `Toggle character counter. This property is only available when the input type is ${InputType.Text} `,
      if: { arg: 'type', eq: InputType.Text }
    }
  }
};

type Story = StoryObj<InputProps>;

export const Base: Story = {
  args: {
    size: InputSize.Medium,
    value: '',
    showCharacterCounter: false,
    label: 'Label',
    type: InputType.Text,
    placeholder: 'Placeholder',
    error: '',
    disabled: false,
    clearable: false,
    hint: 'hint text',
    readOnly: false,
    required: false,
    disableLeftButton: false,
    disableRightButton: false,
    disableQuantityInput: false
  }
};

export const URL: Story = {
  args: {
    ...Base.args,
    type: InputType.URL
  }
};

export const Number: Story = {
  args: {
    ...Base.args,
    type: InputType.Number
  }
};

export const Email: Story = {
  args: {
    ...Base.args,
    type: InputType.Email,
    clearable: true
  }
};

export const Password: Story = {
  args: {
    ...Base.args,
    type: InputType.Password
  }
};

export const Search: Story = {
  args: {
    ...Base.args,
    type: InputType.Search,
    icon: IconName.Search
  }
};

export const Phone: Story = {
  args: {
    ...Base.args,
    type: InputType.Telephone
  }
};

export const Quantity: Story = {
  args: {
    ...Base.args,
    type: InputType.Quantity
  }
};

export default meta;
