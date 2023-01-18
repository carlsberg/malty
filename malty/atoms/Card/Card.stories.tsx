import { Headline, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Image } from '@carlsberggroup/malty.atoms.image/Image';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Story } from '@storybook/react';
import React from 'react';
import { Card as CardComponent } from './Card';
import { CardOrientation, CardProps, CardStyle } from './Card.types';

export default {
  title: 'Cards/Card',
  component: CardComponent,

  parameters: {
    importObject: 'Card',
    importPath: '@carlsberggroup/malty.atoms.Card',
    backgrounds: { name: 'dark background', value: '#000', default: true },
  },
  argTypes: {
    style: {
      description: 'Card style. Options are',
      options: Object.values(CardStyle),
      table: {
        defaultValue: {
          summary: 'CardStyle.Plain',
        },
      },
      control: {
        type: 'select',
      },
    },
    orientation: {
      description: 'Card orientation. Options are',
      options: Object.values(CardOrientation),
      table: {
        defaultValue: {
          summary: 'CardOrientation.Portrait',
        },
      },
      control: {
        type: 'select',
      },
    },
    selected: {
      control: 'boolean',
      description: 'Selects the card',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the card',
    },
    onClick: {
      description: 'This is a function that will run on click. It is not a required property',
      table: {
        category: 'Events',
      },
    },
  },
};

// eslint-disable-next-line react/function-component-definition
const Template: Story<CardProps> = (args) => {
  return <CardComponent {...args} />;
};

export const Card = Template.bind({});

Card.args = {
  selected: false,
  disabled: false,
  style: CardStyle.Plain,
  orientation: CardOrientation.Portrait,
  cardHero: (
    <div style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'column', width: '100%' }}>
      <Image src="https://placehold.co/300x180" />
    </div>
  ),
  cardBody: (
    <div>
      <Headline headlineStyle={HeadlineStyle.Large}>Title</Headline>
      <Text textStyle={TextStyle.MediumSmallBold}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </Text>
    </div>
  ),
  onClick: undefined,
};
