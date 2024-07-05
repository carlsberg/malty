import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { TextAlign, TextColor, TextProps, TextStyle } from './Text.types';

const meta: Meta<TextProps> = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    importObject: 'Text',
    importPath: '@carlsberg/malty.atoms.text'
  },
  argTypes: {
    children: {
      description: 'This is the content of a text component',
      control: 'text'
    },
    textStyle: {
      description: 'Style of the text, from the following options',
      options: Object.keys(TextStyle),
      mapping: TextStyle,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: TextStyle.MediumDefault
        }
      }
    },
    align: {
      description: 'Text alignment, from the following options',
      options: Object.keys(TextAlign),
      mapping: TextAlign,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: TextAlign.Left
        }
      }
    },
    color: {
      description: 'Color of the text, from the following options',
      options: Object.keys(TextColor),
      mapping: TextColor,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: TextColor.DigitalBlack
        }
      }
    },
    italic: {
      description: 'Should text be italic?',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: false
        }
      },
      control: 'boolean'
    },
    ellipsis: {
      description: 'Should text be truncated?',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: false
        }
      },
      control: 'boolean'
    },
    width: {
      description: 'Width of text component',
      control: 'text',
      table: {
        category: 'Styling'
      }
    },
    as: {
      description: "HTML tag override to be used, from 'h1' through 'h6', as well as 'p' or 'span' tags.",
      control: { type: 'text' }
    },
    dataTestId: {
      control: 'text',
      description: 'Text data-testid'
    },
    className: {
      description: 'Add a classname to the component',
      control: 'text'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<TextProps>;

export const Base: Story = {
  args: {
    dataTestId: 'text',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lorem augue, cursus ac sem in, fringilla sagittis ligula. Curabitur viverra laoreet convallis. Nam mi tortor, pellentesque sollicitudin pretium in, lacinia ut nunc.'
  }
};

export default meta;
