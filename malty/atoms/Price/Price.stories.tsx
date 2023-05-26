import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Price as PriceComponent } from './Price';
import { PriceProps } from './Price.types';

export default {
  title: 'Information/Price',
  component: PriceComponent,
  parameters: {
    importObject: 'Price',
    importPath: '@carlsberggroup/malty.atoms.price',
    variants: ['default', 'discount', 'credit', 'free', 'reward']
  },
  argTypes: {
    base: {
      control: 'text',
      description: 'Default price'
    },
    discount: {
      control: 'text',
      description: 'Discount price or label (e.g. "FREE" or "REWARD"))'
    },
    credit: {
      control: 'text',
      description: 'Credit price'
    }
  }
} as Meta;

const Template: Story<PriceProps> = (args) => {
  return <PriceComponent {...args} />;
};

export const Price = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'default':
    Price.args = {
      base: '₭ 99,800.00',
      discount: '',
      credit: ''
    };
    break;
  case 'credit':
    Price.args = {
      base: '',
      discount: '',
      credit: '₭ 86,000.00'
    };
    break;
  case 'free':
    Price.args = {
      base: '',
      discount: 'FREE',
      credit: ''
    };
    break;
  case 'reward':
    Price.args = {
      base: '',
      discount: 'REWARD',
      credit: ''
    };
    break;
  case 'discount':
  default:
    Price.args = {
      base: '₭ 99,800.00',
      discount: '₭ 86,000.00',
      credit: ''
    };
    break;
}
