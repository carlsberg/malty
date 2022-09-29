import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  PaginationState,
  useReactTable
} from '@tanstack/react-table';
import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { Pagination, PaginationType } from '../../molecules/Pagination';
import { StyledHead, StyledPaginationWrapper, StyledTable, StyledTbody, StyledTd, StyledThead } from './Table.styled';
import { TableProps } from './Table.types';

const columnHelper = createColumnHelper<any>();

export const Table = ({ headers, rows }: TableProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [data] = useState(() => [...rows]);
  // const [rowSelection, setRowSelection] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const [{ pageIndex, pageSize }, setPagination] = React.useState<PaginationState>({
    pageIndex: currentPage,
    pageSize: 12
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

  const handlePageChange = (page: number) => {
    console.log(page);
    table.setPageIndex(page);
  };

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
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <StyledTd key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</StyledTd>
                ))}
              </tr>
            ))}
          </StyledTbody>
        </StyledTable>

        <StyledPaginationWrapper>
          <Pagination
            type={PaginationType.Input}
            count={Math.round(data.length / 12) + 1}
            currentPage={table.getState().pagination.pageIndex}
            onChange={handlePageChange}
            zeroBasedIndex
          />
        </StyledPaginationWrapper>
      </div>
    </TypographyProvider>
  );
};
