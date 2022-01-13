import { Story } from '@storybook/react';
import React from 'react';
import { Text as TextComponent } from './Text';
import { Align, Color, Size, TextProps, Weight } from './Text.types';

export default {
  title: 'Atoms/Text',
  component: TextComponent,
  parameters: {
    importObject: 'Text',
    importPath: '@carlsberggroup/malty.atoms.text'
  },
  argTypes: {
    color: {
      options: Object.values(Color),
      description: 'Color of the headline, from the following options',
      control: {
        type: 'select'
      },
      table: {
        defaultValue: {
          summary: 'primary'
        }
      }
    },
    size: {
      options: Object.values(Size),
      description: 'Size of the headline, from the following options',
      control: {
        type: 'select'
      },
      table: {
        defaultValue: {
          summary: 'medium'
        }
      }
    },
    align: {
      options: Object.values(Align),
      description: 'Headline alignment, from the following options',
      control: {
        type: 'select'
      },
      table: {
        defaultValue: {
          summary: 'left'
        }
      }
    },
    children: {
      description: 'This is the content of a headline component',
      control: { type: 'text' }
    },
    weight: {
      options: Object.values(Weight),
      description: 'Weight of the typography.',
      table: { defaultValue: { summary: 'regular' } },
      control: {
        type: 'select'
      }
    },
    underline: {
      description: 'Should headline be underline?',
      table: { defaultValue: { summary: false } },
      control: { type: 'boolean' }
    },
    italic: {
      description: 'Should headline be italic?',
      table: { defaultValue: { summary: false } },
      control: { type: 'boolean' }
    }
  }
};
const Template: Story<TextProps> = ({ size, weight, align, color, children, underline, italic }) => (
  <TextComponent size={size} weight={weight} align={align} color={color} underline={underline} italic={italic}>
    {children}
  </TextComponent>
);

export const Text = Template.bind({});

Text.args = {
  size: Size.Small,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem augue, cursus ac sem in, fringilla sagittis ligula. Curabitur viverra laoreet convallis. Nam mi tortor, pellentesque sollicitudin pretium in, lacinia ut nunc.'
};
