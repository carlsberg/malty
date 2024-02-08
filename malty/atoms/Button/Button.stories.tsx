import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ButtonProps, ButtonSize } from '.';
import { Button as ButtonComponent } from './Button';
import { ButtonColor, ButtonIconPosition, ButtonStyle, ButtonType } from './Button.types';

const meta: Meta<ButtonProps> = {
  title: 'Forms/Button',
  component: ButtonComponent,
  render: (args) => <ButtonComponent {...args} />,
  parameters: {
    importObject: 'Button',
    importPath: '@carlsberggroup/malty.atoms.button',
    variants: ['primary', 'secondary', 'transparent']
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Button label, can be'
    },
    color: {
      description: 'Button color. Options are',
      options: Object.values(ButtonColor),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'ButtonColor.DigitalBlack'
        }
      },
      control: {
        type: 'select'
      }
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
      description: 'The icon component to be displayed',
      table: {
        category: 'Icon'
      },
      options: allIconsStoryOptions,
      control: 'select'
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
    },
    dataTestId: {
      control: 'text',
      description: 'Button data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ButtonProps>;

export const Base: Story = {
  args: {
    color: ButtonColor.DigitalBlack,
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
  }
};

export const Secondary: Story = {
  args: {
    color: ButtonColor.DigitalBlack,
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
  }
};

export const Transparent: Story = {
  args: {
    color: ButtonColor.DigitalBlack,
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
  }
};

export default meta;
