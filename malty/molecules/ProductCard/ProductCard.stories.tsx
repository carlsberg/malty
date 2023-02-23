import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { PillColor } from '@carlsberggroup/malty.atoms.pill';
import { SelectOptionsType } from '@carlsberggroup/malty.atoms.select';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { AlertInlineColor } from '@carlsberggroup/malty.molecules.alert-inline';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductCardProps } from './ProductCard.types';

export default {
  title: 'Cards/ProductCard',
  component: ProductCardComponent,
  parameters: {
    importObject: 'ProductCard',
    importPath: '@carlsberggroup/malty.molecules.product-card',
    variants: ['default', 'landscape']
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Product card Title'
    },

    imageSrc: {
      control: 'text',
      description: 'Image to be displayed in the Product card'
    },
    alertMessage: {
      control: 'text',
      description: 'Message to be displayed in the Inline Alert'
    },

    alertColor: {
      description: 'Inline alert color. Options are',
      options: Object.values(AlertInlineColor),
      table: {
        defaultValue: {
          summary: 'AlertInlineColor.NotificationLight'
        }
      },
      control: {
        type: 'select'
      }
    },
    maxQuantity: {
      control: 'number',
      description: 'Max quantity of the product'
    },
    style: {
      description: 'Card style. Options are',
      options: Object.values(CardStyle),
      table: {
        defaultValue: {
          summary: 'CardStyle.Plain'
        }
      },
      control: {
        type: 'select'
      }
    },
    onCardClick: {
      control: 'null'
    },
    orientation: {
      description: 'Card orientation. Options are',
      options: Object.values(CardOrientation),
      table: {
        defaultValue: {
          summary: 'CardOrientation.Portrait'
        }
      },
      control: {
        type: 'select'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Product card data-testid'
    },
    imageHeight: {
      control: 'text',
      description: 'Sets the image height on Portrait'
    },
    imageWidth: {
      control: 'text',
      description: 'Sets the image width on Landscape'
    },
    sku: {
      control: 'text',
      description: 'Product sku'
    },
    discountPill: {
      control: '',
      description: 'Object that defines the discount pill'
    },
    promoPill: {
      control: '',
      description: 'Object that defines the promo pill'
    },
    cartPill: {
      control: '',
      description: 'Object that defines the cart pill'
    },
    quantitySelectOptions: {
      description: 'Select options for quantity'
    },
    hideQuantityInput: {
      control: 'boolean',
      description: 'Hides the quantity input'
    },
    action: {
      control: '',
      description: `An Object that define what type of button it will appear in the Product Card:
    | {
        color: ButtonColor
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
      }`
    }
  }
} as Meta;

const Template: Story<ProductCardProps> = (args) => {
  return <ProductCardComponent {...args} />;
};

const selectQuanityOptions: SelectOptionsType[] = [
  {
    value: 'halfpack',
    name: 'Half-pack (12 bottles)'
  },
  {
    value: 'fullpack',
    name: 'full-pack (24 bottles)'
  }
];
export const ProductCard = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'landscape':
    ProductCard.args = {
      title: 'This is an article card Title',
      imageSrc: 'https://picsum.photos/320/180',
      dataTestId: 'Article-card',
      action: {
        color: ButtonColor.DigitalBlack,
        label: 'Add to cart',
        onClick: () => null,
        variant: ButtonStyle.Primary,
        icon: IconName.Cart
      },
      orientation: CardOrientation.Portrait,
      price: { label: '₭ 99,800.00', style: TextStyle.MediumSmallDefault },
      discountPrice: { label: '₭ 86,000.00', color: TextColor.AlertStrong, style: TextStyle.MediumSmallBold },
      sku: 'Sku: 12512 512',
      loyalty: { label: '+30', icon: IconName.AddContent },
      stock: { label: 'In Stock', stockColor: TextColor.Success },
      alertMessage: 'Max order limit: 5',
      quantitySelectOptions: selectQuanityOptions,
      discountPill: { text: '20%', color: PillColor.alertStrong },
      promoPill: { text: 'Promo', color: PillColor.alertStrong, icon: IconName.Coupon },
      cartPill: { text: '2', color: PillColor.Success, icon: IconName.Cart }
    };
    break;

  default:
    ProductCard.args = {
      title: 'This is an article card Title',
      imageSrc: 'https://picsum.photos/320/180',
      dataTestId: 'Article-card',
      action: {
        color: ButtonColor.DigitalBlack,
        label: 'Add to cart',
        onClick: () => null,
        variant: ButtonStyle.Primary,
        icon: IconName.Cart
      },
      orientation: CardOrientation.Portrait,
      price: { label: '₭ 99,800.00', style: TextStyle.MediumSmallDefault },
      discountPrice: { label: '₭ 86,000.00', color: TextColor.AlertStrong, style: TextStyle.MediumSmallBold },
      sku: 'Sku: 12512 512',
      loyalty: { label: '+30', icon: IconName.AddContent },
      stock: { label: 'In Stock', stockColor: TextColor.Success },
      alertMessage: 'Max order limit: 5',
      quantitySelectOptions: selectQuanityOptions,
      discountPill: { text: '20%', color: PillColor.alertStrong },
      promoPill: { text: 'Promo', color: PillColor.alertStrong, icon: IconName.Coupon },
      cartPill: { text: '2', color: PillColor.Success, icon: IconName.Cart }
    };
    break;
}
