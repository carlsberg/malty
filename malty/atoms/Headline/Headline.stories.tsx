import { Story } from '@storybook/react';
import React from 'react';
import { Headline as HeadlineComponent } from './Headline';
import { Align, Color, HeadlineProps, Size } from './Headline.types';

export default {
  title: 'Atoms/Headline',
  component: HeadlineComponent,
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
      // options: Object.values(Size),
      description: 'Size of the text, from the following options',
      control: {
        type: null
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
const Template: Story<HeadlineProps> = ({ align, color, children }) => (
  <>
    <HeadlineComponent size={Size.Small} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent size={Size.Medium} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent size={Size.Large} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent size={Size.XLarge} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent size={Size.Huge} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent size={Size.Hero} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent size={Size.Display} align={align} color={color}>
      {children}
    </HeadlineComponent>
  </>
);
export const Headline = Template.bind({});

Headline.args = {
  color: Color.Primary,
  size: Size.Medium,
  align: Align.Left,
  children: 'This is a sample headline'
};
