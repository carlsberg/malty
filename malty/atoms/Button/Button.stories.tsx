import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, SizeTypes } from '.';
import { Button } from './Button';
import { ButtonStyle, ButtonTypes, IconPosition } from './Button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    text: { control: 'text' },
    type: {
      options: Object.values(ButtonTypes),
      control: {
        type: 'radio'
      },
      table: {
        defaultValue: {
          summary: 'submit'
        }
      }
    },
    style: {
      options: Object.values(ButtonStyle),
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
    selected: {
      description: 'Add classname of "active" to element',
      control: 'boolean'
    },
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
  style: ButtonStyle.Primary,
  text: 'Primary',
  type: ButtonTypes.Submit,
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
  style: ButtonStyle.Secondary,
  text: 'Secondary',
  type: ButtonTypes.Submit,
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
  style: ButtonStyle.Floater,
  icon: IconNamesTypes.ArrowSmallUp,
  type: ButtonTypes.Submit,
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
  style: ButtonStyle.Link,
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
