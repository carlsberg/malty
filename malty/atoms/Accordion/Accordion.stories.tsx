import { Story } from '@storybook/react';
import React from 'react';
import { AccordionColor, AccordionItem, AccordionProps, AccordionSize } from '.';
import { Accordion as AccordionComponent } from './Accordion';

export default {
  title: 'Forms/Accordion',
  component: AccordionComponent,
  subcomponents: { AccordionItem },
  parameters: {
    importObject: 'Accordion',
    importPath: '@carlsberggroup/malty.atoms.accordion'
  },
  argTypes: {
    alwaysOpen: {
      description: 'Allow accordion items to stay open when another item is opened',
      control: 'boolean'
    },
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
const Template: Story<AccordionProps> = ({ size, variant, alwaysOpen }) => (
  <>
    <AccordionComponent alwaysOpen={alwaysOpen} size={size} variant={variant}>
      <AccordionItem eventKey="1" title="Accordion title 1">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </AccordionItem>
      <AccordionItem eventKey="2" title="Accordion title 2">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
      </AccordionItem>
      <AccordionItem eventKey="3" title="Accordion title 3">
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
  size: AccordionSize.Large,
  variant: AccordionColor.Transparent,
  alwaysOpen: false
};
