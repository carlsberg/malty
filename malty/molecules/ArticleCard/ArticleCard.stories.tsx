import { ButtonColor, ButtonStyle } from '@carlsberggbs/malty.atoms.button';
import { CardOrientation, CardStyle } from '@carlsberggbs/malty.atoms.card';
import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ArticleCard } from './ArticleCard';
import { ArticleCardProps } from './ArticleCard.types';

const ArticleCardComponent = ({ orientation, ...props }: ArticleCardProps) => {
  return (
    <div style={orientation === CardOrientation.Portrait ? { width: '320px' } : { width: '500px' }}>
      <ArticleCard {...props} />
    </div>
  );
};

const meta: Meta<ArticleCardProps> = {
  title: 'Cards/ArticleCard',
  component: ArticleCard,
  parameters: {
    importObject: 'ArticleCard',
    importPath: '@carlsberggbs/malty.molecules.article-card'
  },
  render: (args) => <ArticleCardComponent {...args} />,
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
      description: 'Date to be displayed in the article'
    },
    imageSrc: {
      control: 'text',
      description: 'Image to be displayed in the article'
    },
    cardStyle: {
      description: 'Card style. Options are',
      options: Object.values(CardStyle),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: CardStyle.Plain
        }
      },
      control: 'select'
    },
    onCardClick: {
      description: 'Function that will run when the card is clicked',
      control: 'none',
      table: {
        category: 'Events'
      }
    },
    orientation: {
      description: 'Card orientation. Options are',
      options: Object.values(CardOrientation),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: CardOrientation.Portrait
        }
      },
      control: 'select'
    },
    dataTestId: {
      control: 'text',
      description: 'Article card data-testid'
    },
    imageHeight: {
      control: 'text',
      description: 'Sets the image height on Portrait',
      table: {
        category: 'Styling'
      }
    },
    imageWidth: {
      control: 'text',
      description: 'Sets the image width on Landscape',
      table: {
        category: 'Styling'
      }
    },
    action: {
      control: '',
      description: `An Object that define what type of button it will appear in the Article Card:
    | {
        color: ButtonColor
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
      }`,
      table: {
        category: 'Events'
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ArticleCardProps>;

export const Base: Story = {
  args: {
    title: 'This is an article card Title',
    description: 'Nunc vitae feugiat ante, in suscipit sapien. Vivamus auctor porttitor ex. Suspendisse lorem odio.',
    date: '12/06/2022',
    imageSrc: 'https://picsum.photos/320/180',
    dataTestId: 'Article-card',
    action: { color: ButtonColor.DigitalBlack, label: 'Read More', onClick: () => null, variant: ButtonStyle.Primary },
    orientation: CardOrientation.Portrait,
    cardStyle: CardStyle.Plain
  }
};

export const Landscape: Story = {
  args: {
    ...Base.args,
    orientation: CardOrientation.Landscape
  }
};

export const Outlined: Story = {
  args: {
    ...Base.args,
    cardStyle: CardStyle.Outlined
  }
};

export const Shadowed: Story = {
  args: {
    ...Base.args,
    cardStyle: CardStyle.Shadowed
  }
};

export default meta;
