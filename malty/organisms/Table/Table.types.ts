import { Row, Table } from '@tanstack/react-table';

export interface TableProps {
  headers: TableHeaderProps[];
  rows: TableRowProps[];
  size?: TableSize;
  onRowClick?: (row: TableRowProps) => void;
  dataTestId?: string;
  paginationSize?: number;
  className?: string;
  isDraggable?: boolean;
  allowSelection?: boolean;
  onRowSelect?: (selectedRows: TableRowProps[]) => void;
  totalPagesCount?: number;
  onPaginationChange?: (page: number) => void;
}

export interface TableHeaderProps {
  key: string;
  header: unknown;
  headerAlignment?: TableHeaderAlignment;
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
