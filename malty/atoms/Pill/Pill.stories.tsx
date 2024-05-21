import { CarlsbergFilled } from '@carlsberggroup/malty.icons.carlsberg-filled';
import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pill } from './Pill';
import { PillProps, PillSize, PillType } from './Pill.types';

const meta: Meta<PillProps> = {
  title: 'Information/Pill',
  component: Pill,
  parameters: {
    importObject: 'Pill',
    importPath: '@carlsberggroup/malty.atoms.pill'
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
        category: 'Styling',
        defaultValue: {
          summary: PillSize.Medium
        }
      }
    },
    type: {
      description: 'Pill type',
      options: Object.keys(PillType),
      mapping: PillType,
      control: 'select',
      table: {
        defaultValue: {
          summary: PillType.Primary
        }
      }
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
    icon: <CarlsbergFilled />,
    type: PillType.Primary,
    size: PillSize.Medium,
    isUppercase: false
  }
};

export const Icon: Story = {
  args: {
    ...Base.args,
    type: PillType.Success,
    text: ''
  }
};

export const Text: Story = {
  args: {
    ...Base.args,
    type: PillType.Fail,
    icon: undefined
  }
};

export default meta;
