import { Checkbox } from '@carlsberggroup/malty.atoms.checkbox';
import { Icon, IconColor, IconName, IconSize } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Tooltip, TooltipPlacement } from '@carlsberggroup/malty.atoms.tooltip';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Header,
  OnChangeFn,
  PaginationState,
  Row,
  SortingState,
  useReactTable
} from '@tanstack/react-table';
import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { ThemeContext } from 'styled-components';
import { DraggableRow } from './DraggableRow';
import { Footer } from './Footer';
import {
  StyledHead,
  StyledNoRecordsWrapper,
  StyledRow,
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledThead
} from './Table.styled';
import { TableHeaderAlignment, TableProps, TableRowProps, TableSize } from './Table.types';

const createSortIcon = (iconName: IconName) => {
  const renderSortIcon = (ref: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => (
    <div ref={ref}>
      <Icon
        name={iconName}
        size={IconSize.MediumSmall}
        color={iconName === IconName.Sort ? IconColor.Support40 : IconColor.Support80}
      />
    </div>
  );

  return renderSortIcon;
};

export const Table = ({
  headers,
  rows,
  size,
  paginationIndex = 0,
  paginationSize = 12,
  className,
  isDraggable = false,
  dataTestId,
  allowSelection = false,
  manualPagination,
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
    pageIndex: paginationIndex,
    pageSize: paginationSize
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize
    }),
    [pageIndex, pageSize]
  );

  useEffect(() => {
    setPagination({ pageIndex: paginationIndex, pageSize: paginationSize });
  }, [paginationIndex, paginationSize]);

  const columns = headers.map((header) =>
    columnHelper.accessor(header.key, {
      id: header.key,
      header: () => (header.isEmpty ? null : header.header),
      meta: {
        alignment: header.headerAlignment,
        sorting: !header.isEmpty && header.sorting
      },
      cell: header.cell
    })
  );

  const handleOnSortingChange: OnChangeFn<SortingState> = (updaterFn) => {
    const value = typeof updaterFn === 'function' ? updaterFn(sorting) : [];

    onSortingChange?.(value);
    setSorting(value);
  };

  const handleGetRowId = (row: TableRowProps, _: number, parent?: Row<TableRowProps>) => {
    return parent ? [parent.id, row.id].join('.') : row.id.toString();
  };

  const table = useReactTable({
    data,
    columns,
    pageCount: manualPagination?.totalPagesCount,
    manualPagination: !!manualPagination,
    state: {
      rowSelection,
      pagination,
      sorting
    },
    manualSorting: !!onSortingChange,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange: setPagination,
    getPaginationRowModel: manualPagination ? undefined : getPaginationRowModel(),
    onSortingChange: handleOnSortingChange,
    getSortedRowModel: getSortedRowModel(),
    getRowId: handleGetRowId
  });

  const handlePageChange = (page: number | string) => {
    if (typeof page !== 'string') {
      table.setPageIndex(page - 1);

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

  const createHandleHeaderClick = (header: Header<TableRowProps, unknown>, index: number) => {
    if (columns[index].meta?.sorting) {
      return header.column.getToggleSortingHandler();
    }

    return undefined;
  };

  const handleHeadRef = (elem: HTMLTableCellElement, index: number) => {
    nodesRef.current[index] = elem;
  };

  return (
    <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
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
                  alignPosition={columns[index].meta?.alignment as TableHeaderAlignment | undefined}
                  ref={(elem: HTMLTableCellElement) => handleHeadRef(elem, index)}
                  isSortable={!!columns[index].meta?.sorting && header.column.getCanSort()}
                  onClick={createHandleHeaderClick(header, index)}
                  data-testid={`${dataTestId}-th-${header.id}`}
                  theme={theme}
                  key={header.id}
                >
                  <div>
                    {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    {columns[index].meta?.sorting
                      ? {
                          asc: (
                            <Tooltip
                              placement={TooltipPlacement.Bottom}
                              isDark
                              tooltipId="asc"
                              triggerComponent={createSortIcon(IconName.ArrowSmallUp)}
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
                              triggerComponent={createSortIcon(IconName.ArrowSmallDown)}
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
                            triggerComponent={createSortIcon(IconName.Sort)}
                          >
                            <Text textStyle={TextStyle.TinyBold} color={TextColor.White}>
                              Sort A→Z
                            </Text>
                          </Tooltip>
                        )
                      : null}
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
                        {/* TODO: check this translation, most probably add a new prop noRecordsTranslation */}
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
                          {cell.column.columnDef.cell
                            ? flexRender(cell.column.columnDef.cell, cell.getContext())
                            : cell.renderValue()}
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
      {data?.length > 0 ? (
        <Footer
          theme={theme}
          pageIndex={pageIndex}
          pageSize={pageSize}
          totalRecords={manualPagination?.totalRecords ?? data.length}
          dataTestId={dataTestId}
          pageCount={table.getPageCount()}
          itemsSelected={table.getSelectedRowModel().flatRows.length}
          onChange={handlePageChange}
        />
      ) : null}
    </DragDropContext>
  );
};
