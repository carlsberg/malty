import { CarlsbergFilled } from '@carlsberggroup/malty.icons.carlsberg-filled';
import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Pill } from './Pill';
import { PillProps, PillSize, PillType } from './Pill.types';

const meta: Meta<PillProps> = {
  component: Pill,
  title: 'Information/Pill',
  parameters: {
    importObject: 'Pill',
    importPath: '@carlsberggroup/malty.atoms.pill'
  },
  render: (args) => <Pill {...args} />,
  argTypes: {
    text: {
      control: 'text',
      description: 'Pill content text'
    },
    size: {
      description: 'Pill size, options below',
      options: Object.values(PillSize),
      control: 'select'
    },
    type: {
      description: 'Pill type',
      options: Object.keys(PillType),
      mapping: PillType,
      control: 'select'
    },
    icon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select'
    },
    isUppercase: {
      description: 'Use this property to uppercase the text content',
      control: 'boolean'
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
