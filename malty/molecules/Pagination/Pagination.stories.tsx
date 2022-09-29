import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination as PaginationComponent } from './Pagination';
import { PaginationProps, PaginationType } from './Pagination.types';

export default {
  title: 'Navigation/Pagination',
  component: PaginationComponent,
  parameters: {
    importObject: 'Pagination',
    importPath: '@carlsberggroup/malty.molecules.pagination',
    variants: ['default', 'compact', 'input']
  },
  argTypes: {
    onValueChange: {
      description: 'Function to be executed when page changes'
    },
    currentPage: {
      description: 'Current number of pagination',
      control: 'number'
    },
    count: {
      description: 'Total number of pages',
      control: 'number'
    },
    dataQaId: {
      control: 'text',
      description: 'Pagination data-testid',
      table: { defaultValue: { summary: 'none' } }
    },
    type: {
      description: 'type options for pagination',
      options: Object.keys(PaginationType),
      mapping: PaginationType,
      control: {
        type: 'select',
        label: Object.keys(PaginationType)
      },
      table: {
        defaultValue: {
          summary: 'PaginationType.Default'
        }
      }
    },
    isWhite: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      description: 'Changes color of component to white',
      control: 'boolean'
    },
    zeroBasedIndex: {
      description: 'if true the first page starts on 0',
      control: 'boolean'
    }
  }
} as Meta;

const Template: Story<PaginationProps> = (args) => {
  const { currentPage } = args;
  const [statePage, setStatePage] = useState(currentPage);

  return (
    <PaginationComponent
      {...args}
      onChange={(page) => {
        setStatePage(page);
      }}
      currentPage={statePage}
    />
  );
};

export const Pagination = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'compact':
    Pagination.args = {
      count: 10,
      currentPage: 1,
      type: PaginationType.Compact
    };
    break;
  case 'input':
    Pagination.args = {
      count: 10,
      currentPage: 1,
      type: PaginationType.Input
    };
    break;
  default:
    Pagination.args = {
      count: 10,
      currentPage: 1,
      type: PaginationType.Default
    };
    break;
}
