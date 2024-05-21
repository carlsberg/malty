import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Image, ImageProps } from '.';
import { ImageEffectPosition, ImageOverlay } from './Image.types';

const meta: Meta<ImageProps> = {
  title: 'Media/Image',
  component: Image,
  parameters: {
    importObject: 'Image',
    importPath: '@carlsberggroup/malty.atoms.image'
  },
  argTypes: {
    cover: {
      description:
        'Cover/contain CSS styles, please read more about it [here](https://css-tricks.com/almanac/properties/o/object-fit/)',
      control: 'boolean',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: false
        }
      }
    },
    height: {
      description: "Image container's height",
      control: 'text',
      table: {
        category: 'Styling'
      }
    },
    width: {
      description: "Image container's width",
      control: 'text',
      table: {
        category: 'Styling'
      }
    },
    src: {
      description: 'URL of image',
      required: true,
      control: 'text'
    },
    fallbackSrc: {
      description: 'URL of fallback image',
      control: 'text'
    },
    border: {
      options: [undefined, ...Object.values(ImageEffectPosition)],
      description: 'Images can have a styled border side, the position options are listed below',
      control: 'select',
      table: {
        category: 'Styling'
      }
    },
    gradient: {
      options: [undefined, ...Object.values(ImageEffectPosition)],
      description:
        'Images can have a gradient overlay, the position options are listed below. Gradient will not work if overlay is defined',
      control: 'select',
      table: {
        category: 'Styling'
      }
    },
    overlay: {
      options: [undefined, ...Object.values(ImageOverlay)],
      description: 'This is the overlay opacity, it accepts number string as opacity percentage.',
      control: 'select',
      table: {
        category: 'Styling'
      }
    },
    children: {
      description:
        'You can nest elements within, they can be React, HTML or simply a string. On the dropdown you have examples.',
      options: ['No children', 'Example H1 tag', 'This is a simple string'],
      mapping: {
        'No children': undefined,
        'Example H1 tag': <h1>This is an h1 tag</h1>,
        'This is a simple string': 'This is a simple string'
      },
      control: 'select'
    },
    alt: {
      control: 'text',
      description: 'Alt description of the image, for better a11y.'
    },
    figcaption: {
      control: 'text',
      description: 'Caption or legend describing the rest of the contents'
    },
    className: {
      control: 'text',
      description: 'Add a classname to the container',
      table: {
        category: 'Styling'
      }
    },
    removeBackground: {
      control: 'boolean',
      description: '',
      table: {
        category: 'Styling'
      }
    },
    onClick: {
      description: 'This is a function that will run on click.',
      table: {
        category: 'Events'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Image data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ImageProps>;

export const Base: Story = {
  args: {
    src: 'https://via.placeholder.com/400',
    alt: 'This is a sample image',
    dataTestId: 'image'
  }
};

export const Fallback: Story = {
  args: {
    ...Base.args,
    fallbackSrc: 'https://via.placeholder.com/400'
  }
};

export const FigCaption: Story = {
  args: {
    ...Base.args,
    figcaption: 'This is a figcaption'
  }
};

export const TopBorder: Story = {
  args: {
    ...Base.args,
    border: ImageEffectPosition.Top
  }
};

export const RightBorder: Story = {
  args: {
    ...Base.args,
    border: ImageEffectPosition.Right
  }
};

export const LeftBorder: Story = {
  args: {
    ...Base.args,
    border: ImageEffectPosition.Left
  }
};

export const BottomBorder: Story = {
  args: {
    ...Base.args,
    border: ImageEffectPosition.Bottom
  }
};

export const TopGradient: Story = {
  args: {
    ...Base.args,
    gradient: ImageEffectPosition.Top
  }
};

export const RightGradient: Story = {
  args: {
    ...Base.args,
    gradient: ImageEffectPosition.Right
  }
};

export const LeftGradient: Story = {
  args: {
    ...Base.args,
    gradient: ImageEffectPosition.Left
  }
};

export const BottomGradient: Story = {
  args: {
    ...Base.args,
    gradient: ImageEffectPosition.Bottom
  }
};

export default meta;
