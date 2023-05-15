import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProductQuantityActions as ProductQuantityActionsComponent } from './ProductQuantityActions';
import { ProductQuantityActionsProps } from './ProductQuantityActions.types';

export default {
  title: 'Cards/ProductQuantityActions',
  component: ProductQuantityActionsComponent,
  parameters: {
    importObject: 'ProductQuantityActions',
    importPath: '@carlsberggroup/malty.molecules.ProductQuantityActions'
  },
  argTypes: {
    stock: {
      control: '',
      description: `An Object that defines the stock label and color:
    | {
        label: string;
        labelColor?: TextColor;
        stockColor?: TextColor;
      }`,
      table: {
        category: 'Card Body'
      }
    }
  }
} as Meta;

const Template: Story<ProductQuantityActionsProps> = (args) => {
  return <ProductQuantityActionsComponent {...args} />;
};

export const ProductQuantityActions = Template.bind({});

ProductQuantityActions.args = {
  stock: { label: 'In Stock', stockColor: TextColor.Success },
  action: {
    color: ButtonColor.DigitalBlack,
    label: 'Add to cart',
    onClick: () => null,
    variant: ButtonStyle.Primary,
    icon: IconName.Cart
  }
};
