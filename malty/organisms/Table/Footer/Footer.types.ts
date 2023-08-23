import { PaginationProps } from '@carlsberggroup/malty.molecules.pagination';
import { DefaultTheme } from 'styled-components';
import { ManualPagination, TableProps } from '../Table.types';

export interface FooterProps {
  theme: DefaultTheme;
  pageIndex: number;
  pageSize: number;
  pageCount: number;
  itemsSelected?: number;
  dataTestId: TableProps['dataTestId'];
  totalRecords: ManualPagination['totalRecords'];
  onChange: PaginationProps['onChange'];
}
