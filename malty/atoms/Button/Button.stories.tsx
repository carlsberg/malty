import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, SizeTypes } from '.';
import { Button } from './Button';
import { ButtonStyle, ButtonTypes, IconPosition } from './Button.types';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    importObject: 'Button',
    importPath: '@carlsberggroup/malty.atoms.button'
  },
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
    scroll: {
      description: 'Scroll position where will floater show',
      table: {
        defaultValue: 0
      },
      control: {
        type: 'number'
      }
    },
    loading: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    success: { control: 'boolean' },
    successIcon: {
      options: Object.values(IconNamesTypes),
      description: 'Name options listed below',
      table: {
        defaultValue: ''
      },
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
    icon: {
      options: Object.values(IconNamesTypes),
      description: 'Name options listed below',
      table: {
        defaultValue: ''
      },
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
    errorText: { control: 'text' },
    children: { control: 'text' }
  }
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryStory = Template.bind({});
PrimaryStory.args = {
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

export const SecondaryStory = Template.bind({});
SecondaryStory.args = {
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

export const FloaterStory = Template.bind({});
FloaterStory.args = {
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
  errorText: 'Error',
  scroll: 0
};

export const LinkStory = Template.bind({});
LinkStory.args = {
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
  successText: '',
  errorIcon: IconNamesTypes.ItemClose,
  errorText: ''
};
