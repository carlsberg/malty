import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Sku as SkuComponent } from './Sku';
import { MRO, SkuProps } from './Sku.types';

export default {
  title: 'Cards/Sku',
  component: SkuComponent,
  parameters: {
    importObject: 'Sku',
    importPath: '@carlsberggroup/malty.molecules.sku'
  },
  argTypes: {
    sku: {
      control: 'text',
      description: 'Product sku'
    },
    mro: {
      description: 'Product MRO',
      options: Object.values(MRO),
      control: {
        type: 'select',
        labels: {
          MANDATORY: 'Mandatory',
          RECOMMENDED: 'Recommended',
          OPTIONAL: 'Optional'
        }
      }
    }
  }
} as Meta;

const Template: Story<SkuProps> = (args) => {
  return <SkuComponent {...args} />;
};

export const Sku = Template.bind({});

Sku.args = {
  sku: 'Sku: 12512 512',
  mro: undefined
};
