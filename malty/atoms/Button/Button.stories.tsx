import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, ButtonType, SizeTypes } from '.';
import { Button } from './Button';
import { IconPosition } from './Button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    buttonType: {
      options: Object.values(ButtonType),
      control: {
        type: 'radio'
      }
    },
    icon: {
      options: Object.values(IconNamesTypes),
      description: 'Name options listed below',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    size: {
      options: Object.values(SizeTypes),
      description: 'Size options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    },
    iconPos: {
      options: Object.values(IconPosition),
      description: 'Icon position',
      table: {
        defaultValue: {
          summary: 'Right'
        }
      },
      control: {
        type: 'radio'
      }
    },
    isWhite: { control: 'boolean' },
    loading: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    fullWidth: { control: 'boolean' },
    url: { control: 'text' },
    selected: { control: 'boolean' },
    success: { control: 'boolean' },
    successIcon: {
      options: Object.values(IconNamesTypes),
      description: 'Name options listed below',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    successText: { control: 'text' },
    error: { control: 'boolean' },
    errorIcon: {
      options: Object.values(IconNamesTypes),
      description: 'Name options listed below',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    errorText: { control: 'text' },
    onClick: {
      table: {
        disable: true
      }
    }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.Primary,
  text: 'Primary',
  size: SizeTypes.Medium,
  iconPos: IconPosition.Right,
  loading: false,
  error: false,
  success: false,
  isWhite: false,
  disabled: false,
  fullWidth: false,
  url: '',
  selected: false,
  successIcon: IconNamesTypes.ItemCheck,
  successText: 'Success',
  errorIcon: IconNamesTypes.ItemClose,
  errorText: 'Error'
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.Secondary,
  text: 'Secondary',
  size: SizeTypes.Medium,
  iconPos: IconPosition.Right,
  loading: false,
  error: false,
  success: false,
  isWhite: false,
  disabled: false,
  fullWidth: false,
  url: '',
  selected: false,
  successIcon: IconNamesTypes.ItemCheck,
  successText: 'Success',
  errorIcon: IconNamesTypes.ItemClose,
  errorText: 'Error'
};

export const Floater = Template.bind({});
Floater.args = {
  buttonType: ButtonType.Floater,
  icon: IconNamesTypes.ArrowSmallUp,
  size: SizeTypes.Medium,
  iconPos: IconPosition.Right,
  loading: false,
  error: false,
  success: false,
  isWhite: false,
  disabled: false,
  fullWidth: false,
  url: '',
  selected: false,
  successIcon: IconNamesTypes.ItemCheck,
  successText: 'Success',
  errorIcon: IconNamesTypes.ItemClose,
  errorText: 'Error'
};

export const Link = Template.bind({});
Link.args = {
  buttonType: ButtonType.Link,
  text: 'Link text',
  size: SizeTypes.Medium,
  iconPos: IconPosition.Right,
  loading: false,
  error: false,
  success: false,
  isWhite: false,
  disabled: false,
  fullWidth: false,
  url: '',
  selected: false,
  successIcon: IconNamesTypes.ItemCheck,
  successText: 'Success',
  errorIcon: IconNamesTypes.ItemClose,
  errorText: 'Error'
};
