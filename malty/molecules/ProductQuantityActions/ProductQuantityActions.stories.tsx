import { ButtonColor, ButtonStyle } from '@carlsberggbs/malty.atoms.button';
import { TextColor } from '@carlsberggbs/malty.atoms.text';
import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ProductQuantityActions } from './ProductQuantityActions';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

const ProductQuantityActionsComponent = ({ actionQuantityInput, ...props }: ProductQuantityActionsProps) => {
  const [stateValue, setStateValue] = useState(actionQuantityInput?.value || '0');
  return (
    <ProductQuantityActions
      {...props}
      {...(actionQuantityInput && {
        actionQuantityInput: { ...actionQuantityInput, value: stateValue, onValueChange: setStateValue }
      })}
    />
  );
};

const meta: Meta<ProductQuantityActionsProps> = {
  title: 'Information/ProductQuantityActions',
  component: ProductQuantityActions,
  parameters: {
    importObject: 'ProductQuantityActions',
    importPath: '@carlsberggbs/malty.molecules.product-quantity-actions'
  },
  render: (args) => <ProductQuantityActionsComponent {...args} />,
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
};

type Story = StoryObj<ProductQuantityActionsProps>;

export const Base: Story = {
  args: {
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
  }
};

export default meta;
