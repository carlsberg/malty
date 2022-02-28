import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Overlay as OverlayComponent, OverlayProps } from '.';

export default {
  title: 'Overlays/Overlay',
  component: OverlayComponent,
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

const Template: Story<OverlayProps> = (args) => <OverlayComponent {...args} />;

export const Overlay = Template.bind({});
Overlay.args = {
  isWhite: false
};
