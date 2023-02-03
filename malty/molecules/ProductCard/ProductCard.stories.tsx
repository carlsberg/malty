import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProductCard as ProductCardComponent } from './ProductCard';
import { ProductCardProps } from './ProductCard.types';

export default {
  title: 'Cards/ProductCard',
  component: ProductCardComponent,
  parameters: {
    importObject: 'ProductCard',
    importPath: '@carlsberggroup/malty.molecules.product-card'
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
      description: 'product sku'
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
  const handleQuantity = () => {
    console.log('quantity');
  };
  const handleCard = () => {
    console.log('card');
  };
  return (
    // eslint-disable-next-line react/destructuring-assignment
    <div style={args.orientation === CardOrientation.Portrait ? { width: '320px' } : { width: '500px' }}>
      <ProductCardComponent {...args} onQuantityChange={handleQuantity} onCardClick={handleCard} />
    </div>
  );
};

export const ProductCard = Template.bind({});

ProductCard.args = {
  title: 'This is an article card Title',
  imageSrc: 'https://picsum.photos/320/180',
  dataTestId: 'Article-card',
  action: {
    color: ButtonColor.DigitalBlack,
    label: 'Read More',
    onClick: () => console.log('action'),
    variant: ButtonStyle.Primary
  },
  orientation: CardOrientation.Portrait,
  price: { label: '₭ 99,800.00', style: TextStyle.MediumSmallDefault },
  discountPrice: { label: '₭ 86,000.00', color: TextColor.AlertStrong, style: TextStyle.MediumSmallBold },
  sku: 'Sku: 12512 512',
  loyalty: { label: '+30', icon: IconName.AddContent }
};
