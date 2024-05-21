import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Avatar } from './Avatar';
import { AvatarProps, AvatarSize } from './Avatar.types';

const meta: Meta<AvatarProps> = {
  title: 'Media/Avatar',
  component: Avatar,
  parameters: {
    importObject: 'Avatar',
    importPath: '@carlsberggroup/malty.molecules.avatar'
  },
  render: (args) => (
    <div style={{ width: '100px' }}>
      <Avatar {...args} />
    </div>
  ),
  argTypes: {
    profileImg: {
      description: 'The user profile image URL',
      control: 'text'
    },
    userName: {
      description: 'If profile image is not available the username initials will be displayed instead',
      control: 'text'
    },
    size: {
      description: 'Avatar size. Options are',
      options: Object.values(AvatarSize),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: AvatarSize.Medium
        }
      },
      control: 'select'
    },
    editable: {
      description: 'If true, avatar photo is editable',
      control: 'boolean'
    },
    loading: {
      description: 'If true, avatar shows loading indicator',
      control: 'boolean',
      table: {
        category: 'State'
      }
    },
    onClick: {
      description: 'Function that will run when the user clicks on the component',
      control: 'none',
      table: {
        category: 'Events'
      }
    },
    dataQaId: {
      control: 'text',
      description: 'Avatar data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<AvatarProps>;

export const Base: Story = {
  args: {
    userName: 'John Doe',
    editable: false,
    loading: false,
    size: AvatarSize.Medium,
    dataQaId: 'avatar'
  }
};

export const Loading: Story = {
  args: {
    ...Base.args,
    loading: true
  }
};

export const Editable: Story = {
  args: {
    ...Base.args,
    size: AvatarSize.XLarge,
    editable: true
  }
};

export default meta;
