import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { StockStatus as StockStatusComponent } from './StockStatus';
import { StockStatusProps } from './StockStatus.types';

enum StockStatusVariants {
  LowStock = 'lowStock',
  Availability = 'availability'
}

const TextColorSelector = {
  options: Object.keys(TextColor),
  mapping: TextColor,
  control: {
    type: 'select',
    label: Object.values(TextColor)
  }
};

export default {
  title: 'Information/StockStatus',
  component: StockStatusComponent,
  parameters: {
    importObject: 'StockStatus',
    importPath: '@carlsberggroup/malty.molecules.stock-status',
    variants: Object.values(StockStatusVariants)
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label of the stock status'
    },
    labelColor: {
      description: 'Color for the label text',
      ...TextColorSelector
    },
    stockColor: {
      description: 'Stock color',
      ...TextColorSelector
    },
    availability: {
      description: 'Text to add more information about when the stock will be available',
      control: 'text'
    },
    withMarginBottom: {
      description: 'In order to add a fix margin bottom',
      control: 'boolean'
    }
  }
} as Meta;

const Template: Story<StockStatusProps> = (args) => {
  return <StockStatusComponent {...args} />;
};

export const StockStatus = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case StockStatusVariants.LowStock:
    StockStatus.args = {
      label: 'Low Stock',
      stockColor: TextColor.Fail
    };
    break;
  case StockStatusVariants.Availability:
    StockStatus.args = {
      label: 'No Stock',
      stockColor: TextColor.AlertStrong,
      availability: 'Available: 12/03/2021'
    };
    break;
  default:
    StockStatus.args = {
      label: 'In stock',
      stockColor: TextColor.Success
    };
    break;
}
