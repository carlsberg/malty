import { Story } from '@storybook/react';
import React from 'react';
import { Headline } from './Headline';
import { Align, Color, HeadlineProps, Size } from './Headline.types';

export default {
  title: 'Atoms/Headline',
  component: Headline,
  parameters: {
    importObject: 'Headline',
    importPath: '@carlsberggroup/malty.atoms.headline'
  },
  argTypes: {
    color: {
      options: Object.values(Color),
      description: 'Color of the text, from the following options',
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
      description: 'Size of the text, from the following options',
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
      description: 'Text alignment, from the following options',
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
    }
  }
};
const Template: Story<HeadlineProps> = ({ size, align, color, children }) => (
  <Headline size={size} align={align} color={color}>
    {children}
  </Headline>
);
export const Main = Template.bind({});
Main.args = {
  color: Color.Primary,
  size: Size.Medium,
  align: Align.Left,
  children: 'This is a sample headline'
};
