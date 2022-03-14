export interface PaginationProps {
  count: number;
  onChange: (page: number) => void;
  currentPage: number;
  siblingCount?: number;
  dataQaId?: string;
  type?: PaginationTypes;
}

export enum PaginationTypes {
  default,
  input,
  compact
}
