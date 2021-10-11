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
      control: {
        type: 'select'
      }
    },
    size: {
      options: Object.values(Size),
      control: {
        type: 'select'
      }
    },
    align: {
      options: Object.values(Align),
      control: {
        type: 'select'
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
