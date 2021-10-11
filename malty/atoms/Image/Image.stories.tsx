import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Image, ImageProps } from '.';
import { Overlay, Position } from './Image.types';

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    importObject: 'Image',
    importPath: '@carlsberggroup/malty.atoms.image'
  },
  argTypes: {
    cover: {
      defaultValue: false,
      control: 'boolean'
    },
    height: {
      required: false,
      control: 'text'
    },
    width: {
      required: false,
      control: 'text'
    },
    src: {
      description: 'URL of image',
      defaultValue: '',
      required: true,
      control: 'text'
    },
    border: {
      options: [undefined, ...Object.values(Position)],
      description: 'Position options are listed below',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    gradient: {
      options: [undefined, ...Object.values(Position)],
      description: 'Position options are listed below. Gradient will not work if overlay is defined.',
      defaultValue: '',
      control: {
        type: 'select'
      }
    },
    overlay: {
      options: [undefined, ...Object.values(Overlay)],
      description: 'This accepts number string as opacity percentage.',
      control: 'select',
      defaultValue: ''
    },
    children: {
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
    alt: { control: 'text' },
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
