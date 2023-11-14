import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Icon } from './Icon';
import { IconColor, IconName, IconProps, IconSize } from './Icon.types';

const meta: Meta<IconProps> = {
  component: Icon,
  title: 'Icons/Multiple Icons',
  parameters: {
    importObject: 'CarlsbergFilled',
    importPath: '@carlsberggroup/malty.atoms.icon'
  },
  argTypes: {
    name: {
      name: 'names',
      description:
        'Icon name will define what icon is displayed. You can also see the icons, on the last story "All Icons"',
      options: Object.keys(IconName),
      mapping: IconName,
      control: {
        type: 'check',
        label: Object.values(IconName)
      },
      defaultValue: [IconName.CarlsbergFilled]
    },
    color: {
      description: 'Icon color, options are',
      options: Object.keys(IconColor),
      mapping: IconColor,
      control: {
        type: 'radio',
        label: Object.values(IconColor)
      },
      table: {
        defaultValue: {
          summary: 'IconColor.DigitalBlack'
        }
      },
      defaultValue: 'DigitalBlack'
    },
    size: {
      description: 'Icon size, options are',
      options: Object.keys(IconSize),
      mapping: IconSize,
      control: {
        type: 'radio',
        label: Object.values(IconSize)
      },
      table: {
        defaultValue: {
          summary: 'IconSize.Medium'
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
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<IconProps>;

export const Base: Story = {
  render: (args) => {
    if (Array.isArray(args.name)) {
      return (
        <div style={{ display: 'inline', margin: '10px' }}>
          {args.name.map((name) => (
            <Icon key={name} {...args} name={name} />
          ))}
        </div>
      );
    }
    return <Icon {...args} />;
  }
};

export default meta;
