import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Overlay, OverlayProps } from '.';

export default {
  title: 'Atoms/Overlay',
  component: Overlay,
  argTypes: {
    isWhite: { control: 'boolean' },
    content: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<OverlayProps> = (args) => <Overlay {...args} />;

export const Main = Template.bind({});
Main.args = {
  isWhite: false
};
