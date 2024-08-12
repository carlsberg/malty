import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AccordionColor, AccordionItem, AccordionProps, AccordionSize } from '.';
import { Accordion } from './Accordion';

const AccordionComponent = (props: AccordionProps) => {
  return (
    <Accordion {...props}>
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
    </Accordion>
  );
};

const meta: Meta<AccordionProps> = {
  title: 'Layout/Accordion',
  component: Accordion,
  parameters: {
    importObject: 'Accordion',
    importPath: '@carlsberg/malty.molecules.accordion'
  },
  render: (args) => <AccordionComponent {...args} />,
  argTypes: {
    alwaysOpen: {
      description: 'Allow accordion items to stay open when another item is opened',
      control: 'boolean',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    defaultActiveKey: {
      description: 'The default active key that is expanded on start',
      table: {
        defaultValue: {
          summary: '[]'
        }
      }
    },
    size: {
      description: 'Accordion size. Options are',
      options: Object.values(AccordionSize),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: AccordionSize.Medium
        }
      },
      control: 'select'
    },
    variant: {
      description: 'Accordion variant, changes background color',
      options: Object.values(AccordionColor),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: AccordionColor.Transparent
        }
      },
      control: 'select'
    },
    children: {
      description: 'Pass in the children that will be rendered within the Accordion',
      table: {
        type: {
          summary: 'React.ReactElement<AccordionItemProps>[]'
        }
      }
    },
    dataQaId: {
      control: 'text',
      description: 'Accordion data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<AccordionProps>;

export const Base: Story = {
  args: {
    size: AccordionSize.Large,
    variant: AccordionColor.Transparent,
    alwaysOpen: false,
    defaultActiveKey: ['1'],
    dataQaId: 'accordion'
  }
};

export const Support: Story = {
  args: {
    ...Base.args,
    variant: AccordionColor.Support
  }
};

export default meta;
