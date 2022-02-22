import { Story } from '@storybook/react';
import React from 'react';
import { Headline as HeadlineComponent } from './Headline';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

export default {
  title: 'Typography/Headline',
  component: HeadlineComponent,
  parameters: {
    importObject: 'Headline',
    importPath: '@carlsberggroup/malty.atoms.headline'
  },
  argTypes: {
    color: {
      description: 'Color of the text, from the following options',
      options: Object.keys(HeadlineColor),
      mapping: HeadlineColor,
      control: {
        type: 'select',
        label: Object.values(HeadlineColor)
      },
      table: {
        defaultValue: {
          summary: 'HeadlineColor.DigitalBlack'
        }
      },
      defaultValue: 'DigitalBlack'
    },
    headlineStyle: {
      description: 'Size of the text, from the following options',
      control: {
        type: null
      },
      defaultValue: 'Medium'
    },
    align: {
      description: 'Text alignment, from the following options',
      options: Object.keys(HeadlineAlign),
      mapping: HeadlineAlign,
      control: {
        type: 'select',
        label: Object.values(HeadlineAlign)
      },
      table: {
        defaultValue: {
          summary: 'HeadlineAlign.Left'
        }
      },
      defaultValue: 'Left'
    },
    children: {
      description: 'This is the content of a headline component',
      control: { type: 'text' }
    }
  }
};
const Template: Story<HeadlineProps> = ({ align, color, children }) => (
  <>
    <HeadlineComponent headlineStyle={HeadlineStyle.Display} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent headlineStyle={HeadlineStyle.Hero} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent headlineStyle={HeadlineStyle.Huge} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent headlineStyle={HeadlineStyle.Big} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent headlineStyle={HeadlineStyle.Large} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent headlineStyle={HeadlineStyle.MediumLarge} align={align} color={color}>
      {children}
    </HeadlineComponent>
    <HeadlineComponent headlineStyle={HeadlineStyle.Medium} align={align} color={color}>
      {children}
    </HeadlineComponent>
  </>
);
export const Headline = Template.bind({});

Headline.args = {
  children: 'This is a sample headline'
};
