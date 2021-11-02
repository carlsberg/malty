import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Overlay, OverlayProps } from '.';

export default {
  title: 'Atoms/Overlay',
  component: Overlay,
  parameters: {
    importObject: 'Overlay',
    importPath: '@carlsberggroup/malty.atoms.overlay'
  },
  argTypes: {
    isWhite: {
      description: 'Color for overlay. Is it white?',
      control: 'boolean'
    },
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
