/* eslint-disable react/destructuring-assignment */
import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { ProductQuantityActions as ProductQuantityActionsComponent } from './ProductQuantityActions';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export default {
  title: 'Cards/ProductQuantityActions',
  component: ProductQuantityActionsComponent,
  parameters: {
    importObject: 'ProductQuantityActions',
    importPath: '@carlsberggroup/malty.molecules.product-quantity-actions'
  },
  argTypes: {
    action: {
      control: '',
      description: `An Object that define what type of button it will appear in the Product Quantity Actions:
    | {
        color: ButtonColor
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
      }`
    },
    stock: {
      control: '',
      description: `An Object that defines the stock label, stock color, status color and availability:
    | {
        label: string;
        labelColor?: TextColor;
        stockColor?: TextColor;
        availability?: string;
      }`
    },
    hideQuantityInput: {
      description: 'Hides the quantity input',
      control: 'boolean'
    },
    maxQuantity: {
      description: 'Max quantity of the product',
      control: 'number'
    },
    dataTestId: {
      description: 'Product Quantity Actions data-testid',
      control: 'text'
    },
    value: {
      description: 'Quantity value',
      control: 'number'
    }
  }
} as Meta;

const Template: Story<ProductQuantityActionsProps> = (args) => {
  const [stateValue, setStateValue] = useState(args.value);
  const action = args.action ?? undefined;
  return (
    <ProductQuantityActionsComponent
      {...args}
      value={stateValue}
      onInputQuantityChange={setStateValue}
      action={action}
    />
  );
};

export const ProductQuantityActions = Template.bind({});

ProductQuantityActions.args = {
  stock: { label: 'In Stock', stockColor: TextColor.Success },
  action: {
    color: ButtonColor.DigitalBlack,
    label: 'Add to cart',
    onClick: () => null,
    variant: ButtonStyle.Primary
  },
  hideQuantityInput: false,
  value: 3
};
