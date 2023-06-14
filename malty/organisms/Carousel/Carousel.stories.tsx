import { ButtonSize } from '@carlsberggroup/malty.atoms.button';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Carousel as CarouselComponent } from './Carousel';
import { CarouselProps } from './Carousel.types';

export default {
  title: 'Layout/Carousel',
  component: CarouselComponent,
  parameters: {
    importObject: 'Carousel',
    importPath: '@carlsberggroup/malty.organisms.Carousel',
    controls: {
      sort: 'requiredFirst'
    }
  },
  argTypes: {
    carouselSlide: {
      description: 'Array of React components to be rendered as slides',
      control: 'array',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    dataTestId: {
      description: 'Data test id for the carousel container',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'carousel-container-{YOUR_TEST_ID}'
        }
      }
    },
    autoHeight: {
      description: 'If true, the height of the carousel will be set to the height of the tallest slide',
      control: 'boolean',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: false
        }
      }
    },
    enableNegativeCarouselStyle: {
      description: 'If true, the carousel will have a negative style',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
    },
    arrowButtonSize: {
      description: 'Arrow Button size. Options are',
      options: Object.values(ButtonSize),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'ButtonSize.Medium'
        }
      },
      control: {
        type: 'select'
      }
    },
    perPage: {
      description:
        'The number of slides to be shown at once - This value should NOT be higher than the number of slides',
      control: 'number',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: '1'
        }
      }
    },
    perMove: {
      description: 'Determines the number of slides to move at once.',
      control: 'number',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: '1'
        }
      }
    },
    gapBetweenSliders: {
      description: 'The gap between the slides - Accepts any valid CSS value',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    breakpoints: {
      description: 'Object of breakpoints for the carousel',
      control: 'object',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    }
  }
} as Meta;

const Template: Story<CarouselProps> = ({
  carouselSlide,
  autoHeight,
  breakpoints,
  enableNegativeCarouselStyle,
  gapBetweenSliders,
  perPage,
  perMove,
  arrowButtonSize,
  dataTestId
}) => {
  return (
    <CarouselComponent
      carouselSlide={carouselSlide}
      autoHeight={autoHeight}
      breakpoints={breakpoints}
      enableNegativeCarouselStyle={enableNegativeCarouselStyle}
      gapBetweenSliders={gapBetweenSliders}
      perPage={perPage}
      perMove={perMove}
      arrowButtonSize={arrowButtonSize}
      dataTestId={dataTestId}
    />
  );
};

export const Carousel = Template.bind({});

Carousel.args = {
  carouselSlide: [
    {
      id: 1,
      slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
      slideDataTestId: 'carousel'
    },
    {
      id: 2,
      slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
      slideDataTestId: 'carousel2'
    },
    {
      id: 3,
      slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
      slideDataTestId: 'carousel3'
    },
    {
      id: 4,
      slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
      slideDataTestId: 'carousel'
    },
    {
      id: 5,
      slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
      slideDataTestId: 'carousel2'
    },
    {
      id: 6,
      slideComponent: <Image src="https://random.imagecdn.app/1920/800" height="300px" />,
      slideDataTestId: 'carousel3'
    }
  ],
  arrowButtonSize: ButtonSize.Medium,
  autoHeight: false,
  breakpoints: {},
  enableNegativeCarouselStyle: false,
  gapBetweenSliders: '1rem',
  perPage: 1,
  perMove: 1,
  dataTestId: 'malty'
};
