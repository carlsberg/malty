import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { ProductQuantityActions as ProductQuantityActionsComponent } from './ProductQuantityActions';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export default {
  title: 'Information/ProductQuantityActions',
  component: ProductQuantityActionsComponent,
  parameters: {
    importObject: 'ProductQuantityActions',
    importPath: '@carlsberggroup/malty.molecules.product-quantity-actions'
  },
  argTypes: {
    actionButton: {
      control: '',
      description: 'An Object that define what type of button it will appear in the Product Quantity Actions'
    },
    actionQuantityInput: {
      control: '',
      description:
        'An Object that define the properties of the quantity input that it will appear in the Product Quantity Actions'
    },
    stock: {
      control: '',
      description: 'An Object that defines the stock label, stock color, status color and availability:'
    },
    dataTestId: {
      description: 'Product Quantity Actions data-testid',
      control: 'text'
    },
    ...generateStorybookSpacing()
  }
} as Meta;

const Template: Story<ProductQuantityActionsProps> = ({ actionQuantityInput, ...args }) => {
  const [stateValue, setStateValue] = useState(actionQuantityInput?.value || '0');
  return (
    <ProductQuantityActionsComponent
      {...args}
      {...(actionQuantityInput && {
        actionQuantityInput: { ...actionQuantityInput, value: stateValue, onValueChange: setStateValue }
      })}
    />
  );
};

export const ProductQuantityActions = Template.bind({});

ProductQuantityActions.args = {
  stock: { label: 'In Stock', stockColor: TextColor.Success },
  actionButton: {
    color: ButtonColor.DigitalBlack,
    text: 'Add to cart',
    onClick: () => null,
    style: ButtonStyle.Primary,
    icon: undefined,
    loading: undefined,
    disabled: undefined
  },
  actionQuantityInput: {
    onValueChange: () => null,
    value: '3',
    min: undefined,
    max: undefined,
    readOnly: undefined
  }
};
