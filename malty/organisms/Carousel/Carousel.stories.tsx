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
    variants: ['negative']
  },
  argTypes: {}
} as Meta;

const Template: Story<CarouselProps> = (args) => {
  return <Carousel {...args} />;
};

export const Carousel = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');
