import { IconColor } from '@carlsberggroup/malty.atoms.base-icon';
import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { PillType } from '@carlsberggroup/malty.atoms.pill';
import { SelectOptionsType } from '@carlsberggroup/malty.atoms.select';
import { TextColor } from '@carlsberggroup/malty.atoms.text';
import { Cart } from '@carlsberggroup/malty.icons.cart';
import { Coupon } from '@carlsberggroup/malty.icons.coupon';
import { AlertInlineColor } from '@carlsberggroup/malty.molecules.alert-inline';
import { MRO } from '@carlsberggroup/malty.molecules.sku';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { ProductCardProps } from './ProductCard.types';

const ProductCardComponent = (args: ProductCardProps) => {
  const { actionQuantityInput, orientation } = args;
  const [stateValueComponent1, setStateValueComponent1] = useState(actionQuantityInput?.value || '0');
  const [stateValueComponent2, setStateValueComponent2] = useState(actionQuantityInput?.value || '0');

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div style={orientation === CardOrientation.Portrait ? { maxWidth: '480px' } : { maxWidth: '680px' }}>
        <ProductCard
          {...args}
          {...(actionQuantityInput && {
            actionQuantityInput: {
              ...actionQuantityInput,
              value: stateValueComponent1,
              onValueChange: setStateValueComponent1
            }
          })}
        />
      </div>

      <div style={orientation === CardOrientation.Portrait ? { maxWidth: '480px' } : { maxWidth: '680px' }}>
        <ProductCard
          {...args}
          productsCardsAlerts={[
            { message: 'Max order limit reached', color: AlertInlineColor.NotificationLight, firstActionText: 'Edit' }
          ]}
          {...(actionQuantityInput && {
            actionQuantityInput: {
              ...actionQuantityInput,
              value: stateValueComponent2,
              onValueChange: setStateValueComponent2
            }
          })}
        />
      </div>
    </div>
  );
};

const meta: Meta<ProductCardProps> = {
  component: ProductCard,
  title: 'Cards/ProductCard',
  parameters: {
    importObject: 'ProductCard',
    importPath: '@carlsberggroup/malty.molecules.product-card'
  },
  render: (args) => <ProductCardComponent {...args} />,
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
    productCardStyle: {
      description: 'Product card style. Options are',
      options: Object.values(CardStyle),
      table: {
        category: 'Card config'
      },
      control: 'select'
    },
    onProductClick: {
      control: ''
    },
    orientation: {
      description: 'Card orientation. Options are',
      options: Object.values(CardOrientation),
      table: {
        category: 'Card config'
      },
      control: 'select'
    },
    favoriteIconColor: {
      description: 'Color for favorite icon',
      options: Object.values(IconColor),
      table: {
        category: 'Card config'
      },
      control: 'select'
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
    mro: {
      description: 'Product MRO',
      table: {
        category: 'Card Body'
      },
      options: [undefined, ...Object.values(MRO)],
      control: {
        type: 'select',
        labels: {
          MANDATORY: 'Mandatory',
          RECOMMENDED: 'Recommended',
          OPTIONAL: 'Optional'
        }
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
    actionQuantityInput: {
      control: '',
      description:
        'An Object that define the properties of the quantity input that it will appear in the Product Quantity Actions',
      table: {
        category: 'Card Body'
      }
    },
    actionButton: {
      control: '',
      description: 'An Object that define what type of button it will appear in the Product Quantity Actions',
      table: {
        category: 'Card Body'
      }
    },
    stock: {
      control: '',
      description: 'An Object that defines the stock label and color',
      table: {
        category: 'Card Body'
      }
    },
    loyalty: {
      control: '',
      description: 'An Object that defines loyalty label and icon',
      table: {
        category: 'Card Body'
      }
    },
    price: {
      control: '',
      description: 'An Object that defines the price information:',
      table: {
        category: 'Card Body'
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ProductCardProps>;

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

export const Base: Story = {
  args: {
    title: 'This is an article card Title',
    imageSrc: 'https://picsum.photos/320/180',
    dataTestId: 'Product-card',
    actionButton: {
      color: ButtonColor.DigitalBlack,
      text: 'Add to cart',
      onClick: () => null,
      style: ButtonStyle.Primary,
      icon: <Cart />,
      loading: undefined,
      disabled: undefined
    },
    actionQuantityInput: {
      onValueChange: () => null,
      value: '3',
      min: undefined,
      max: undefined,
      readOnly: undefined
    },
    orientation: CardOrientation.Portrait,
    price: { base: '₭ 99,800.00', discount: '₭ 86,000.00' },
    sku: 'Sku: 12512 512',
    loyalty: { label: '+30', imageSrc: 'https://www.carlsberg.com/media/2249/favicon-32x32.png' },
    stock: { label: 'In Stock', stockColor: TextColor.Success },
    quantitySelectOptions: selectQuanityOptions,
    discountPill: { text: '20%', type: PillType.AlertStrong },
    promoPill: { text: 'Promo', type: PillType.AlertStrong, icon: <Coupon /> },
    cartPill: { text: '2', type: PillType.Success, icon: <Cart /> },
    favoriteIconColor: IconColor.Primary
  }
};

export const Landscape: Story = {
  args: {
    ...Base.args,
    orientation: CardOrientation.Landscape,
    productsCardsAlerts: [
      { message: 'Max order limit reached', color: AlertInlineColor.NotificationLight, firstActionText: 'Edit' },
      { message: 'Max order limit: 5', color: AlertInlineColor.NotificationLight }
    ]
  }
};

export const ReadOnly: Story = {
  args: {
    ...Base.args,
    actionButton: undefined,
    actionQuantityInput: {
      value: '3',
      readOnly: true
    }
  }
};

export default meta;
