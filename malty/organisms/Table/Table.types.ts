export interface TableProps {
  headers: TableHeaderProps[];
  rows: Record<string, unknown>[];
  size?: TableSize;
}

export interface TableHeaderProps {
  key: string;
  header: Node | string;
}

export enum TableSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}
