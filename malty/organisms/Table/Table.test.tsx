import { render } from '@carlsberg/malty.utils.test';
import { RowSelectionState } from '@tanstack/react-table';
import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
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
    birthdate: new Date(1953, 3, 20),
    selected: true,
    disabled: true
  },
  {
    id: '2',
    name: 'Fitzgerald Moody',
    age: 35,
    birthdate: new Date(1988, 5, 12),
    selected: true,
    disabled: false
  },
  {
    id: '3',
    name: 'Liberty Bell',
    age: 66,
    birthdate: new Date(1957, 6, 22),
    selected: false,
    disabled: true
  },
  {
    id: '4',
    name: 'Halla Pugh',
    age: 31,
    birthdate: new Date(1992, 2, 12),
    selected: false,
    disabled: false
  },
  {
    id: '5',
    name: 'Jaquelyn Valenzuela',
    age: 52,
    birthdate: new Date(1971, 4, 23),
    selected: false,
    disabled: false
  },
  {
    id: '6',
    name: 'Kyra Mcknight',
    age: 23,
    birthdate: new Date(2000, 3, 30),
    selected: false,
    disabled: false
  },
  {
    id: '7',
    name: 'Naida Barlow',
    age: 52,
    birthdate: new Date(1971, 1, 25),
    selected: false,
    disabled: false
  },
  {
    id: '8',
    name: 'Amir Joyce',
    age: 26,
    birthdate: new Date(1997, 7, 10),
    selected: false,
    disabled: false
  },
  {
    id: '9',
    name: 'Lenore Dixon',
    age: 40,
    birthdate: new Date(1983, 2, 22),
    selected: false,
    disabled: false
  },
  {
    id: '10',
    name: 'Carla Velazquez',
    age: 29,
    birthdate: new Date(1994, 5, 15),
    selected: false,
    disabled: false
  },
  {
    id: '11',
    name: 'Quamar Petersen',
    age: 58,
    birthdate: new Date(1965, 4, 27),
    selected: false,
    disabled: false
  },
  {
    id: '12',
    name: 'Frank Lemar',
    age: 46,
    birthdate: new Date(1922, 10, 4),
    selected: false,
    disabled: false
  },
  {
    id: '13',
    name: 'Patrick Stout',
    age: 61,
    birthdate: new Date(1923, 6, 7),
    selected: true,
    disabled: true
  }
];

