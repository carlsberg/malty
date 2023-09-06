import { PaginationProps } from '@carlsberggroup/malty.molecules.pagination';
import { ManualPagination, TableProps } from '../Table.types';

export interface FooterProps {
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  itemsSelected?: number;
  dataTestId: TableProps['dataTestId'];
  totalRecords: ManualPagination['totalRecords'];
  onChange: PaginationProps['onChange'];
}
