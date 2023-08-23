import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Table } from './Table';
import { TableHeaderProps, TableRowProps } from './Table.types';

const headers: TableHeaderProps[] = [
  {
    header: 'Name',
    key: 'name',
    sorting: true
  },
  {
    header: 'Age',
    key: 'age'
  },
  {
    header: 'Birthdate',
    key: 'birthdate',
    sorting: true,
    cell: (props) => {
      const date = props.getValue() as Date;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}/${month}/${day}`;
    }
  },
  {
    header: '',
    key: 'actions',
    isEmpty: true
  }
];
const rows: TableRowProps[] = [
  {
    id: '1',
    name: 'Aguila Restaurant',
    age: 70,
    birthdate: new Date(1953, 3, 20)
  },
  {
    id: '2',
    name: 'Fitzgerald Moody',
    age: 35,
    birthdate: new Date(1988, 5, 12)
  },
  {
    id: '3',
    name: 'Liberty Bell',
    age: 66,
    birthdate: new Date(1957, 6, 22)
  },
  {
    id: '4',
    name: 'Halla Pugh',
    age: 31,
    birthdate: new Date(1992, 2, 12)
  },
  {
    id: '5',
    name: 'Jaquelyn Valenzuela',
    age: 52,
    birthdate: new Date(1971, 4, 23)
  },
  {
    id: '6',
    name: 'Kyra Mcknight',
    age: 23,
    birthdate: new Date(2000, 3, 30)
  },
  {
    id: '7',
    name: 'Naida Barlow',
    age: 52,
    birthdate: new Date(1971, 1, 25)
  },
  {
    id: '8',
    name: 'Amir Joyce',
    age: 26,
    birthdate: new Date(1997, 7, 10)
  },
  {
    id: '9',
    name: 'Lenore Dixon',
    age: 40,
    birthdate: new Date(1983, 2, 22)
  },
  {
    id: '10',
    name: 'Carla Velazquez',
    age: 29,
    birthdate: new Date(1994, 5, 15)
  },
  {
    id: '11',
    name: 'Quamar Petersen',
    age: 58,
    birthdate: new Date(1965, 4, 27)
  },
  {
    id: '12',
    name: 'Frank Lemar',
    age: 46,
    birthdate: new Date(1922, 10, 4)
  },
  {
    id: '13',
    name: 'Patrick Stout',
    age: 61,
    birthdate: new Date(1923, 6, 7)
  }
];

describe('table', () => {
  it('should render elements', () => {
    render(<Table rows={rows} headers={headers} dataTestId="table" />);

    const firstRow = screen.getAllByRole('row').slice(1)[0];

    expect(screen.getByTestId('table')).toBeInTheDocument();
    expect(firstRow).toHaveTextContent('Aguila Restaurant');
  });

  it('should render a table with default sorting', () => {
    render(<Table headers={headers} rows={rows} defaultSorting={{ id: 'name', desc: true }} />);

    const sortedRows = screen.getAllByRole('row').slice(1);

    expect(sortedRows[0]).toHaveTextContent('Quamar Petersen');
    expect(sortedRows[1]).toHaveTextContent('Patrick Stout');
    expect(sortedRows[2]).toHaveTextContent('Naida Barlow');
  });

  it('should display sorting option for the first column', () => {
    render(<Table headers={headers} rows={rows} />);

    const { getByTestId } = within(screen.getAllByRole('columnheader')[0]);

    expect(getByTestId(`icon-${IconName.Sort}`)).toBeVisible();
  });

  it('should not display sorting option for the second column', () => {
    render(<Table headers={headers} rows={rows} />);

    const { queryByTestId } = within(screen.getAllByRole('columnheader')[1]);

    expect(queryByTestId(`icon-${IconName.Sort}`)).not.toBeInTheDocument();
  });

  it('should display sorting option for the third column', () => {
    render(<Table headers={headers} rows={rows} />);

    const { getByTestId } = within(screen.getAllByRole('columnheader')[2]);

    expect(getByTestId(`icon-${IconName.Sort}`)).toBeVisible();
  });

  it('should call the onSortingChange prop when column title is clicked', () => {
    const onSortingChange = jest.fn();
    render(<Table headers={headers} rows={rows} onSortingChange={onSortingChange} />);

    const nameHeader = screen.getByText('Name');
    userEvent.click(nameHeader);

    expect(onSortingChange).toHaveBeenCalledWith([{ id: 'name', desc: false }]);
  });

  it('should render a table with three named column headers and an empty column header', () => {
    render(<Table headers={headers} rows={rows} defaultSorting={{ id: 'name', desc: true }} />);

    const columnHeaders = screen.getAllByRole('columnheader');

    expect(columnHeaders[0]).toHaveTextContent('Name');
    expect(columnHeaders[1]).toHaveTextContent('Age');
    expect(columnHeaders[2]).toHaveTextContent('Birthdate');
    expect(columnHeaders[3]).toHaveTextContent('');
  });

  it('should render a table where the column date has the values formatted according to the method passed on the cell property in the column definition', () => {
    render(<Table headers={headers} rows={rows} />);

    const tableRows = screen.getAllByRole('row').slice(1);

    expect(tableRows[0]).toHaveTextContent('1953/4/20');
    expect(tableRows[1]).toHaveTextContent('1988/6/12');
    expect(tableRows[2]).toHaveTextContent('1957/7/22');
  });

  it('should sort the table by birthdate - from the recent one to the older one - by clicking once in the sorting icon', () => {
    render(<Table headers={headers} rows={rows} />);

    const { getByTestId } = within(screen.getAllByRole('columnheader')[2]);

    const sortingButton = getByTestId(`icon-${IconName.Sort}`);

    userEvent.click(sortingButton);

    const tableRows = screen.getAllByRole('row').slice(1);

    expect(tableRows[0]).toHaveTextContent('2000/4/30');
    expect(tableRows[1]).toHaveTextContent('1997/8/10');
    expect(tableRows[2]).toHaveTextContent('1994/6/15');
    expect(tableRows[tableRows.length - 1]).toHaveTextContent('1923/7/7');
  });

  it('should sort the table by birthdate - from the older one to the recent one - by clicking twice in the sorting icon', () => {
    render(<Table headers={headers} rows={rows} />);

    const { getByTestId } = within(screen.getAllByRole('columnheader')[2]);

    const defaultSortingButton = getByTestId(`icon-${IconName.Sort}`);

    userEvent.click(defaultSortingButton);

    const descSortingButton = getByTestId(`icon-${IconName.ArrowSmallDown}`);

    userEvent.click(descSortingButton);

    const tableRows = screen.getAllByRole('row').slice(1);

    expect(tableRows[0]).toHaveTextContent('1922/11/4');
    expect(tableRows[1]).toHaveTextContent('1923/7/7');
    expect(tableRows[2]).toHaveTextContent('1953/4/20');
    expect(tableRows[tableRows.length - 1]).toHaveTextContent('1997/8/10');
  });
});
