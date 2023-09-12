import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { IconColor, IconName, IconProps, IconSize } from './Icon.types';

const meta: Meta<IconProps> = {
  component: Icon,
  title: 'Icons/Single Icon',
  parameters: {
    importObject: 'CarlsbergFilled',
    importPath: '@carlsberggroup/malty.atoms.icon',
    variants: Object.keys(IconName)
  },
  argTypes: {
    name: {
      options: Object.keys(IconName),
      mapping: IconName,
      control: {
        type: 'select',
        label: Object.values(IconName)
      },
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      table: {
        defaultValue: {
          summary: null
        }
      },
      defaultValue: IconName.CarlsbergFilled
    },
    color: {
      options: Object.keys(IconColor),
      mapping: IconColor,
      control: {
        type: 'radio',
        label: Object.values(IconColor)
      },
      description: 'Icon color, options are',
      table: {
        defaultValue: {
          summary: 'IconColor.DigitalBlack'
        }
      },
      defaultValue: IconColor.DigitalBlack
    },
    size: {
      options: Object.keys(IconSize),
      mapping: IconSize,
      control: {
        type: 'radio',
        label: Object.values(IconSize)
      },
      description: 'Icon size, options are',
      table: {
        defaultValue: {
          summary: IconSize.Medium
        }
      },
      defaultValue: 'Medium'
    },
    viewBox: {
      table: {
        disable: true
      }
    },
    onClick: {
      description: 'Function to run when icon is clicked.'
    }
  }
};

export default meta;

type Story = StoryObj<IconProps>;

const urlParams: URLSearchParams = new URLSearchParams(window.location.search);
const variant: IconName = urlParams.get('variant') as IconName;

export const Base: Story = {
  render: (args) => <Icon {...args} name={IconName[variant] ? variant : args.name} />
};
