import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Table as TableComponent } from './Table';
import { TableHeaderProps, TableProps, TableRowProps, TableSize } from './Table.types';

const headers: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name'
  },
  {
    header: 'Age',
    key: 'age'
  }
];
const rows: TableRowProps[] = [
  {
    id: '1',
    name: 'Fitzgerald Moody',
    age: 35
  },
  {
    id: '2',
    name: 'Liberty Bell',
    age: 66
  },
  {
    id: '3',
    name: 'Clayton Carpenter',
    age: 25
  },
  {
    id: '4',
    name: 'Halla Pugh',
    age: 31
  },
  {
    id: '5',
    name: 'Jaquelyn Valenzuela',
    age: 52
  },
  {
    id: '6',
    name: 'Kyra Mcknight',
    age: 23
  },
  {
    id: '7',
    name: 'Naida Barlow',
    age: 52
  },
  {
    id: '8',
    name: 'Amir Joyce',
    age: 26
  },
  {
    id: '9',
    name: 'Lenore Dixon',
    age: 40
  },
  {
    id: '10',
    name: 'Carla Velazquez',
    age: 29
  },
  {
    id: '11',
    name: 'Quamar Petersen',
    age: 58
  },
  {
    id: '12',
    name: 'Patrick Stout',
    age: 61
  },
  {
    id: '13',
    name: 'Ian Rhodes',
    age: 33
  },
  {
    id: '14',
    name: 'Wesley Simmons',
    age: 67
  },
  {
    id: '15',
    name: 'Ivy Crawford',
    age: 47
  },
  {
    id: '16',
    name: 'Ulric Foley',
    age: 67
  },
  {
    id: '17',
    name: 'Flavia Church',
    age: 8
  },
  {
    id: '18',
    name: 'Isaac Vance',
    age: 41
  },
  {
    id: '19',
    name: 'Ashton Church',
    age: 33
  },
  {
    id: '20',
    name: 'Yetta Vega',
    age: 31
  },
  {
    id: '21',
    name: 'Catherine Patrick',
    age: 9
  },
  {
    id: '22',
    name: 'Zephania Mooney',
    age: 9
  },
  {
    id: '23',
    name: 'Gay Roberson',
    age: 56
  },
  {
    id: '24',
    name: 'Dorian Armstrong',
    age: 48
  },
  {
    id: '25',
    name: 'Ginger Gibson',
    age: 18
  },
  {
    id: '26',
    name: 'Ulric Guerra',
    age: 59
  },
  {
    id: '27',
    name: 'Kevin Frazier',
    age: 13
  },
  {
    id: '28',
    name: 'Ori Graham',
    age: 43
  },
  {
    id: '29',
    name: 'Dylan Hubbard',
    age: 67
  },
  {
    id: '30',
    name: 'Callum Walton',
    age: 28
  },
  {
    id: '31',
    name: 'Cairo Solomon',
    age: 51
  },
  {
    id: '32',
    name: 'Vladimir Henderson',
    age: 27
  },
  {
    id: '33',
    name: 'Alec Medina',
    age: 15
  },
  {
    id: '34',
    name: 'fernando Rocha',
    age: 18
  },
  {
    id: '35',
    name: 'João Medina',
    age: 45
  },
  {
    id: '36',
    name: 'huni mehti',
    age: 84
  },
  {
    id: '36',
    name: 'john hades',
    age: 21
  },
  {
    id: '36',
    name: 'phill bones',
    age: 45
  }
];

export default {
  title: 'Information/Table',
  component: TableComponent,
  parameters: {
    importObject: 'Table',
    importPath: '@carlsberggroup/malty.organisms.table'
  },
  argTypes: {
    headers: {
      control: 'object',
      description:
        'The headers prop represents the order in which the headers should appear in the table. We expect an array of objects to be passed in, where key is the name of the key in a row object, and header is the name of the header.'
    },
    rows: {
      control: 'object',
      description:
        'The rows prop is where you provide us with a list of all the rows that you want to render in the table. The only hard requirement is that this is an array of objects, and that each object has a unique id field available on it.'
    },
    dataTestId: {
      control: 'text',
      description: 'Table data-testid'
    },
    onRowClick: {
      description: ''
    },
    size: {
      description: 'Size for table rows',
      options: Object.keys(TableSize),
      mapping: TableSize,
      control: {
        type: 'select',
        label: Object.keys(TableSize)
      },
      table: {
        defaultValue: {
          summary: 'TableSize.Medium'
        }
      }
    }
  }
} as Meta;

const Template: Story<TableProps> = ({ ...args }) => <TableComponent {...args} />;

export const Table = Template.bind({});

Table.args = {
  headers,
  rows,
  onRowClick: () => null
};
