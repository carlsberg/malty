export interface PaginationProps {
  count: number;
  onChange: (page: number) => void;
  currentPage: number;
  siblingCount?: number;
  dataQaId?: string;
}
