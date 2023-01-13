import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Table as TableComponent } from './Table';
import {
  TableHeaderAlignment,
  TableHeaderProps,
  TableProps,
  TableRowProps,
  TableSize,
} from './Table.types';

const headers: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name',
  },
  {
    header: 'Age',
    key: 'age',
  },
];
const headersCenter: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name',
    headerAlignment: TableHeaderAlignment.Center,
  },
  {
    header: 'Age',
    key: 'age',
    headerAlignment: TableHeaderAlignment.Center,
  },
];
const rows: TableRowProps[] = [
  {
    id: 1,
    name: 'Fitzgerald Moody',
    age: 35,
  },
  {
    id: 2,
    name: 'Liberty Bell',
    age: 66,
  },
  {
    id: 3,
    name: 'Clayton Carpenter',
    age: 25,
  },
  {
    id: 4,
    name: 'Halla Pugh',
    age: 31,
  },
  {
    id: 5,
    name: 'Jaquelyn Valenzuela',
    age: 52,
  },
  {
    id: 6,
    name: 'Kyra Mcknight',
    age: 23,
  },
  {
    id: 7,
    name: 'Naida Barlow',
    age: 52,
  },
  {
    id: 8,
    name: 'Amir Joyce',
    age: 26,
  },
  {
    id: 9,
    name: 'Lenore Dixon',
    age: 40,
  },
  {
    id: 10,
    name: 'Carla Velazquez',
    age: 29,
  },
  {
    id: 11,
    name: 'Quamar Petersen',
    age: 58,
  },
  {
    id: 12,
    name: 'Patrick Stout',
    age: 61,
  },
  {
    id: 13,
    name: 'Ian Rhodes',
    age: 33,
  },
  {
    id: 14,
    name: 'Wesley Simmons',
    age: 67,
  },
  {
    id: 15,
    name: 'Ivy Crawford',
    age: 47,
  },
];

export default {
  title: 'Data and Tables/Table',
  component: TableComponent,
  parameters: {
    importObject: 'Table',
    importPath: '@carlsberggroup/malty.organisms.table',
    variants: ['dnd', 'selection', 'empty', 'headersCenter'],
  },
  argTypes: {
    headers: {
      control: 'object',
      description:
        'The headers prop represents the order in which the headers should appear in the table. We expect an array of objects to be passed in, where key is the name of the key in a row object, and header is the name of the header.',
    },
    rows: {
      control: 'object',
      description:
        'The rows prop is where you provide us with a list of all the rows that you want to render in the table. The only hard requirement is that this is an array of objects, and that each object has a unique id field available on it.',
    },
    dataTestId: {
      control: 'text',
      description: 'Table data-testid',
    },
    paginationSize: {
      control: 'number',
      description: 'Number of rows to be displayed in a page',
    },
    totalPagesCount: {
      control: 'number',
      description: 'Number of total pages',
    },
    onRowClick: {
      description: '',
    },
    isDraggable: {
      control: 'boolean',
      description: 'If true Rows are draggable',
    },
    allowSelection: {
      control: 'boolean',
      description: 'If true Rows are selectable',
    },
    size: {
      description: 'Size for table rows',
      options: Object.keys(TableSize),
      mapping: TableSize,
      control: {
        type: 'select',
        label: Object.keys(TableSize),
      },
      table: {
        defaultValue: {
          summary: 'TableSize.Medium',
        },
      },
    },
  },
} as Meta;

const Template: Story<TableProps> = ({ ...args }) => <TableComponent {...args} />;

export const Table = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');
switch (variant) {
  case 'dnd':
    Table.args = {
      headers,
      rows,
      onRowClick: () => null,
      paginationSize: 12,
      className: '',
      isDraggable: true,
      size: TableSize.Medium,
      dataTestId: 'table',
      allowSelection: false,
    };
    break;
  case 'selection':
    Table.args = {
      headers,
      rows,
      onRowClick: () => null,
      paginationSize: 12,
      className: '',
      isDraggable: false,
      size: TableSize.Medium,
      dataTestId: 'table',
      allowSelection: true,
    };
    break;
  case 'empty':
    Table.args = {
      headers,
      rows: [],
      onRowClick: () => null,
      paginationSize: 12,
      className: '',
      isDraggable: false,
      size: TableSize.Medium,
      dataTestId: 'table',
      allowSelection: true,
    };
    break;
  case 'headersCenter':
    Table.args = {
      headers: headersCenter,
      rows,
      onRowClick: () => null,
      paginationSize: 12,
      className: '',
      isDraggable: false,
      size: TableSize.Large,
      dataTestId: 'table',
      allowSelection: false,
    };
    break;

  default:
    Table.args = {
      headers,
      rows,
      onRowClick: () => null,
      paginationSize: 12,
      className: '',
      isDraggable: false,
      size: TableSize.Medium,
      dataTestId: 'table',
      allowSelection: false,
    };
    break;
}
