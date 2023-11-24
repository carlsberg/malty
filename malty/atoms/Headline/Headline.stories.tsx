import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Story } from '@storybook/react';
import React from 'react';
import { Headline as HeadlineComponent } from './Headline';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

export default {
  title: 'Typography/Headline',
  component: HeadlineComponent,
  parameters: {
    importObject: 'Headline',
    importPath: '@carlsberggroup/malty.atoms.headline',
    themed: true
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
    },
    as: {
      description: "HTML tag override to be used, from 'h1' through 'h6', as well as 'p' or 'span' tags.",
      control: { type: 'text' }
    },
    ...generateStorybookSpacing()
  }
};
const Template: Story<HeadlineProps> = (args) => (
  <>
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.Display} />
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.Banner} />
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.Huge} />
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.Big} />
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.Large} />
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.MediumLarge} />
    <HeadlineComponent {...args} headlineStyle={HeadlineStyle.Medium} />
  </>
);
export const Headline = Template.bind({});

Headline.args = {
  children: 'This is a sample headline'
};
