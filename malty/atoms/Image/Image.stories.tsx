import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Image as ImageComponent, ImageProps } from '.';
import { ImageEffectPosition, ImageOverlay } from './Image.types';

export default {
  title: 'Media/Image',
  component: ImageComponent,
  parameters: {
    importObject: 'Image',
    importPath: '@carlsberggroup/malty.atoms.image',
    variants: [
      'topborder',
      'rightborder',
      'bottomborder',
      'leftborder',
      'topgradient',
      'rightgradient',
      'bottomgradient',
      'leftgradient'
    ],
    themed: true
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
      options: [undefined, ...Object.values(ImageEffectPosition)],
      description: 'Images can have a styled border side, the osition options are listed below',
      control: {
        type: 'select'
      }
    },
    gradient: {
      options: [undefined, ...Object.values(ImageEffectPosition)],
      description:
        'Images can have a gradient overlay, the position options are listed below. Gradient will not work if overlay is defined.',
      control: {
        type: 'select'
      }
    },
    overlay: {
      options: [undefined, ...Object.values(ImageOverlay)],
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

const Template: Story<ImageProps> = (args) => <ImageComponent {...args} />;

export const Image = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'topborder':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      border: ImageEffectPosition.Top,
      alt: 'This is a sample image'
    };
    break;
  case 'rightborder':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      border: ImageEffectPosition.Right,
      alt: 'This is a sample image'
    };
    break;
  case 'bottomborder':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      border: ImageEffectPosition.Bottom,
      alt: 'This is a sample image'
    };
    break;
  case 'leftborder':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      border: ImageEffectPosition.Left,
      alt: 'This is a sample image'
    };
    break;
  case 'topgradient':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      gradient: ImageEffectPosition.Top,
      alt: 'This is a sample image'
    };
    break;
  case 'rightgradient':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      gradient: ImageEffectPosition.Right,
      alt: 'This is a sample image'
    };
    break;
  case 'bottomgradient':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      gradient: ImageEffectPosition.Bottom,
      alt: 'This is a sample image'
    };
    break;
  case 'leftgradient':
    Image.args = {
      src: 'https://via.placeholder.com/400',
      gradient: ImageEffectPosition.Left,
      alt: 'This is a sample image'
    };
    break;
  default:
    Image.args = {
      src: 'https://via.placeholder.com/400',
      border: ImageEffectPosition.Bottom,
      alt: 'This is a sample image'
    };
    break;
}
