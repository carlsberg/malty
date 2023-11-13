import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Input as InputComponent } from './Input';
import { InputIconPosition, InputMaskTypes, InputProps, InputSize, InputType } from './Input.types';

enum InputVariants {
  URL = 'url',
  Number = 'number',
  Email = 'email',
  Password = 'password',
  Search = 'search',
  Phone = 'phone',
  Quantity = 'quantity'
}

export default {
  title: 'Forms/Input',
  component: InputComponent,
  parameters: {
    importObject: 'Input',
    importPath: '@carlsberggroup/malty.atoms.input',
    variants: Object.values(InputVariants)
  },
  argTypes: {
    label: {
      description: 'Label for the input, goes above.',
      control: 'text'
    },
    placeholder: {
      description: 'Placeholder text to go inside the input field, when empty.',
      control: 'text'
    },
    error: {
      description: 'Error message to be displayed when error is present.',
      control: 'text'
    },
    hint: {
      description: 'helper message to be displayed',
      control: 'text'
    },
    size: {
      description: 'Input size options, at the moment only the two below',
      options: Object.values(InputSize),
      control: {
        type: 'radio'
      }
    },
    type: {
      options: Object.keys(InputType),
      mapping: InputType,
      control: {
        type: 'select',
        label: Object.values(InputType)
      },
      description: 'Input type options',
      table: {
        defaultValue: {
          summary: 'InputType.Text'
        }
      },
      defaultValue: 'Text'
    },
    icon: {
      options: Object.values({ undefined, ...IconName }),
      control: {
        type: 'select'
      },
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
      control: {
        type: 'radio',
        label: Object.values(InputIconPosition)
      },
      description: 'Icon positino within the input.',
      table: {
        defaultValue: {
          summary: 'InputIconPosition.Left'
        }
      },
      defaultValue: 'Left'
    },
    clearable: {
      control: 'boolean',
      description: 'Should input be clearable?',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    onClearButtonClick: {
      description: 'Function to be executed when clear button is clicked.'
    },
    mask: {
      options: Object.values(InputMaskTypes),
      control: {
        type: 'select',
        description: 'RegEx to be applies as mask for input value.'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Tooltip data-testid',
      table: { defaultValue: { summary: 'none' } }
    },
    value: {
      description: 'value of Input',
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
    ...generateStorybookSpacing()
  }
} as Meta;

const Template: Story<InputProps> = (args) => {
  const { value = '' } = args;
  const [stateValue, setStateValue] = useState(value);

  return <InputComponent {...args} value={stateValue} onValueChange={setStateValue} />;
};

export const Input = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case InputVariants.URL:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.URL,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: true,
      hint: 'hint text',
      readOnly: false,
      required: false
    };
    break;

  case InputVariants.Number:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.Number,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: false,
      hint: 'hint text',
      readOnly: false,
      disableLeftButton: false,
      disableRightButton: false,
      required: false
    };
    break;

  case InputVariants.Email:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.Email,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: true,
      hint: 'hint text',
      readOnly: false,
      required: false
    };
    break;

  case InputVariants.Password:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.Password,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: false,
      hint: 'hint text',
      readOnly: false,
      required: false
    };
    break;

  case InputVariants.Search:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.Search,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: true,
      icon: IconName.Search,
      hint: 'hint text',
      readOnly: false,
      required: false
    };
    break;

  case InputVariants.Phone:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.Telephone,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: false,
      hint: 'hint text',
      readOnly: false,
      required: false
    };
    break;

  case InputVariants.Quantity:
    Input.args = {
      size: InputSize.Medium,
      label: 'Label',
      type: InputType.Quantity,
      placeholder: 'Placeholder',
      error: '',
      disabled: false,
      clearable: false,
      hint: 'hint text',
      readOnly: false,
      required: false
    };
    break;

  default:
    Input.args = {
      size: InputSize.Medium,
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
    };
    break;
}
