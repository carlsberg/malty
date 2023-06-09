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
    breakpoints: {
      description: 'Object of breakpoints for the carousel',
      control: 'object'
    },
    enableNegativeCarouselStyle: {
      description: 'If true, the carousel will have a negative style',
      control: 'boolean'
    },
    gapBetweenSliders: {
      description: 'The gap between the slides',
      control: 'number'
    },
    perPage: {
      description: 'The number of slides to be shown at once',
      control: 'number'
    },
    dataTestId: {
      description: 'Data test id for the carousel',
      control: 'text'
    }
  }
} as Meta;

const Template: Story<CarouselProps> = ({
  carouselSlide,
  autoHeight,
  breakpoints,
  dataTestId,
  enableNegativeCarouselStyle,
  gapBetweenSliders,
  perPage
}) => {
  return (
    <Carousel
      carouselSlide={carouselSlide}
      autoHeight={autoHeight}
      breakpoints={breakpoints}
      dataTestId={dataTestId}
      enableNegativeCarouselStyle={enableNegativeCarouselStyle}
      gapBetweenSliders={gapBetweenSliders}
      perPage={perPage}
    />
  );
};

export const Carousel = Template.bind({});

Carousel.args = {
  carouselSlide: [
    <div key="1" style={{ backgroundColor: 'red', height: '100%' }}>
      1
    </div>,
    <div key="2" style={{ backgroundColor: 'blue', height: '100%' }}>
      2
    </div>,
    <div key="3" style={{ backgroundColor: 'green', height: '100%' }}>
      3
    </div>,
    <div key="4" style={{ backgroundColor: 'yellow', height: '100%' }}>
      4
    </div>,
    <div key="5" style={{ backgroundColor: 'pink', height: '100%' }}>
      5
    </div>
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
  dataTestId: 'carousel'
};
