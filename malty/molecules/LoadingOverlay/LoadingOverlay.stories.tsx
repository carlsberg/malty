import { LoadingColor } from '@carlsberggroup/malty.molecules.loading';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { LoadingOverlay } from './LoadingOverlay';
import { LoadingOverlayProps } from './LoadingOverlay.types';

const meta: Meta<LoadingOverlayProps> = {
  title: 'Overlays/LoadingOverlay',
  component: LoadingOverlay,
  parameters: {
    importObject: 'LoadingOverlay',
    importPath: '@carlsberggroup/malty.molecules.loading-overlay'
  },
  render: (args) => (
    <>
      <h1>Loading Overlay</h1>
      <div style={{ position: 'relative' }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum egestas ante, pretium viverra magna
          malesuada sed. Praesent rhoncus nulla pretium turpis egestas varius. Etiam efficitur leo nec elementum
          elementum. Donec malesuada tempus dui, eget tempus velit laoreet id. Sed id pretium odio. Quisque volutpat
          lacinia ante eget finibus. Nulla feugiat lacinia magna, quis varius metus interdum vel. Sed eget ipsum lectus.
          Nam vitae sem nibh. Vestibulum ultrices dapibus diam vel gravida. Fusce eu tellus neque. Nunc mollis dolor
          quam, at ornare lacus placerat eu. Phasellus et orci id urna accumsan mollis. Phasellus et orci id urna
          accumsan mollis. Ut efficitur purus a nisl congue, sit amet commodo tellus feugiat. Nullam in cursus turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rutrum egestas ante, pretium viverra magna
          malesuada sed. Praesent rhoncus nulla pretium turpis egestas varius. Etiam efficitur leo nec elementum
          elementum. Donec malesuada tempus dui, eget tempus velit laoreet id. Sed id pretium odio. Quisque volutpat
          lacinia ante eget finibus. Nulla feugiat lacinia magna, quis varius metus interdum vel. Sed eget ipsum lectus.
          Nam vitae sem nibh. Vestibulum ultrices dapibus diam vel gravida. Fusce eu tellus neque. Nunc mollis dolor
          quam, at ornare lacus placerat eu. Phasellus et orci id urna accumsan mollis. Ut efficitur purus a nisl
          congue, sit amet commodo tellus feugiat. Nullam in cursus turpis.
        </p>
        <LoadingOverlay {...args} />
      </div>
    </>
  ),
  argTypes: {
    text: {
      control: 'text',
      description: 'Set loading text'
    },
    overlayPositionFixed: {
      control: 'boolean',
      description: 'Toggle overlay component fixed position. If false, overlay component position is absolute',
      table: {
        category: 'Styling'
      }
    },
    zIndex: {
      control: 'number',
      description: 'Set component z-index',
      table: {
        category: 'Styling'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Set component data-testid'
    },
    color: {
      options: Object.values(LoadingColor),
      control: 'select',
      description: 'Set loading icon color',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: LoadingColor.DigitalBlack
        }
      }
    }
  }
};

type Story = StoryObj<LoadingOverlayProps>;

export const Base: Story = {
  args: {
    dataTestId: 'loading-overlay',
    text: 'Loading',
    overlayPositionFixed: false,
    color: LoadingColor.DigitalBlack
  }
};

export const AllPage: Story = {
  args: {
    ...Base.args,
    overlayPositionFixed: true
  }
};

export default meta;
