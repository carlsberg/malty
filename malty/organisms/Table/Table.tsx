import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledHead,
  StyledPaginationWrapper,
  StyledRow,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledThead
} from './Table.styled';
import { TableProps, TableRowProps, TableSize } from './Table.types';

export const Table = ({ headers, rows, onRowClick, size, paginationSize = 12 }: TableProps) => {
  const columnHelper = createColumnHelper<TableRowProps>();
  const theme = useContext(ThemeContext) || defaultTheme;
  const [data] = useState(() => [...rows]);
  const [tableSize, setTableSize] = useState(theme.sizes.xl.value);
  // const [rowSelection, setRowSelection] = useState({});

  const [{ pageIndex, pageSize }, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: paginationSize
  });
  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize
    }),
    [pageIndex, pageSize]
  );
  // const handleCheckboxHeader = (table: tableType<any>) => {
  //   if (table.getIsSomeRowsSelected()) {
  //     return undefined;
  //   }
  //   if (table.getIsAllRowsSelected()) {
  //     return true;
  //   }
  //   return false;
  // };
  // const handleCheckboxRow = (row: Row<any>) => {
  //   if (row.getIsSomeSelected()) {
  //     return undefined;
  //   }
  //   if (row.getIsSelected()) {
  //     return true;
  //   }
  //   return false;
  // };

  const columns = headers.map((header) =>
    columnHelper.accessor(header.key, {
      header: () => header.header
    })
  );

  // useEffect(() => {
  //   if (allowSelection) {
  //     columns.push({
  //       id: 'select',
  //       header: ({ table }) => (
  //         <Checkbox
  //           onValueChange={table.getToggleAllRowsSelectedHandler}
  //           value={handleCheckboxHeader(table)?.toString() as string}
  //           checked={handleCheckboxHeader(table)}
  //         />
  //       ),
  //       cell: ({ row }) => (
  //         <Checkbox
  //           onValueChange={row.getToggleSelectedHandler}
  //           value={handleCheckboxRow(row)?.toString() as string}
  //           checked={handleCheckboxRow(row)}
  //         />
  //       )
  //     });
  //   }
  // }, []);

  const table = useReactTable({
    data,
    columns,
    pageCount: -1,
    state: {
      //   rowSelection
      pagination
    },
    // onRowSelectionChange: setRowSelection,s
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel()
  });

  const handlePageChange = (page: number | string) => {
    if (typeof page !== 'string') table.setPageIndex(page);
  };

  useEffect(() => {
    switch (size) {
      case TableSize.Large: {
        setTableSize(theme.sizes['2xl'].value);
        break;
      }
      case TableSize.XLarge: {
        setTableSize(theme.sizes['3xl'].value);
        break;
      }

      default: {
        setTableSize(theme.sizes.xl.value);
        break;
      }
    }
  }, [size, theme]);

  return (
    <TypographyProvider>
      <div>
        <StyledTable theme={theme}>
          <StyledThead theme={theme}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <StyledHead theme={theme} key={header.id}>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  </StyledHead>
                ))}
              </tr>
            ))}
          </StyledThead>
          <StyledTbody>
            {table.getRowModel().rows.map((row) => (
              <StyledRow
                isClickable={!!onRowClick}
                size={tableSize}
                onClick={() => onRowClick && onRowClick(row.original)}
                key={row.id}
              >
                {row.getVisibleCells().map((cell) => (
                  <StyledTd key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</StyledTd>
                ))}
              </StyledRow>
            ))}
          </StyledTbody>
        </StyledTable>

        <StyledPaginationWrapper>
          <Pagination
            type={PaginationType.Input}
            count={
              data.length / table.getState().pagination.pageSize -
                Math.floor(data.length / table.getState().pagination.pageSize) !==
              0
                ? Math.trunc(data.length / table.getState().pagination.pageSize + 1)
                : Math.trunc(data.length / table.getState().pagination.pageSize)
            }
            currentPage={table.getState().pagination.pageIndex}
            onChange={(page) => handlePageChange(page)}
            zeroBasedIndex
          />
        </StyledPaginationWrapper>
      </div>
    </TypographyProvider>
  );
};
