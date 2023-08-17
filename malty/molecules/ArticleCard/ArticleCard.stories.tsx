import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggroup/malty.atoms.card';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ArticleCard as ArticleCardComponent } from './ArticleCard';
import { ArticleCardProps } from './ArticleCard.types';

export default {
  title: 'Cards/ArticleCard',
  component: ArticleCardComponent,
  parameters: {
    importObject: 'ArticleCard',
    importPath: '@carlsberggroup/malty.molecules.article-card'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Article card Title'
    },
    description: {
      control: 'text',
      description: 'Article card description'
    },
    date: {
      control: 'text',
      description: 'date to be displayed in the article'
    },
    imageSrc: {
      control: 'text',
      description: 'Image to be displayed in the article'
    },
    cardStyle: {
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
      description: 'Article card data-testid'
    },
    imageHeight: {
      control: 'text',
      description: 'Sets the image height on Portrait'
    },
    imageWidth: {
      control: 'text',
      description: 'Sets the image width on Landscape'
    },
    action: {
      control: '',
      description: `An Object that define what type of button it will appear in the Article Card:
    | {
        color: ButtonColor
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
      }`
    }
  }
} as Meta;

const Template: Story<ArticleCardProps> = (args) => {
  const { orientation } = args;

  return (
    <div style={orientation === CardOrientation.Portrait ? { width: '320px' } : { width: '500px' }}>
      <ArticleCardComponent {...args} />
    </div>
  );
};

export const ArticleCard = Template.bind({});

ArticleCard.args = {
  title: 'This is an article card Title',
  description: 'Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio.',
  date: '12/06/2022',
  imageSrc: 'https://picsum.photos/320/180',
  dataTestId: 'Article-card',
  action: { color: ButtonColor.DigitalBlack, label: 'Read More', onClick: () => null, variant: ButtonStyle.Primary },
  orientation: CardOrientation.Portrait
};
