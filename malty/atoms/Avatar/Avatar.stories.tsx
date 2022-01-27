import { Story } from '@storybook/react';
import React from 'react';
import { Avatar as AvatarComponent } from './Avatar';
import { AvatarProps } from './Avatar.types';

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
    fontSize: {
      description: 'Customize username initials font-size, default is 12px',
      control: {
        type: 'number'
      }
    }
  }
};
const Template: Story<AvatarProps> = ({ profileImg, username, fontSize }) => (
  <>
    <AvatarComponent profileImg={profileImg} username={username} fontSize={fontSize} />
  </>
);
export const Avatar = Template.bind({});

Avatar.args = {
  username: 'John Doe',
  fontSize: 14
};
