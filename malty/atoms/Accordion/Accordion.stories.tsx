import { Story } from '@storybook/react';
import React from 'react';
import { AccordionColor, AccordionProps, AccordionSize } from '.';
import { Accordion as AccordionComponent } from './Accordion';
import { AccordionItem } from './AccordionItem';

export default {
  title: 'Forms/Accordion',
  component: AccordionComponent,
  subcomponents: { AccordionItem },
  parameters: {
    importObject: 'Accordion',
    importPath: '@carlsberggroup/malty.atoms.accordion'
  },
  argTypes: {
    size: {
      description: 'Accordion size. Options are',
      options: Object.values(AccordionSize),
      table: {
        defaultValue: {
          summary: 'AccordionSize.Medium'
        }
      },
      control: {
        type: 'select'
      }
    },
    variant: {
      description: 'Accordion variant, changes background color',
      options: Object.values(AccordionColor),
      table: {
        defaultValue: {
          summary: 'AccordionColor.Transparent'
        }
      },
      control: {
        type: 'select'
      }
    },
    children: {
      description: 'Pass in the children that will be rendered within the Accordion'
    }
  }
};
const Template: Story<AccordionProps> = ({ size, variant }) => (
  <>
    <AccordionComponent size={size} variant={variant}>
      <AccordionItem open title="Accordion title 1">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </AccordionItem>
      <AccordionItem title="Accordion title 2">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </AccordionItem>
    </AccordionComponent>
  </>
);
export const Accordion = Template.bind({});
Accordion.args = {
  size: AccordionSize.Medium,
  variant: AccordionColor.Transparent
};
