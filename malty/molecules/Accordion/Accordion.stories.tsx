import { Story } from '@storybook/react';
import React from 'react';
import { AccordionColor, AccordionItem, AccordionProps, AccordionSize } from '.';
import { Accordion as AccordionComponent } from './Accordion';

export default {
  title: 'Layout/Accordion',
  component: AccordionComponent,
  subcomponents: { AccordionItem },
  parameters: {
    importObject: 'Accordion',
    importPath: '@carlsberggroup/malty.molecules.accordion',
    variants: ['support', 'transparent']
  },
  argTypes: {
    alwaysOpen: {
      description: 'Allow accordion items to stay open when another item is opened',
      control: 'boolean'
    },
    defaultActiveKey: {
      description: 'The default active key that is expanded on start'
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
    },
    dataQaId: {
      control: 'text',
      description: 'Accordion data-testid'
    }
  }
};
const Template: Story<AccordionProps> = (args) => (
  <>
    <AccordionComponent {...args}>
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

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');
const alwaysOpen = params.get('alwaysOpen');

export const Accordion = Template.bind({});

switch (variant) {
  case 'support':
    Accordion.args = {
      size: AccordionSize.Large,
      variant: AccordionColor.Support,
      alwaysOpen: !!alwaysOpen,
      defaultActiveKey: ['1']
    };
    break;

  default:
    Accordion.args = {
      size: AccordionSize.Large,
      variant: AccordionColor.Transparent,
      alwaysOpen: !!alwaysOpen,
      defaultActiveKey: ['1']
    };
    break;
}
