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
      defaultValue: Color.Primary,
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
      defaultValue: Weight.Normal,
      control: {
        type: 'select'
      }
    },
    content: {
      control: { type: 'text' }
    }
  }
};
const Template: Story<TextProps> = (args: TextProps) => <Text {...args} />;

export const Main = Template.bind({});
Main.args = {
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem augue, cursus ac sem in, fringilla sagittis ligula. Curabitur viverra laoreet convallis. Nam mi tortor, pellentesque sollicitudin pretium in, lacinia ut nunc.'
} as TextProps;
