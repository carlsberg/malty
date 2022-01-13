import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Story } from '@storybook/react';
import React from 'react';
import { ButtonProps, SizeTypes } from '.';
import { Button as ButtonComponent } from './Button';
import { ButtonStyle, ButtonTypes, IconPosition } from './Button.types';

export default {
  title: 'Atoms/Button',
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
      options: Object.values(ButtonTypes),
      description: 'The default behavior of the button. Possible values are',
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
      description: 'CSS styling for the button, can be',
      control: {
        type: 'radio'
      },
      table: {
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    onClick: {
      description: 'This is a function that will run on click. It is not a required property'
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
      control: 'boolean',
      description: 'Is button loading?'
    },
    success: {
      control: 'boolean',
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      description: 'Has button succeeded loading?'
    },
    successIcon: {
      options: Object.values(IconNamesTypes),
      table: {
        defaultValue: {
          summary: 'ItemCheck'
        }
      },
      control: {
        type: 'select'
      },
      description: 'Icon for success state'
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
      options: Object.values(IconNamesTypes),
      description: 'Icon for failed state',
      table: {
        defaultValue: {
          summary: 'ItemClose'
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
      options: Object.values(SizeTypes),
      description: 'Button size. Options are',
      table: {
        defaultValue: {
          summary: 'Medium'
        }
      },
      control: {
        type: 'radio'
      }
    },
    icon: {
      options: Object.values(IconNamesTypes),
      description: 'When selected, button label will contain the selected icon',
      control: {
        type: 'select'
      }
    },
    iconPos: {
      options: Object.values(IconPosition),
      description: 'When icon present, position will be',
      table: {
        defaultValue: {
          summary: 'Right'
        }
      },
      control: {
        type: 'radio'
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
  case 'link':
    Button.args = {
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
    break;

  case 'secondary':
    Button.args = {
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
    break;

  case 'floater':
    Button.args = {
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
    break;

  default:
    Button.args = {
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
    break;
}
