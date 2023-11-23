import { Headline, HeadlineStyle } from '@carlsberggroup/malty.atoms.headline';
import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';
import { CardOrientation, CardProps, CardStyle } from './Card.types';

const meta: Meta<CardProps> = {
  component: Card,
  title: 'Cards/Card',
  parameters: {
    importObject: 'Card',
    importPath: '@carlsberggroup/malty.atoms.card'
  },
  render: (args) => <Card {...args} />,
  argTypes: {
    cardStyle: {
      description: 'Card style. Options are',
      options: Object.values(CardStyle),
      control: 'select'
    },
    orientation: {
      description: 'Card orientation. Options are',
      options: Object.values(CardOrientation),
      control: 'select'
    },
    selected: {
      control: 'boolean',
      description: 'Selects the card'
    },
    onClick: {
      description: 'This is a function that will run on click. It is not a required property'
    },
    disabled: {
      control: 'boolean',
      description: 'Makes the card disabled'
    },
    dataTestId: {
      control: 'text',
      description: 'Set the component data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<CardProps>;

export const Base: Story = {
  args: {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </Text>
      </div>
    ),
    onClick: undefined,
    dataTestId: 'card-element',
    disabled: false
  }
};

export const Shadowed: Story = {
  args: {
    ...Base.args,
    cardStyle: CardStyle.Shadowed
  }
};

export const Landscape: Story = {
  args: {
    ...Base.args,
    orientation: CardOrientation.Landscape
  }
};

export const Selected: Story = {
  args: {
    ...Base.args,
    selected: true
  }
};

export const OnClick: Story = {
  args: {
    ...Base.args,
    onClick: () => alert("You've clicked the card!")
  }
};

export default meta;
