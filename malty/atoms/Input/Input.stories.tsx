import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Input } from './Input';
import { IconPosition, InputProps, InputType, MaskTypes, SizeTypes } from './Input.types';

export default {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    importObject: 'Input',
    importPath: '@carlsberggroup/malty.atoms.input'
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
    size: {
      description: 'Input size options, at the moment only the two below',
      options: Object.values(SizeTypes),
      control: {
        type: 'radio'
      },
      table: {
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    type: {
      options: Object.values(InputType),
      control: {
        type: 'select'
      },
      description: 'Input type options',
      table: {
        defaultValue: {
          summary: 'text'
        }
      }
    },
    icon: {
      options: Object.values(IconNamesTypes),
      control: {
        type: 'select'
      },
      description: 'Icon to be displayed inside input.'
    },
    disabled: {
      control: 'boolean',
      description: 'Input state, when disabled it is read-only.'
    },
    iconPosition: {
      options: Object.values(IconPosition),
      control: {
        type: 'radio'
      },
      description: 'Icon positino within the input.',
      table: {
        defaultValue: {
          summary: 'left'
        }
      }
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
    mask: {
      options: Object.values(MaskTypes),
      control: {
        type: 'select',
        description: 'RegEx to be applies as mask for input value.'
      }
    },
    value: {
      table: {
        disable: true
      }
    },
    onValueChange: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<InputProps> = ({
  value,
  size,
  label,
  type,
  icon,
  placeholder,
  error,
  disabled,
  iconPosition,
  clearable,
  mask
}: InputProps) => {
  const [stateValue, setStateValue] = useState(value);
  return (
    <Input
      size={size}
      label={label}
      type={type}
      icon={icon}
      placeholder={placeholder}
      error={error}
      disabled={disabled}
      value={stateValue}
      iconPosition={iconPosition}
      clearable={clearable}
      mask={mask}
      onValueChange={(newValue: string) => setStateValue(newValue)}
    />
  );
};

export const Main = Template.bind({});
Main.args = {
  size: SizeTypes.Medium,
  label: 'Label',
  type: InputType.Text,
  placeholder: 'Placeholder',
  error: 'Error text',
  disabled: false,
  clearable: false
};
