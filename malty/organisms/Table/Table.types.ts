import { Row } from '@tanstack/react-table';

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
}
export interface TableRowProps {
  id: string | number;
  [prop: string]: unknown;
}

export enum TableSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export interface DraggableRowProps {
  onRowClick?: () => void;
  isClickable?: boolean;
  size?: string;
  row: Row<TableRowProps>;
  index: number;
  dataTestId?: string;
  allowSelection?: boolean;
}
