import { Meta, Story } from '@storybook/react';
import React from 'react';
import dedent from 'ts-dedent';
import { Image, ImageProps } from '.';
import { Overlay, Position } from './Image.types';

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    importObject: 'Image',
    importPath: '@carlsberggroup/malty.atoms.image',
    docs: {
      description: {
        component: dedent`
          >###This is a themed component
          >To see the Theme menu, and be able to change the theme for the _MaltyThemeProvider_, please press the 'T' key on your keyboard, and the toolbar should appear above. For more details, or if this doesn't work, please read here.
          `
      }
    }
  },
  argTypes: {
    cover: {
      defaultValue: false,
      description:
        'Cover/contain CSS styles, please read more about it [here](https://css-tricks.com/almanac/properties/o/object-fit/).',
      control: 'boolean'
    },
    height: {
      required: false,
      description: "Image container's height",
      control: 'text'
    },
    width: {
      required: false,
      description: "Image container's width",
      control: 'text'
    },
    src: {
      description: 'URL of image',
      defaultValue: 'Required',
      required: true,
      control: 'text'
    },
    border: {
      options: [undefined, ...Object.values(Position)],
      description: 'Images can have a styled border side, the osition options are listed below',
      control: {
        type: 'select'
      }
    },
    gradient: {
      options: [undefined, ...Object.values(Position)],
      description:
        'Images can have a gradient overlay, the position options are listed below. Gradient will not work if overlay is defined.',
      control: {
        type: 'select'
      }
    },
    overlay: {
      options: [undefined, ...Object.values(Overlay)],
      description: 'This is the overlay opacity, it accepts number string as opacity percentage.',
      control: 'select'
    },
    children: {
      description:
        'You can nest elements within, they can be React, HTML or simply a string. On the dropdown you have examples.',
      table: {
        type: {
          summary: 'JSX.Element'
        }
      },
      control: {
        type: 'select',
        options: {
          'No children': [],
          'Example H1 tag': [<h1>This is an h1 tag</h1>]
        }
      }
    },
    alt: {
      control: 'text',
      description: 'Alt description of the image, for better a11y.'
    },
    url: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<ImageProps> = (args) => <Image {...args} />;

export const Main = Template.bind({});
Main.args = {
  src: 'https://via.placeholder.com/400',
  border: Position.Bottom,
  alt: 'This is a sample image'
};
