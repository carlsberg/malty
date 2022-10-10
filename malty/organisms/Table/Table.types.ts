export interface TableProps {
  headers: TableHeaderProps[];
  rows: TableRowProps[];
  size?: TableSize;
  onRowClick?: (row: unknown) => void;
  dataTestId?: string;
  paginationSize?: number;
  className?: string;
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
