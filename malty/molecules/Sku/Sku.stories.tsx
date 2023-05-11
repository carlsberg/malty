/* eslint-disable react/destructuring-assignment */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Sku as SkuComponent } from './Sku';
import { MRO, SkuProps } from './Sku.types';

export default {
  title: 'Cards/Sku',
  component: SkuComponent,
  parameters: {
    importObject: 'Sku',
    importPath: '@carlsberggroup/malty.molecules.sku',
    variants: ['default']
  },
  argTypes: {
    sku: {
      control: 'text',
      description: 'Product sku'
    },
    mro: {
      description: 'Product MRO',
      options: [undefined, ...Object.values(MRO)],
      control: {
        type: 'select'
      }
    }
  }
} as Meta;

const Template: Story<SkuProps> = (args) => {
  return <SkuComponent {...args} />;
};

export const Sku = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  default:
    Sku.args = {
      sku: 'Sku: 12512 512',
      mro: undefined
    };
    break;
}
