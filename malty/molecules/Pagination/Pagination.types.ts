export interface PaginationProps {
  count: number;
  onChange: (page: number) => void;
  currentPage: number;
  siblingCount?: number;
  dataQaId?: string;
  type?: PaginationType;
  isWhite?: boolean;
}

export enum PaginationType {
  default,
  compact
}