const getRows = (arr: TableRowProps[], state: string): RowSelectionState => {
  return arr.reduce((acc: RowSelectionState, curr) => {
    if (curr[state]) acc[`${curr.id}`] = true;
    return acc;
  }, {});
};

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

    expect(getByTestId('sort-icon')).toBeVisible();
  });

  it('should not display sorting option for the second column', () => {
    render(<Table headers={headers} rows={rows} />);

    const { queryByTestId } = within(screen.getAllByRole('columnheader')[1]);

    expect(queryByTestId('sort-icon')).not.toBeInTheDocument();
  });

  it('should display sorting option for the third column', () => {
    render(<Table headers={headers} rows={rows} />);

    const { getByTestId } = within(screen.getAllByRole('columnheader')[2]);

    expect(getByTestId('sort-icon')).toBeVisible();
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

    const sortingButton = getByTestId('sort-icon');

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

    const defaultSortingButton = getByTestId('sort-icon');

    userEvent.click(defaultSortingButton);

    const descSortingButton = getByTestId('desc-icon');

    userEvent.click(descSortingButton);

    const tableRows = screen.getAllByRole('row').slice(1);

    expect(tableRows[0]).toHaveTextContent('1922/11/4');
    expect(tableRows[1]).toHaveTextContent('1923/7/7');
    expect(tableRows[2]).toHaveTextContent('1953/4/20');
    expect(tableRows[tableRows.length - 1]).toHaveTextContent('1997/8/10');
  });

  it('should render pagination information correctly', () => {
    render(<Table headers={headers} rows={rows} />);

    expect(screen.getByText('1 - 12 of 13')).toBeVisible();
    expect(screen.getByRole('spinbutton', { name: 'Page 1' })).toBeVisible();
  });

  it('should display the LoadingOverlay component when the property isLoading is set to true', () => {
    render(
      <Table headers={headers} rows={rows} isLoading dataTestId="table" loadingOverlayProps={{ text: 'Loading' }} />
    );

    expect(screen.getByTestId('table-loading-overlay')).toBeVisible();
    expect(screen.getByText('Loading')).toBeVisible();
  });

  it('should not display the LoadingOverlay component when the property isLoading is not set to true', () => {
    render(<Table headers={headers} rows={rows} dataTestId="table" />);

    expect(screen.queryByTestId('table-loading-overlay')).not.toBeInTheDocument();
    expect(screen.queryByText('Loading')).not.toBeInTheDocument();
  });

  describe('Table Pagination', () => {
    const firstPageItems = rows.slice(0, 10);
    const secondPageItems = rows.slice(10);
    const firstPageRowsSelectedArray = firstPageItems.filter((item) => item.selected);
    const secondPageRowsSelectedArray = secondPageItems.filter((item) => item.selected);
    const firstPageRowsDisabledArray = firstPageItems.filter((item) => item.disabled);
    const secondPageRowsDisabledArray = secondPageItems.filter((item) => item.disabled);

    describe('Automatic pagination', () => {
      it('should render first 10 elements correctly and ignore the rest', () => {
        render(<Table headers={headers} rows={rows} paginationSize={10} />);

        const tableRows = screen.getAllByRole('row').slice(1);

        expect(tableRows).toHaveLength(10);
      });

      it('should render rest of elements after clicking on next page arrow', () => {
        render(<Table headers={headers} rows={rows} paginationSize={10} />);

        expect(screen.getByRole('spinbutton', { name: 'Page 1' })).toBeVisible();

        userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

        expect(screen.getByRole('spinbutton', { name: 'Page 2' })).toBeVisible();
        secondPageItems.forEach((row) => {
          expect(screen.getByRole('cell', { name: row.name as string })).toBeVisible();
        });

        firstPageItems.forEach((row) => {
          expect(screen.queryByRole('cell', { name: row.name as string })).not.toBeInTheDocument();
        });
      });

      it('should render the first page with the first two rows selected by default, and after clicking on next page arrow, should render the second page with the first row selected by default', () => {
        const defaultSelectedRows: RowSelectionState = getRows(rows, 'selected');

        render(
          <Table headers={headers} rows={rows} allowSelection rowSelection={defaultSelectedRows} dataTestId="table" />
        );

        firstPageRowsSelectedArray.forEach((selectedRow) => {
          expect(
            within(screen.getByTestId(`table-row-${selectedRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeChecked();
        });

        userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

        secondPageRowsSelectedArray.forEach((selectedRow) => {
          expect(
            within(screen.getByTestId(`table-row-${selectedRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeChecked();
        });
      });

      it('should render the first page with the first and third rows disabled by default, and after clicking on next page arrow, should render the second page with the first row disabled by default', () => {
        const defaultDisabledRows: RowSelectionState = getRows(rows, 'disabled');

        render(
          <Table
            headers={headers}
            rows={rows}
            allowSelection
            rowSelectionDisabled={defaultDisabledRows}
            dataTestId="table"
          />
        );

        firstPageRowsDisabledArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeDisabled();
        });

        userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

        secondPageRowsDisabledArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeDisabled();
        });
      });

      it('should keep the default checked/unchecked state of the disabled rows after clicking on the check/uncheck all checkbox', () => {
        const defaultDisabledRows: RowSelectionState = getRows(rows, 'disabled');
        const defaultSelectedRows: RowSelectionState = getRows(rows, 'selected');
        const firstPageRowsDisabledAndSelectedArray = firstPageItems.filter((item) => item.disabled && item.selected);
        const firstPageRowsDisabledAndNotSelectedArray = firstPageItems.filter(
          (item) => item.disabled && !item.selected
        );

        render(
          <Table
            headers={headers}
            rows={rows}
            allowSelection
            rowSelection={defaultSelectedRows}
            rowSelectionDisabled={defaultDisabledRows}
            dataTestId="table"
          />
        );

        firstPageRowsDisabledAndSelectedArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeChecked();
        });

        firstPageRowsDisabledAndNotSelectedArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).not.toBeChecked();
        });

        const checkAllCheckbox = within(screen.getByTestId('table-tr-0')).getByRole('checkbox', { hidden: true });

        userEvent.click(checkAllCheckbox);
        userEvent.click(checkAllCheckbox);

        firstPageRowsDisabledAndSelectedArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeChecked();
        });

        firstPageRowsDisabledAndNotSelectedArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).not.toBeChecked();
        });
      });
    });

    describe('Manual pagination', () => {
      it('should render second page items successfully after clicking on next page arrow', () => {
        const TableComponent = () => {
          const [tableRows, setTableRows] = useState(firstPageItems);
          const [pageIndex, setPageIndex] = useState(0);

          const handleOnPaginationChange = (page: number) => {
            setPageIndex(page - 1);
            setTableRows([...tableRows, ...secondPageItems]);
          };

          return (
            <Table
              headers={headers}
              rows={tableRows}
              paginationIndex={pageIndex}
              paginationSize={10}
              manualPagination={{ totalPagesCount: 2, totalRecords: 13 }}
              onPaginationChange={handleOnPaginationChange}
            />
          );
        };

        render(<TableComponent />);

        expect(screen.getByRole('spinbutton', { name: 'Page 1' })).toBeVisible();
        secondPageItems.forEach((row) => {
          expect(screen.queryByRole('cell', { name: row.name as string })).not.toBeInTheDocument();
        });

        userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

        expect(screen.getByRole('spinbutton', { name: 'Page 2' })).toBeVisible();
        secondPageItems.forEach((row) => {
          expect(screen.getByRole('cell', { name: row.name as string })).toBeVisible();
        });
      });

      it('should update pageIndex and items from outside successfully', () => {
        const TableComponent = () => {
          const [tableRows, setTableRows] = useState(firstPageItems);
          const [pageIndex, setPageIndex] = useState(0);

          const handleOnClick = () => {
            setTableRows([...tableRows, ...secondPageItems]);
            setPageIndex(1);
          };

          return (
            <div>
              <button type="submit" onClick={handleOnClick}>
                Increase page from outside
              </button>
              <Table
                headers={headers}
                rows={tableRows}
                paginationIndex={pageIndex}
                paginationSize={10}
                manualPagination={{ totalPagesCount: 2, totalRecords: 13 }}
              />
            </div>
          );
        };

        render(<TableComponent />);

        expect(screen.getByRole('spinbutton', { name: 'Page 1' })).toBeVisible();
        secondPageItems.forEach((row) => {
          expect(screen.queryByRole('cell', { name: row.name as string })).not.toBeInTheDocument();
        });

        userEvent.click(screen.getByText('Increase page from outside'));

        expect(screen.getByRole('spinbutton', { name: 'Page 2' })).toBeVisible();

        secondPageItems.forEach((row) => {
          expect(screen.getByRole('cell', { name: row.name as string })).toBeVisible();
        });
      });

      it('should render the first page with the first two rows selected by default, and after clicking on next page arrow, should render the second page with the first row selected by default', () => {
        const firstPageRowsSelected: RowSelectionState = getRows(firstPageRowsSelectedArray, 'selected');
        const secondPageRowsSelected: RowSelectionState = getRows(secondPageRowsSelectedArray, 'selected');

        const TableComponent = () => {
          const [tableRows, setTableRows] = useState(firstPageItems);
          const [pageIndex, setPageIndex] = useState(0);
          const [rowSelection, setRowSelection] = useState<RowSelectionState>(firstPageRowsSelected);

          const handleOnPaginationChange = (page: number) => {
            setPageIndex(page - 1);
            setTableRows([...tableRows, ...secondPageItems]);
            setRowSelection(secondPageRowsSelected);
          };

          return (
            <Table
              headers={headers}
              rows={tableRows}
              allowSelection
              rowSelection={rowSelection}
              paginationIndex={pageIndex}
              paginationSize={10}
              dataTestId="table"
              manualPagination={{ totalPagesCount: 2, totalRecords: 13 }}
              onPaginationChange={handleOnPaginationChange}
            />
          );
        };

        render(<TableComponent />);

        firstPageRowsSelectedArray.forEach((selectedRow) => {
          expect(
            within(screen.getByTestId(`table-row-${selectedRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeChecked();
        });

        userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

        secondPageRowsSelectedArray.forEach((selectedRow) => {
          expect(
            within(screen.getByTestId(`table-row-${selectedRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeChecked();
        });
      });

      it('should render the first page with the first and third rows disabled by default, and after clicking on next page arrow, should render the second page with the first row disabled by default', () => {
        const firstPageRowsDisabled: RowSelectionState = getRows(firstPageRowsDisabledArray, 'disabled');
        const secondPageRowsDisabled: RowSelectionState = getRows(secondPageRowsDisabledArray, 'disabled');

        const TableComponent = () => {
          const [tableRows, setTableRows] = useState(firstPageItems);
          const [pageIndex, setPageIndex] = useState(0);
          const [rowSelectionDisabled, setRowSelectionDisabled] = useState<RowSelectionState>(firstPageRowsDisabled);

          const handleOnPaginationChange = (page: number) => {
            setPageIndex(page - 1);
            setTableRows([...tableRows, ...secondPageItems]);
            setRowSelectionDisabled(secondPageRowsDisabled);
          };

          return (
            <Table
              headers={headers}
              rows={tableRows}
              allowSelection
              rowSelectionDisabled={rowSelectionDisabled}
              paginationIndex={pageIndex}
              paginationSize={10}
              dataTestId="table"
              manualPagination={{ totalPagesCount: 2, totalRecords: 13 }}
              onPaginationChange={handleOnPaginationChange}
            />
          );
        };

        render(<TableComponent />);

        firstPageRowsDisabledArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeDisabled();
        });

        userEvent.click(screen.getByRole('button', { name: 'Go to next page' }));

        secondPageRowsDisabledArray.forEach((disabledRow) => {
          expect(
            within(screen.getByTestId(`table-row-${disabledRow.id}`)).getByRole('checkbox', { hidden: true })
          ).toBeDisabled();
        });
      });
    });
    describe('Row selection', () => {
      it('should call onRowSelect with the correct value when a row is selected', () => {
        const onRowSelectMock = jest.fn();

        render(
          <Table
            headers={headers}
            rows={rows}
            allowSelection
            rowSelection={{}}
            dataTestId="table"
            onRowSelect={onRowSelectMock}
          />
        );

        const rowId = 1;

        const checkBoxRowToSelect = within(screen.getByTestId(`table-row-${rowId}`)).getByRole('checkbox', {
          hidden: true
        });

        userEvent.click(checkBoxRowToSelect);

        expect(onRowSelectMock).toHaveBeenCalledWith({ [rowId]: true });
        expect(onRowSelectMock).toHaveBeenCalledTimes(1);
      });
    });
  });
});
