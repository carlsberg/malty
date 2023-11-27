import { Text as TextComponent, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Overlay } from './Overlay';
import { OverlayProps } from './Overlay.types';

const meta: Meta<OverlayProps> = {
  component: Overlay,
  title: 'Overlays/Overlay',
  parameters: {
    importObject: 'Overlay',
    importPath: '@carlsberggroup/malty.atoms.overlay'
  },
  render: (args) => (
    <div style={{ height: '150px' }}>
      <Overlay {...args} />
    </div>
  ),
  argTypes: {
    isWhite: {
      description: 'Color for overlay. Is it white?',
      control: 'boolean'
    },
    zIndex: {
      description: 'Sets the z-order of the component',
      control: 'number'
    },
    content: {
      description: 'Use this prop to add some content to the component'
    },
    fixed: {
      description: 'Determines whether overlay should have fixed or absolute position. The default value is fixed',
      control: 'boolean'
    }
  }
};

type Story = StoryObj<OverlayProps>;

export const Base: Story = {
  args: {
    isWhite: false,
    zIndex: 0,
    fixed: true
  }
};

export const Content: Story = {
  args: {
    ...Base.args,
    content: <TextComponent textStyle={TextStyle.MediumBold}>This is some content!</TextComponent>
  }
};

export default meta;
