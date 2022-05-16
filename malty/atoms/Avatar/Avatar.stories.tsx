import { Story } from '@storybook/react';
import React from 'react';
import { Avatar as AvatarComponent } from './Avatar';
import { AvatarProps, AvatarSize } from './Avatar.types';

export default {
  title: 'Atoms/Avatar',
  component: AvatarComponent,
  parameters: {
    importObject: 'Avatar',
    importPath: '@carlsberggroup/malty.atoms.avatar'
  },
  argTypes: {
    profileImg: {
      description: 'The user profile image URL',
      control: {
        type: 'text'
      }
    },
    username: {
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
    }
  }
};
const Template: Story<AvatarProps> = ({ profileImg, username, size, editable }) => (
  <div style={{ width: '100px' }}>
    <AvatarComponent profileImg={profileImg} username={username} size={size} editable={editable} />
  </div>
);
export const Avatar = Template.bind({});

Avatar.args = {
  username: 'John Doe',
  editable: false
};
