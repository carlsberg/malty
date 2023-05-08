export interface PaginationProps {
  count: number;
  onChange: (page: number | string, trigger?: PaginationTrigger) => void;
  currentPage: number;
  siblingCount?: number;
  dataQaId?: string;
  type?: PaginationType;
  isWhite?: boolean;
}

export enum PaginationTrigger {
  PageNr = 'pageNr',
  Prev = 'prev',
  Next = 'next'
}

export enum PaginationType {
  Default = 'default',
  Compact = 'compact',
  Input = 'input'
}
