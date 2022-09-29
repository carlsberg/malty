export interface PaginationProps {
  count: number;
  onChange: (page: number) => void;
  currentPage: number;
  siblingCount?: number;
  dataQaId?: string;
  type?: PaginationType;
  isWhite?: boolean;
  zeroBasedIndex?: boolean;
}

export enum PaginationType {
  Default = 'default',
  Compact = 'compact',
  Input = 'input'
}
