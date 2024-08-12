import { CarlsbergFilled } from '@carlsberg/malty.icons.carlsberg-filled';
import { allIconsStoryOptions } from '@carlsberg/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pill } from './Pill';
import { IconPosition, PillProps, PillSize, PillType } from './Pill.types';

const meta: Meta<PillProps> = {
  title: 'Information/Pill',
  component: Pill,
  parameters: {
    importObject: 'Pill',
    importPath: '@carlsberg/malty.atoms.pill'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Pill content text'
    },
    size: {
      description: 'Pill size, options below',
      options: Object.values(PillSize),
      control: 'select',
      table: {
        category: 'Styling'
      }
    },
    type: {
      description: 'Pill type',
      options: Object.values(PillType),
      mapping: PillType,
      control: 'select'
    },
    icon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select',
      table: {
        category: 'Icon',
        type: {
          summary: 'ReactElement | undefined'
        }
      }
    },
    iconPosition: {
      description: 'Icon position',
      options: ['leading', 'trailing'],
      control: 'radio',
      if: { arg: 'icon' },
      table: {
        category: 'Icon'
      }
    },
    isUppercase: {
      description: 'Use this property to uppercase the text content',
      control: 'boolean',
      table: {
        category: 'Styling'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Pill data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<PillProps>;

export const Base: Story = {
  args: {
    text: 'Text',
    type: PillType.Primary,
    size: PillSize.M,
    isUppercase: false
  }
};

export const OnlyIcon: Story = {
  args: {
    ...Base.args,
    icon: <CarlsbergFilled />,
    type: PillType.Success,
    text: ''
  }
};

export const TextWithLeadingIcon: Story = {
  args: {
    ...Base.args,
    icon: <CarlsbergFilled />,
    iconPosition: IconPosition.Leading,
    type: PillType.Alert
  }
};

export const TextWithTrailingIcon: Story = {
  args: {
    ...Base.args,
    icon: <CarlsbergFilled />,
    iconPosition: IconPosition.Trailing,
    type: PillType.Notification
  }
};

export default meta;
