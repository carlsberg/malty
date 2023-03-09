/* eslint-disable react/destructuring-assignment */
import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconColor, IconName } from '@carlsberggroup/malty.atoms.icon';
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
      description: 'Product card Title',
      table: {
        category: 'Card Body'
      }
    },

    imageSrc: {
      control: 'text',
      description: 'Image to be displayed in the Product card',
      table: {
        category: 'Card Hero'
      }
    },
    productsCardsAlerts: {
      control: '',
      description: 'Array of alerts to be displayed in the Product card',
      table: {
        category: 'Card Body'
      }
    },

    maxQuantity: {
      control: 'number',
      description: 'Max quantity of the product',
      table: {
        category: 'Card Body'
      }
    },
    productCardStyle: {
      description: 'Product card style. Options are',
      options: Object.values(CardStyle),
      table: {
        category: 'Card config',
        defaultValue: {
          summary: 'CardStyle.Plain'
        }
      },
      control: {
        type: 'select'
      }
    },
    onProdcutClick: {
      control: ''
    },
    orientation: {
      description: 'Card orientation. Options are',
      options: Object.values(CardOrientation),
      table: {
        category: 'Card config',
        defaultValue: {
          summary: 'CardOrientation.Portrait'
        }
      },
      control: {
        type: 'select'
      }
    },
    favoriteIconColor: {
      description: 'Color for favorite icon',
      options: Object.values(IconColor),
      table: {
        category: 'Card config',
        defaultValue: {
          summary: 'IconColor.DigitalBlack'
        }
      },
      control: {
        type: 'select'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Product card data-testid',
      table: {
        category: 'Card config'
      }
    },
    imageHeight: {
      control: 'text',
      description: 'Sets the image height on Portrait',
      table: {
        category: 'Card Hero'
      }
    },
    imageWidth: {
      control: 'text',
      description: 'Sets the image width on Landscape',
      table: {
        category: 'Card Hero'
      }
    },
    sku: {
      control: 'text',
      description: 'Product sku',
      table: {
        category: 'Card Body'
      }
    },
    discountPill: {
      control: '',
      description: 'Object that defines the discount pill',
      table: {
        category: 'Card Hero'
      }
    },
    promoPill: {
      control: '',
      description: 'Object that defines the promo pill',
      table: {
        category: 'Card Hero'
      }
    },
    cartPill: {
      control: '',
      description: 'Object that defines the cart pill',
      table: {
        category: 'Card Hero'
      }
    },
    quantitySelectOptions: {
      description: 'Select options for quantity',
      table: {
        category: 'Card Body'
      }
    },
    hideQuantityInput: {
      control: 'boolean',
      description: 'Hides the quantity input',
      table: {
        category: 'Card Body'
      }
    },
    action: {
      control: '',
      description: `An Object that define what type of button it will appear in the Product Card:
    | {
        color: ButtonColor
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
      }`,
      table: {
        category: 'Card Body'
      }
    },
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
    },
    loyalty: {
      control: '',
      description: `An Object that defines loyalty label and icon:
    | {
        label: string;
        imageSrc: string;
      }`,
      table: {
        category: 'Card Body'
      }
    },
    price: {
      control: '',
      description: `An Object that defines the price label and style:
    | {
        label: string;
    color?: TextColor;
    style: TextStyle;
      }`,
      table: {
        category: 'Card Body'
      }
    },
    discountPrice: {
      control: '',
      description: `An Object that defines the discount price label and style:
    | {
        label: string;
    color?: TextColor;
    style: TextStyle;
      }`,
      table: {
        category: 'Card Body'
      }
    }
  }
} as Meta;

const Template: Story<ProductCardProps> = (args) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={args.orientation === CardOrientation.Portrait ? { maxWidth: '480px' } : { maxWidth: '680px' }}>
        <ProductCardComponent {...args} />
      </div>

      <div style={args.orientation === CardOrientation.Portrait ? { maxWidth: '480px' } : { maxWidth: '680px' }}>
        <ProductCardComponent
          productsCardsAlerts={[
            { message: 'Max order limit reached', color: AlertInlineColor.NotificationLight, firstActionText: 'Edit' }
          ]}
          {...args}
        />
      </div>
    </div>
  );
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
      dataTestId: 'Product-card',
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
      loyalty: { label: '+30', imageSrc: 'https://www.carlsberg.com/media/2249/favicon-32x32.png' },
      stock: { label: 'In Stock', stockColor: TextColor.Success },
      quantitySelectOptions: selectQuanityOptions,
      discountPill: { text: '20%', color: PillColor.alertStrong },
      promoPill: { text: 'Promo', color: PillColor.alertStrong, icon: IconName.Coupon },
      cartPill: { text: '2', color: PillColor.Success, icon: IconName.Cart },
      favoriteIconColor: IconColor.Primary,
      productsCardsAlerts: [
        { message: 'Max order limit reached', color: AlertInlineColor.NotificationLight, firstActionText: 'Edit' },
        { message: 'Max order limit: 5', color: AlertInlineColor.NotificationLight }
      ]
    };
    break;

  default:
    ProductCard.args = {
      title: 'This is an article card Title',
      imageSrc: 'https://picsum.photos/320/180',
      dataTestId: 'Product-card',
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
      loyalty: { label: '+30', imageSrc: 'https://www.carlsberg.com/media/2249/favicon-32x32.png' },
      stock: { label: 'In Stock', stockColor: TextColor.Success },
      quantitySelectOptions: selectQuanityOptions,
      discountPill: { text: '20%', color: PillColor.alertStrong },
      promoPill: { text: 'Promo', color: PillColor.alertStrong, icon: IconName.Coupon },
      cartPill: { text: '2', color: PillColor.Success, icon: IconName.Cart },
      favoriteIconColor: IconColor.Primary
    };
    break;
}