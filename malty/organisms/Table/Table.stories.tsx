import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Table as TableComponent } from './Table';
import { TableHeaderProps, TableProps } from './Table.types';

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
const rows: Record<string, unknown>[] = [
  {
    name: 'Fitzgerald Moody',
    age: 35
  },
  {
    name: 'Liberty Bell',
    age: 66
  },
  {
    name: 'Clayton Carpenter',
    age: 25
  },
  {
    name: 'Halla Pugh',
    age: 31
  },
  {
    name: 'Jaquelyn Valenzuela',
    age: 52
  },
  {
    name: 'Kyra Mcknight',
    age: 23
  },
  {
    name: 'Naida Barlow',
    age: 52
  },
  {
    name: 'Amir Joyce',
    age: 26
  },
  {
    name: 'Lenore Dixon',
    age: 40
  },
  {
    name: 'Carla Velazquez',
    age: 29
  },
  {
    name: 'Quamar Petersen',
    age: 58
  },
  {
    name: 'Patrick Stout',
    age: 61
  },
  {
    name: 'Ian Rhodes',
    age: 33
  },
  {
    name: 'Wesley Simmons',
    age: 67
  },
  {
    name: 'Ivy Crawford',
    age: 47
  },
  {
    name: 'Ulric Foley',
    age: 67
  },
  {
    name: 'Flavia Church',
    age: 8
  },
  {
    name: 'Isaac Vance',
    age: 41
  },
  {
    name: 'Ashton Church',
    age: 33
  },
  {
    name: 'Yetta Vega',
    age: 31
  },
  {
    name: 'Catherine Patrick',
    age: 9
  },
  {
    name: 'Zephania Mooney',
    age: 9
  },
  {
    name: 'Gay Roberson',
    age: 56
  },
  {
    name: 'Dorian Armstrong',
    age: 48
  },
  {
    name: 'Ginger Gibson',
    age: 18
  },
  {
    name: 'Ulric Guerra',
    age: 59
  },
  {
    name: 'Kevin Frazier',
    age: 13
  },
  {
    name: 'Ori Graham',
    age: 43
  },
  {
    name: 'Dylan Hubbard',
    age: 67
  },
  {
    name: 'Callum Walton',
    age: 28
  },
  {
    name: 'Cairo Solomon',
    age: 51
  },
  {
    name: 'Vladimir Henderson',
    age: 27
  },
  {
    name: 'Alec Medina',
    age: 15
  },
  {
    name: 'Arsenio Farmer',
    age: 38
  },
  {
    name: 'Willa Weaver',
    age: 11
  },
  {
    name: 'Cadman Mueller',
    age: 59
  },
  {
    name: 'Fritz Shelton',
    age: 40
  },
  {
    name: 'Janna Cardenas',
    age: 45
  },
  {
    name: 'Macey Winters',
    age: 31
  },
  {
    name: 'Dieter England',
    age: 69
  },
  {
    name: 'Asher Battle',
    age: 32
  },
  {
    name: 'Beverly Pace',
    age: 13
  },
  {
    name: 'Ezekiel Jimenez',
    age: 60
  },
  {
    name: 'Dorian Alford',
    age: 25
  },
  {
    name: 'Imogene Juarez',
    age: 9
  },
  {
    name: 'Slade Higgins',
    age: 61
  },
  {
    name: 'Charlotte Sandoval',
    age: 53
  },
  {
    name: 'Lillian Hinton',
    age: 69
  },
  {
    name: 'Armando Pace',
    age: 2
  },
  {
    name: 'Lewis Middleton',
    age: 42
  }
];

export default {
  title: 'Information/Table',
  component: TableComponent,
  parameters: {
    importObject: 'Table',
    importPath: '@carlsberggroup/malty.organisms.table'
  },
  argTypes: {}
} as Meta;

const Template: Story<TableProps> = ({ ...args }) => <TableComponent {...args} />;

export const Table = Template.bind({});

Table.args = {
  headers,
  rows
};
