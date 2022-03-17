export interface PaginationProps {
  count: number;
  onChange: (page: number) => void;
  currentPage: number;
  siblingCount?: number;
  type?: PaginationType;
}

export enum PaginationType {
  default,
  compact
}
