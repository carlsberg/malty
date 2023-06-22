import { ColumnSort, Row, RowData, SortingState, Table } from '@tanstack/react-table';

export { ColumnSort } from '@tanstack/react-table';

export interface TableProps {
  headers: TableHeaderProps[];
  rows: TableRowProps[];
  size?: TableSize;
  dataTestId?: string;
  paginationSize?: number;
  className?: string;
  isDraggable?: boolean;
  allowSelection?: boolean;
  totalPagesCount?: number;
  totalRecords?: number;
  serverSide?: boolean;
  defaultSorting?: ColumnSort;
  onRowClick?: (row: TableRowProps) => void;
  onRowSelect?: (selectedRows: TableRowProps[]) => void;
  onPaginationChange?: (page: number) => void;
  onSortingChange?: (sorting: SortingState) => void;
}

export interface TableHeaderProps {
  key: string;
  header: unknown;
  headerAlignment?: TableHeaderAlignment;
  isEmpty?: boolean;
}
export interface TableRowProps {
  id: string | number;
  [prop: string]: unknown;
}

export interface DraggableRowProps {
  onRowClick?: () => void;
  size?: string;
  row: Row<TableRowProps>;
  dataTestId?: string;
  allowSelection?: boolean;
  elementRef?: React.MutableRefObject<HTMLTableCellElement[]>;
  tableContext?: Table<TableRowProps>;
}

export enum TableSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
export enum TableHeaderAlignment {
  Left = 'left',
  Right = 'right',
  Center = 'center'
}
declare module '@tanstack/table-core' {
  export interface ColumnMeta<TData extends RowData, TValue> {
    alignment?: TableHeaderAlignment;
    sorting?: boolean;
  }
}
