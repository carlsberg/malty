import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, ButtonSize } from '.';
import { Button as ButtonComponent } from './Button';
import { ButtonIconPosition, ButtonStyle, ButtonType } from './Button.types';

export default {
  title: 'Forms/Button',
  component: ButtonComponent,
  parameters: {
    importObject: 'Button',
    importPath: '@carlsberggroup/malty.atoms.button'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Button label, can be'
    },
    type: {
      description: 'The default behavior of the button. Possible values are',
      options: Object.keys(ButtonType),
      mapping: ButtonType,
      control: {
        type: 'select',
        label: Object.values(ButtonType)
      },
      table: {
        defaultValue: {
          summary: 'ButtonType.Submit'
        }
      }
    },
    style: {
      description: 'CSS styling for the button, can be',
      options: Object.keys(ButtonStyle),
      mapping: ButtonStyle,
      control: {
        type: 'select',
        label: Object.values(ButtonStyle)
      },
      table: {
        defaultValue: {
          summary: 'ButtonStyle.Primary'
        }
      }
    },
    onClick: {
      description: 'This is a function that will run on click. It is not a required property'
    },
    scroll: {
      description: 'Scroll position where will floater show',
      table: {
        defaultValue: {
          summary: 0
        }
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
      control: 'boolean',
      description: 'Is button loading?'
    },
    success: {
      description: 'Has button succeeded loading?',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      }
    },
    successIcon: {
      description: 'Icon for success state',
      options: Object.values(IconName),
      table: {
        defaultValue: {
          summary: 'IconName.ItemCheck'
        }
      },
      control: {
        type: 'select'
      }
    },
    successText: {
      control: 'text',
      description: 'Button label for success state'
    },
    error: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      description: 'Has button failed loading?'
    },
    errorIcon: {
      description: 'Icon for failed state',
      options: Object.values(IconName),
      table: {
        defaultValue: {
          summary: 'IconName.ItemClose'
        }
      },
      control: {
        type: 'select'
      }
    },
    errorText: {
      control: 'text',
      description: 'Button label for failed state'
    },
    size: {
      description: 'Button size. Options are',
      options: Object.values(ButtonSize),
      table: {
        defaultValue: {
          summary: 'ButtonSize.Medium'
        }
      },
      control: {
        type: 'select'
      }
    },
    icon: {
      description: 'When selected, button label will contain the selected icon',
      options: Object.values(IconName),
      control: {
        type: 'select'
      }
    },
    iconPos: {
      description: 'When icon present, position will be',
      options: Object.values(ButtonIconPosition),
      table: {
        defaultValue: {
          summary: 'Right'
        }
      },
      control: {
        type: 'select'
      }
    },
    isWhite: {
      control: 'boolean',
      description: 'Should this be a white button?'
    },
    disabled: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean',
      description: 'Disable button'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Should this be a full width button, that will stretch to 100% of its wrapper?'
    },
    url: {
      control: 'text',
      description: 'Use this component as link or button with a simple URL, no click function needed'
    },
    selected: {
      description: 'Add classname of "active" to element',
      control: 'boolean'
    },
    children: {
      control: 'text',
      description: 'Label your button with a child, as a string. This is an alternative to the `text` property'
    }
  }
};

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'Link':
    Button.args = {
      style: ButtonStyle.Link,
      type: ButtonType.Submit,
      text: 'Link text',
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      error: false,
      success: false,
      isWhite: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false,
      successIcon: IconName.ItemCheck,
      successText: '',
      errorIcon: IconName.ItemClose,
      errorText: ''
    };
    break;

  case 'Secondary':
    Button.args = {
      style: ButtonStyle.Secondary,
      text: 'Secondary',
      type: ButtonType.Submit,
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      error: false,
      success: false,
      isWhite: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false,
      successIcon: IconName.ItemCheck,
      successText: 'Success',
      errorIcon: IconName.ItemClose,
      errorText: 'Error'
    };
    break;

  case 'Floater':
    Button.args = {
      style: ButtonStyle.Floater,
      icon: IconName.ArrowSmallUp,
      type: ButtonType.Submit,
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      error: false,
      success: false,
      isWhite: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false,
      successIcon: IconName.ItemCheck,
      successText: 'Success',
      errorIcon: IconName.ItemClose,
      errorText: 'Error',
      scroll: 0
    };
    break;

  case 'Transparent':
    Button.args = {
      style: ButtonStyle.Transparent,
      text: 'Transparent',
      type: ButtonType.Submit,
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      error: false,
      success: false,
      isWhite: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: true,
      successIcon: IconName.ItemCheck,
      successText: 'Success',
      errorIcon: IconName.ItemClose,
      errorText: 'Error'
    };
    break;

  default:
    Button.args = {
      style: ButtonStyle.Primary,
      text: 'Primary',
      type: ButtonType.Submit,
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      error: false,
      success: false,
      isWhite: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false,
      successIcon: IconName.ItemCheck,
      successText: 'Success',
      errorIcon: IconName.ItemClose,
      errorText: 'Error'
    };
    break;
}
