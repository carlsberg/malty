import { Story } from '@storybook/react';
import React from 'react';
import { Text } from './Text';
import { Align, Color, Size, TextProps, Weight } from './Text.types';

export default {
  title: 'Atoms/Text',
  component: Text,
  argTypes: {
    color: {
      options: Object.values(Color),
      defaultValue: Color.Default,
      control: {
        type: 'select'
      }
    },
    size: {
      options: Object.values(Size),
      defaultValue: Size.Medium,
      control: {
        type: 'select'
      }
    },
    align: {
      options: Object.values(Align),
      defaultValue: Align.Left,
      control: {
        type: 'select'
      }
    },
    weight: {
      options: Object.values(Weight),
      defaultValue: Weight.Regular,
      control: {
        type: 'select'
      }
    },
    children: {
      control: { type: 'text' }
    },
    underline: {
      defaultValue: false,
      control: { type: 'boolean' }
    },
    italic: {
      defaultValue: false,
      control: { type: 'boolean' }
    }
  }
};
const Template: Story<TextProps> = ({ size, weight, align, color, children, underline, italic }) => (
  <Text size={size} weight={weight} align={align} color={color} underline={underline} italic={italic}>
    {children}
  </Text>
);
export const Main = Template.bind({});
Main.args = {
  size: Size.Small,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem augue, cursus ac sem in, fringilla sagittis ligula. Curabitur viverra laoreet convallis. Nam mi tortor, pellentesque sollicitudin pretium in, lacinia ut nunc.'
};
