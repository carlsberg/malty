import { Headline, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { Story } from '@storybook/react';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { Card as CardComponent } from './Card';
import { CardOrientation, CardProps, CardStyle } from './Card.types';

export default {
  title: 'Cards/Card',
  component: CardComponent,

  parameters: {
    importObject: 'Card',
    importPath: '@carlsberggroup/malty.atoms.Card',
    backgrounds: { name: 'dark background', value: '#000', default: true },
    variants: ['shadowed', 'landscape', 'selected', 'onclick']
  },
  argTypes: {
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
    selected: {
      control: 'boolean',
      description: 'Selects the card'
    },
    onClick: {
      description: 'This is a function that will run on click. It is not a required property',
      table: {
        category: 'Events'
      }
    }
  }
};

// eslint-disable-next-line react/function-component-definition
const Template: Story<CardProps> = (args) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  return <CardComponent mx={theme.sizes['5xs'].value} {...args} />;
};

export const Card = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'shadowed':
    Card.args = {
      selected: false,
      cardStyle: CardStyle.Shadowed,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </div>
      ),
      onClick: undefined
    };
    break;

  case 'landscape':
    Card.args = {
      selected: false,
      cardStyle: CardStyle.Plain,
      orientation: CardOrientation.Landscape,
      cardHero: (
        <div style={{ display: 'flex', alignItems: 'stretch', flexDirection: 'column', width: '100%' }}>
          <Image src="https://placehold.co/300x180" />
        </div>
      ),
      cardBody: (
        <div>
          <Headline headlineStyle={HeadlineStyle.Large}>Title</Headline>
          <Text textStyle={TextStyle.MediumSmallBold}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </div>
      ),
      onClick: undefined
    };
    break;

  case 'selected':
    Card.args = {
      selected: true,
      cardStyle: CardStyle.Plain,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </div>
      ),
      onClick: undefined
    };
    break;

  case 'onclick':
    Card.args = {
      selected: false,
      cardStyle: CardStyle.Plain,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </div>
      ),
      onClick: () => alert("You've clicked the card!")
    };
    break;
  default:
    Card.args = {
      selected: false,
      cardStyle: CardStyle.Plain,
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Text>
        </div>
      ),
      onClick: undefined
    };
    break;
}
