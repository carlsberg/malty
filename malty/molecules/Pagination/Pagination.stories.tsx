import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Pagination as PaginationComponent } from './Pagination';
import { PaginationProps } from './Pagination.types';

export default {
  title: 'Molecules/Pagination',
  component: PaginationComponent,
  parameters: {
    importObject: 'Pagination',
    importPath: '@carlsberggroup/malty.atoms.pagination'
  },
  argTypes: {
    dataQaId: {
      control: 'text',
      description: '',
      table: { defaultValue: { summary: 'none' } }
    }
  }
} as Meta;

const Template: Story<PaginationProps> = ({ ...args }) => <PaginationComponent {...args} />;

export const Pagination = Template.bind({});

Pagination.args = {
  count: 10,
  currentPage: 1,
  // eslint-disable-next-line no-console
  onChange: (page) => console.log(page)
};
