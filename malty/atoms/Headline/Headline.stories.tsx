import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Headline } from './Headline';
import { HeadlineAlign, HeadlineColor, HeadlineProps, HeadlineStyle } from './Headline.types';

const HeadlineComponent = (props: HeadlineProps) => {
  return (
    <>
      <Headline {...props} headlineStyle={HeadlineStyle.Display} />
      <Headline {...props} headlineStyle={HeadlineStyle.Banner} />
      <Headline {...props} headlineStyle={HeadlineStyle.Huge} />
      <Headline {...props} headlineStyle={HeadlineStyle.Big} />
      <Headline {...props} headlineStyle={HeadlineStyle.Large} />
      <Headline {...props} headlineStyle={HeadlineStyle.MediumLarge} />
      <Headline {...props} headlineStyle={HeadlineStyle.Medium} />
    </>
  );
};

const meta: Meta<HeadlineProps> = {
  title: 'Typography/Headline',
  component: Headline,
  render: (args) => <HeadlineComponent {...args} />,
  parameters: {
    importObject: 'Headline',
    importPath: '@carlsberggroup/malty.atoms.headline'
  },
  argTypes: {
    color: {
      description: 'Color of the text, from the following options',
      options: Object.keys(HeadlineColor),
      mapping: HeadlineColor,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: HeadlineColor.DigitalBlack
        }
      }
    },
    headlineStyle: {
      description: 'Size of the text',
      control: 'none',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: HeadlineStyle.Medium
        }
      }
    },
    align: {
      description: 'Text alignment, from the following options',
      options: Object.keys(HeadlineAlign),
      mapping: HeadlineAlign,
      control: {
        type: 'radio',
        label: Object.values(HeadlineAlign)
      },
      table: {
        category: 'Styling',
        defaultValue: {
          summary: HeadlineAlign.Left
        }
      }
    },
    children: {
      description: 'This is the content of a headline component',
      control: 'text'
    },
    as: {
      description: "HTML tag override to be used, from 'h1' through 'h6', as well as 'p' or 'span' tags.",
      control: 'text'
    },
    dataTestId: {
      control: 'text',
      description: 'Headline data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<HeadlineProps>;

export const Base: Story = {
  args: {
    children: 'This is a sample headline',
    align: HeadlineAlign.Left,
    color: HeadlineColor.ThemePrimary,
    headlineStyle: HeadlineStyle.Medium,
    dataTestId: 'headline'
  }
};

export default meta;
