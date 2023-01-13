import { render, screen } from '@testing-library/react';
import React from 'react';
import { Table } from './Table';
import { TableHeaderProps, TableRowProps } from './Table.types';

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
const rows: TableRowProps[] = [
  {
    id: '1',
    name: 'Fitzgerald Moody',
    age: 35,
  },
  {
    id: '2',
    name: 'Liberty Bell',
    age: 66,
  },
];
describe('table', () => {
  it('renders elements', () => {
    render(<Table rows={rows} headers={headers} dataTestId="table" />);
    expect(screen.getByTestId('table')).toBeInTheDocument();
  });
});
