import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Story } from '@storybook/react';
import React from 'react';
import { Avatar as AvatarComponent } from './Avatar';
import { AvatarProps, AvatarSize } from './Avatar.types';

export default {
  title: 'Media/Avatar',
  component: AvatarComponent,
  parameters: {
    importObject: 'Avatar',
    importPath: '@carlsberggroup/malty.molecules.avatar'
  },
  argTypes: {
    profileImg: {
      description: 'The user profile image URL',
      control: {
        type: 'text'
      }
    },
    userName: {
      description: 'If profile image is not available the username initials will be displayed instead',
      control: {
        type: 'text'
      }
    },
    size: {
      description: 'Avatar size. Options are',
      options: Object.values(AvatarSize),
      table: {
        defaultValue: {
          summary: 'AvatarSize.Medium'
        }
      },
      control: {
        type: 'select'
      }
    },
    editable: {
      description: 'If true, avatar photo is editable',
      control: {
        type: 'boolean'
      }
    },
    loading: {
      description: 'If true, avatar shows loading indicator',
      control: {
        type: 'boolean'
      }
    },
    ...generateStorybookSpacing()
  }
};
const Template: Story<AvatarProps> = (args) => (
  <div style={{ width: '100px' }}>
    <AvatarComponent {...args} />
  </div>
);
export const Avatar = Template.bind({});

Avatar.args = {
  userName: 'John Doe',
  editable: false,
  loading: false
};
