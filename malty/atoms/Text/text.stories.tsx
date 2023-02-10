import { Story } from '@storybook/react';
import React from 'react';
import { Text as TextComponent } from './Text';
import { TextAlign, TextColor, TextProps, TextStyle } from './Text.types';

export default {
  title: 'Typography/Text',
  component: TextComponent,
  parameters: {
    importObject: 'Text',
    importPath: '@carlsberggroup/malty.atoms.text'
  },
  argTypes: {
    children: {
      description: 'This is the content of a text component',
      control: { type: 'text' }
    },
    textStyle: {
      description: 'Style of the text, from the following options',
      options: Object.keys(TextStyle),
      mapping: TextStyle,
      control: {
        type: 'select',
        label: Object.values(TextStyle)
      },
      defaultValue: 'MediumBold',
      table: {
        defaultValue: {
          summary: 'TextStyle.MediumDefault'
        }
      }
    },
    align: {
      description: 'Text alignment, from the following options',
      options: Object.keys(TextAlign),
      mapping: TextAlign,
      control: {
        type: 'select',
        label: Object.values(TextAlign)
      },
      defaultValue: 'Left',
      table: {
        defaultValue: {
          summary: 'TextAlign.Left'
        }
      }
    },
    color: {
      description: 'Color of the text, from the following options',
      options: Object.keys(TextColor),
      mapping: TextColor,
      control: {
        type: 'select',
        label: Object.values(TextColor)
      },
      defaultValue: 'DigitalBlack',
      table: {
        defaultValue: {
          summary: 'TextColor.DigitalBlack'
        }
      }
    },
    italic: {
      description: 'Should text be italic?',
      table: { defaultValue: { summary: false } },
      control: { type: 'boolean' }
    },
    ellipsis: {
      description: 'Should text be truncated?',
      table: { defaultValue: { summary: false } },
      control: { type: 'boolean' }
    },
    width: {
      description: 'Width of text component',
      control: { type: 'text' }
    },
    as: {
      description: "HTML tag override to be used, from 'h1' through 'h6', as well as 'p' or 'span' tags.",
      control: { type: 'text' }
    }
  }
};
const Template: Story<TextProps> = ({ textStyle, align, color, children, italic, ellipsis, width, className, as }) => (
  <TextComponent
    align={align}
    color={color}
    italic={italic}
    textStyle={textStyle}
    ellipsis={ellipsis}
    width={width}
    className={className}
    as={as}
  >
    {children}
  </TextComponent>
);

export const Text = Template.bind({});

Text.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem augue, cursus ac sem in, fringilla sagittis ligula. Curabitur viverra laoreet convallis. Nam mi tortor, pellentesque sollicitudin pretium in, lacinia ut nunc.'
};
