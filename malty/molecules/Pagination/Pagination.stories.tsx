import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination as PaginationComponent } from './Pagination';
import { PaginationProps } from './Pagination.types';

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
    }
  }
} as Meta;

const Template: Story<PaginationProps> = ({ count, currentPage }) => {
  const [statePage, setStatePage] = useState(currentPage);

  return (
    <PaginationComponent
      onChange={(page) => {
        setStatePage(page);
      }}
      count={count}
      currentPage={statePage}
    />
  );
};

export const Pagination = Template.bind({});

Pagination.args = {
  count: 10,
  currentPage: 1
};
