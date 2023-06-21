import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Table } from './Table';
import { TableHeaderProps, TableRowProps } from './Table.types';

const headers: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name'
  },
  {
    header: 'Age',
    key: 'age'
  },
  {
    header: '',
    key: 'actions',
    emptyHeader: true
  }
];
const rows: TableRowProps[] = [
  {
    id: '1',
    name: 'Aguila Restaurant',
    age: 70
  },
  {
    id: '2',
    name: 'Fitzgerald Moody',
    age: 35
  },
  {
    id: '3',
    name: 'Liberty Bell',
    age: 66,
    actions: <button>Delete</button>
  }
];
describe('table', () => {
  it('renders elements', () => {
    render(<Table rows={rows} headers={headers} dataTestId="table" />);

    const firstRow = screen.getAllByRole('row').slice(1)[0];

    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(firstRow).toHaveTextContent('Aguila Restaurant');
  });

  it('should render a table with default sorting', () => {
    render(<Table headers={headers} rows={rows} defaultSorting={{ id: 'name', desc: true }} />);

    const sortedRows = screen.getAllByRole('row').slice(1);

    expect(sortedRows[0]).toHaveTextContent('Liberty Bell');
    expect(sortedRows[1]).toHaveTextContent('Fitzgerald Moody');
    expect(sortedRows[2]).toHaveTextContent('Aguila Restaurant');
  });

  it('should call the onSortingChange prop when column title is clicked', () => {
    const onSortingChange = jest.fn();
    render(<Table headers={headers} rows={rows} onSortingChange={onSortingChange} />);

    const nameHeader = screen.getByText('Name');
    userEvent.click(nameHeader);

    expect(onSortingChange).toHaveBeenCalledWith([{ id: 'name', desc: false }]);
  });

  it('should render a table with two named column headers and an empty column header', () => {
    render(<Table headers={headers} rows={rows} defaultSorting={{ id: 'name', desc: true }} />);

    const columnHeaders = screen.getAllByRole('columnheader');

    expect(columnHeaders[0]).toHaveTextContent('Name');
    expect(columnHeaders[1]).toHaveTextContent('Age');
    expect(columnHeaders[2]).toHaveTextContent('');
  });
});
