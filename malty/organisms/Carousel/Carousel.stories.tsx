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
    importPath: '@carlsberggroup/malty.organisms.Carousel'
  },
  argTypes: {
    carouselSlide: {
      description: 'Array of React components to be rendered as slides',
      control: 'array'
    },
    autoHeight: {
      description: 'If true, the height of the carousel will be set to the height of the tallest slide',
      control: 'boolean'
    },
    enableNegativeCarouselStyle: {
      description: 'If true, the carousel will have a negative style',
      control: 'boolean'
    },
    perPage: {
      description: 'The number of slides to be shown at once',
      control: 'number'
    },
    gapBetweenSliders: {
      description: 'The gap between the slides',
      control: 'text'
    },
    breakpoints: {
      description: 'Object of breakpoints for the carousel',
      control: 'object'
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
      dataTestId={dataTestId}
    />
  );
};

export const Carousel = Template.bind({});

Carousel.args = {
  carouselSlide: [
    {
      id: 1,
      slideComponent: <Image src="https://random.imagecdn.app/500/500" />,
      slideDataTestId: 'carousel'
    },
    {
      id: 2,
      slideComponent: <Image src="https://random.imagecdn.app/500/500" />,
      slideDataTestId: 'carousel2'
    }
  ],
  autoHeight: true,
  breakpoints: {
    640: {
      perPage: 1,
      gap: '1rem'
    },
    768: {
      perPage: 2,
      gap: '1rem'
    },
    1024: {
      perPage: 3,
      gap: '1rem'
    }
  },
  enableNegativeCarouselStyle: false,
  gapBetweenSliders: '1rem',
  perPage: 4,
  dataTestId: 'malty'
};
