/* eslint-disable no-return-assign */
import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Tooltip, TooltipPlacement } from '@carlsberggroup/malty.atoms.tooltip';
import { Pagination, PaginationType } from '@carlsberggroup/malty.molecules.pagination';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import React, { forwardRef, ReactNode, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import { DraggableRow } from './DraggableRow';
import { truncate } from './Table.helper';
import {
  StyledFooterWrapper,
  StyledHead,
  StyledNoRecordsWrapper,
  StyledPaginationWrapper,
  StyledRow,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTextWrapper,
  StyledThead
} from './Table.styled';
import { TableHeaderAlignment, TableProps, TableRowProps, TableSize } from './Table.types';

const SortIcon = forwardRef<HTMLDivElement, { iconName: IconName }>(({ iconName }, ref) => (
  <div ref={ref}>
    <Icon
      name={iconName}
      size={IconSize.MediumSmall}
      color={iconName === IconName.Sort ? IconColor.Support40 : IconColor.Support80}
    />
  </div>
));

SortIcon.displayName = 'SortIcon';

export const Table = ({
  headers,
  rows,
  size,
  paginationSize = 12,
  className,
  isDraggable = false,
  dataTestId,
  allowSelection = false,
  totalPagesCount,
  totalRecords,
  serverSide = true,
  defaultSorting,
  onRowClick,
  onSortingChange,
  onRowSelect = () => null,
  onPaginationChange = () => null
}: TableProps) => {
  const columnHelper = createColumnHelper<TableRowProps>();
  const theme = useContext(ThemeContext) || defaultTheme;
  const [data, setData] = useState(rows);
  const [tableSize, setTableSize] = useState(theme.sizes.xl.value);
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<SortingState>(defaultSorting ? [defaultSorting] : []);
  const nodesRef = useRef<HTMLTableCellElement[]>([]);

  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: paginationSize
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize
    }),
    [pageIndex, pageSize]
  );

  const columns = headers.map((header) =>
    columnHelper.accessor(header.key, {
      id: header.key,
      header: () => header.header,
      meta: header.headerAlignment
    })
  );

  const handleOnSortingChange: OnChangeFn<SortingState> = (updaterFn) => {
    const value = typeof updaterFn === 'function' ? updaterFn(sorting) : [];

    onSortingChange?.(value);
    setSorting(value);
  };

  const table = useReactTable({
    data,
    columns,
    pageCount: totalRecords || -1,
    manualPagination: serverSide,
    state: {
      rowSelection,
      pagination,
      sorting
    },
    manualSorting: !!onSortingChange,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: handleOnSortingChange,
    getSortedRowModel: getSortedRowModel()
  });

  const handlePageChange = (page: number | string) => {
    if (typeof page !== 'string') {
      table.setPageIndex(page);

      onPaginationChange(page);
    }
  };

  const handleDragEnd = (results: DropResult) => {
    if (!results.destination) return;
    const tempUser = [...data];
    const [selectRow] = tempUser.splice(results.source.index, 1);
    tempUser.splice(results.destination.index, 0, selectRow);
    setData(tempUser);
  };

  const calculateNumberOfPages = () => {
    if (totalPagesCount) return totalPagesCount;
    if (totalRecords) {
      const pageHelper = totalRecords / paginationSize;
      if (truncate(pageHelper, Math.floor(pageHelper))) return Math.trunc(pageHelper + 1);
      return pageHelper;
    }
    const pageHelper = data.length / table.getState().pagination.pageSize;
    return truncate(pageHelper, Math.floor(pageHelper)) ? Math.trunc(pageHelper + 1) : Math.trunc(pageHelper);
  };

  useEffect(() => {
    setData(rows);
  }, [rows]);

  useEffect(() => {
    onRowSelect(table.getSelectedRowModel().flatRows.map((row) => row.original));
  }, [onRowSelect, rowSelection, table]);

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
    <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
      <div>
        <StyledTable data-testid={dataTestId} className={className} theme={theme}>
          <StyledThead data-testid={`${dataTestId}-thead`} theme={theme}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr data-testid={`${dataTestId}-tr-${headerGroup.id}`} key={headerGroup.id}>
                {isDraggable && data.length > 0 && (
                  <StyledHead className="draggable-header" isSortable={false} theme={theme} />
                )}

                {allowSelection && data.length > 0 && (
                  <StyledHead
                    className="checkbox-header"
                    isSortable={false}
                    theme={theme}
                    allowSelection={allowSelection}
                  >
                    <Checkbox
                      onValueChange={table.getToggleAllRowsSelectedHandler()}
                      checked={table.getIsAllRowsSelected()}
                      isIndeterminate={table.getIsSomeRowsSelected()}
                    />
                  </StyledHead>
                )}
                {headerGroup.headers.map((header, index) => (
                  <StyledHead
                    alignPosition={columns[index].meta as TableHeaderAlignment | undefined}
                    ref={(elem: HTMLTableCellElement) => (nodesRef.current[index] = elem)}
                    isSortable={header.column.getCanSort()}
                    onClick={header.column.getToggleSortingHandler()}
                    data-testid={`${dataTestId}-th-${header.id}`}
                    theme={theme}
                    key={header.id}
                  >
                    <div>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: (
                          <Tooltip
                            placement={TooltipPlacement.Bottom}
                            isDark
                            tooltipId="asc"
                            triggerComponent={(setTriggerElement) =>
                              SortIcon({ ref: setTriggerElement, iconName: IconName.ArrowSmallUp })
                            }
                          >
                            <Text textStyle={TextStyle.TinyBold} color={TextColor.White}>
                              Sorted A→Z
                            </Text>
                          </Tooltip>
                        ),
                        desc: (
                          <Tooltip
                            placement={TooltipPlacement.Bottom}
                            isDark
                            tooltipId="desc"
                            triggerComponent={(setTriggerElement) =>
                              SortIcon({ ref: setTriggerElement, iconName: IconName.ArrowSmallDown })
                            }
                          >
                            <Text textStyle={TextStyle.TinyBold} color={TextColor.White}>
                              Sorted Z→A
                            </Text>
                          </Tooltip>
                        )
                      }[header.column.getIsSorted() as string] ?? (
                        <Tooltip
                          placement={TooltipPlacement.Bottom}
                          isDark
                          tooltipId="normal"
                          triggerComponent={(setTriggerElement) =>
                            SortIcon({ ref: setTriggerElement, iconName: IconName.Sort })
                          }
                        >
                          <Text textStyle={TextStyle.TinyBold} color={TextColor.White}>
                            Sort A→Z
                          </Text>
                        </Tooltip>
                      )}
                    </div>
                  </StyledHead>
                ))}
              </tr>
            ))}
          </StyledThead>

          <Droppable droppableId="tbody">
            {(provided) => (
              <StyledTbody ref={provided.innerRef} theme={theme}>
                {data.length <= 0 && (
                  <tr>
                    <td colSpan={table.getFlatHeaders().length}>
                      <StyledNoRecordsWrapper theme={theme}>
                        <Text textStyle={TextStyle.MediumSmallDefault} color={TextColor.DigitalBlack}>
                          No records found
                        </Text>
                      </StyledNoRecordsWrapper>
                    </td>
                  </tr>
                )}
                {table.getRowModel().rows.map((row) => (
                  <React.Fragment key={row.id}>
                    {isDraggable && (
                      <DraggableRow
                        tableContext={table}
                        elementRef={nodesRef}
                        row={row}
                        allowSelection={allowSelection}
                        onRowClick={() => onRowClick && onRowClick(row.original)}
                        size={tableSize}
                        dataTestId={dataTestId}
                      />
                    )}
                    {!isDraggable && (
                      <StyledRow
                        theme={theme}
                        key={row.id}
                        onClick={() => onRowClick && onRowClick(row.original)}
                        isClickable={!!onRowClick}
                        size={tableSize}
                      >
                        {allowSelection && (
                          <StyledTd data-testid={`${dataTestId}-cell-checkbox`} theme={theme}>
                            <Checkbox onValueChange={row.getToggleSelectedHandler()} checked={row.getIsSelected()} />
                          </StyledTd>
                        )}
                        {row.getVisibleCells().map((cell) => (
                          <StyledTd
                            alignPosition={
                              table.getAllColumns()?.find((col) => col.columnDef.id === cell.column.id)?.columnDef
                                ?.meta as TableHeaderAlignment | undefined
                            }
                            data-testid={`${dataTestId}-cell-${cell.id}`}
                            theme={theme}
                            key={cell.id}
                          >
                            {cell.renderValue() as ReactNode}
                          </StyledTd>
                        ))}
                      </StyledRow>
                    )}
                  </React.Fragment>
                ))}

                {provided.placeholder}
              </StyledTbody>
            )}
          </Droppable>
        </StyledTable>
        {data?.length > 0 && (
          <StyledFooterWrapper data-testid={`${dataTestId}-pagination`} theme={theme}>
            <StyledTextWrapper>
              {table.getSelectedRowModel().flatRows.length > 0 && (
                <Text textStyle={TextStyle.SmallDefault} color={TextColor.Support100}>
                  {`Selecting ${table.getSelectedRowModel().flatRows.length} of ${data.length}`}
                </Text>
              )}
            </StyledTextWrapper>
            <StyledPaginationWrapper theme={theme}>
              <Text color={TextColor.Support60} textStyle={TextStyle.SmallDefault}>
                {`${pageIndex * pageSize + 1}-
                ${data.length < pageSize ? pageIndex * pageSize + data.length : (pageIndex + 1) * pageSize} of
                 ${totalRecords || data.length} `}
              </Text>
              <Pagination
                type={PaginationType.Input}
                count={calculateNumberOfPages()}
                currentPage={table.getState().pagination.pageIndex}
                onChange={(page) => handlePageChange(page)}
                zeroBasedIndex
              />
            </StyledPaginationWrapper>
          </StyledFooterWrapper>
        )}
      </div>
    </DragDropContext>
  );
};
