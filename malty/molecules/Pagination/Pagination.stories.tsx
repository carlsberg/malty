import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination as PaginationComponent } from './Pagination';
import { PaginationProps, PaginationType } from './Pagination.types';

export default {
  title: 'Navigation/Pagination',
  component: PaginationComponent,
  parameters: {
    importObject: 'Pagination',
    importPath: '@carlsberggroup/malty.molecules.pagination'
  },
  argTypes: {
    dataQaId: {
      control: 'text',
      description: '',
      table: { defaultValue: { summary: 'none' } }
    },
    type: {
      options: [PaginationType.default, PaginationType.compact],
      mapping: [PaginationType.default, PaginationType.compact],
      control: {
        type: 'select',
        labels: ['default', 'compact']
      }
    },
    isWhite: {
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      description: '',
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

Pagination.args = {
  count: 10,
  currentPage: 1
};
