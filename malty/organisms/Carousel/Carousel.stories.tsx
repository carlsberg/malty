import { Image } from '@carlsberggroup/malty.atoms.image';
import { ProductCard } from '@carlsberggroup/malty.molecules.product-card';
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
    variants: ['default', 'image'],
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
    negative: {
      description: 'If true, the carousel will have a negative style',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'false'
        }
      },
      control: 'boolean'
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
    gap: {
      description: 'The gap between the slides - Accepts any valid CSS value',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: 'none'
        }
      }
    },
    containerPaddingLeftAndRight: {
      description: 'Paddings left and right that will help positioning arrows - Accepts any valid CSS value',
      control: 'text',
      table: {
        category: 'Configuration',
        defaultValue: {
          summary: '0'
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
    },
    onVisible: {
      description: 'Callback function to be called when a slide becomes visible',
      table: {
        category: 'Events',
        defaultValue: {
          summary: 'none'
        }
      }
    }
  }
} as Meta;

const Template: Story<CarouselProps> = ({
  carouselSlide,
  breakpoints,
  negative,
  gap,
  perPage,
  containerPaddingLeftAndRight,
  dataTestId
}) => {
  return (
    <CarouselComponent
      carouselSlide={carouselSlide}
      breakpoints={breakpoints}
      negative={negative}
      gap={gap}
      perPage={perPage}
      containerPaddingLeftAndRight={containerPaddingLeftAndRight}
      dataTestId={dataTestId}
    />
  );
};

export const Carousel = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'image':
    Carousel.args = {
      carouselSlide: [
        {
          id: 1,
          slideComponent: <img src="https://random.imagecdn.app/1920/600" width="100%" />,
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
          slideComponent: <Image src="https://picsum.photos/id/50/1080/1080" height="300px" />,
          slideDataTestId: 'carousel3'
        }
      ],
      breakpoints: {},
      negative: false,
      gap: '1rem',
      perPage: 1,
      dataTestId: 'malty'
    };

    break;

  default:
    Carousel.args = {
      carouselSlide: [
        {
          id: 1,
          slideComponent: (
            <ProductCard
              imageSrc="https://picsum.photos/id/55/1920/1080"
              title="Product 1"
              dataTestId="product-card-1"
              sku="Sku: 12512 512"
              price={{ base: '₭ 99,800.00', discount: '₭ 86,000.00' }}
            />
          ),
          slideDataTestId: 'carousel-1'
        },
        {
          id: 2,
          slideComponent: (
            <ProductCard
              imageSrc="https://picsum.photos/id/80/1920/1080"
              title="Product 2"
              dataTestId="product-card-2"
              sku="Sku: 12512 515"
              price={{ base: '₭ 90,800.00' }}
            />
          ),
          slideDataTestId: 'carousel-2'
        },
        {
          id: 3,
          slideComponent: (
            <ProductCard
              imageSrc="https://picsum.photos/id/60/1920/1080"
              title="Product 3"
              dataTestId="product-card-3"
              sku="Sku: 12512 516"
              price={{ base: '₭ 19,800.00', discount: '₭ 6,000.00' }}
            />
          ),
          slideDataTestId: 'carousel-3'
        },
        {
          id: 4,
          slideComponent: (
            <ProductCard
              imageSrc="https://picsum.photos/id/50/1920/1080"
              title="Product 4"
              dataTestId="product-card-4"
              sku="Sku: 12512 517"
              price={{ base: '₭ 99,800.00', discount: '₭ 86,000.00' }}
            />
          ),
          slideDataTestId: 'carousel-4'
        },
        {
          id: 5,
          slideComponent: (
            <ProductCard
              imageSrc="https://picsum.photos/id/10/1920/1080"
              title="Product 5"
              dataTestId="product-card-5"
              sku="Sku: 12512 518"
              price={{ base: '₭ 59,800.00' }}
            />
          ),
          slideDataTestId: 'carousel-5'
        }
      ],
      breakpoints: {},
      negative: false,
      gap: '1rem',
      perPage: 3,
      containerPaddingLeftAndRight: '0',
      dataTestId: 'malty'
    };

    break;
}
