import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface PaginationProps extends SpaceProps {
  count: number;
  onChange: (page: number | string, trigger?: PaginationTrigger) => void;
  currentPage: number;
  siblingCount?: number;
  dataTestId?: string;
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
