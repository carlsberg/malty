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
    importPath: '@carlsberggroup/malty.atoms.button',
    variants: ['primary', 'secondary', 'link']
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
          summary: 'ButtonType.Default'
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
        category: 'Styling',
        defaultValue: {
          summary: 'ButtonStyle.Primary'
        }
      }
    },
    onClick: {
      description: 'This is a function that will run on click. It is not a required property',
      table: {
        category: 'Events'
      }
    },
    onKeyUp: {
      description: 'This is a function that will run on onKeyUp. It is not a required property',
      table: {
        category: 'Events'
      }
    },
    loading: {
      table: {
        category: 'State'
      },
      control: 'boolean',
      description: 'Is button loading?'
    },
    size: {
      description: 'Button size. Options are',
      options: Object.values(ButtonSize),
      table: {
        category: 'Styling',
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
      options: Object.values({ undefined, ...IconName }),
      table: {
        category: 'Icon'
      },
      control: {
        type: 'select'
      }
    },
    iconPos: {
      description: 'When icon present, position will be',
      options: Object.values(ButtonIconPosition),
      table: {
        category: 'Icon',
        defaultValue: {
          summary: 'Right'
        }
      },
      control: {
        type: 'select'
      }
    },
    negative: {
      control: 'boolean',
      description: 'Should this be a white button?',
      table: {
        category: 'Styling'
      }
    },
    disabled: {
      table: {
        category: 'State',
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean',
      description: 'Disable button'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Should this be a full width button, that will stretch to 100% of its wrapper?',
      table: {
        category: 'Styling'
      }
    },
    url: {
      control: 'text',
      description: 'Use this component as link or button with a simple URL, no click function needed'
    },
    selected: {
      description: 'Add classname of "active" to element',
      control: 'boolean',
      table: {
        category: 'Styling'
      }
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
      type: ButtonType.Submit,
      text: 'Link text',
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      negative: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false
    };
    break;

  case 'secondary':
    Button.args = {
      style: ButtonStyle.Secondary,
      text: 'Secondary',
      type: ButtonType.Submit,
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      negative: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false
    };
    break;

  case 'transparent':
    Button.args = {
      style: ButtonStyle.Transparent,
      text: 'Transparent',
      type: ButtonType.Submit,
      size: ButtonSize.Medium,
      iconPos: ButtonIconPosition.Right,
      loading: false,
      negative: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false
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
      negative: false,
      disabled: false,
      fullWidth: false,
      url: '',
      selected: false
    };
    break;
}
