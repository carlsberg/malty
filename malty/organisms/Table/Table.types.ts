import {
  CellContext,
  ColumnDefTemplate,
  ColumnSort,
  Row,
  RowData,
  RowSelectionState,
  SortingState,
  Table
} from '@tanstack/react-table';

export { ColumnSort } from '@tanstack/react-table';

export interface TableProps {
  headers: TableHeaderProps[];
  rows: TableRowProps[];
  size?: TableSize;
  dataTestId?: string;
  paginationIndex?: number;
  paginationSize?: number;
  className?: string;
  isDraggable?: boolean;
  allowSelection?: boolean;
  defaultSorting?: ColumnSort;
  manualPagination?: ManualPagination;
  selectedRows?: RowSelectionState;
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
  sorting?: boolean;
  cell?: ColumnDefTemplate<CellContext<TableRowProps, unknown>>;
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

export interface ManualPagination {
  totalPagesCount: number;
  totalRecords: number;
}
