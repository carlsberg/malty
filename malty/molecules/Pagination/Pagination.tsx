import { Colors, SizesTypes } from '@carlsberggroup/malty.atoms.icon-wrapper';
import ChevronLeft from '@carlsberggroup/malty.icons.chevron-left';
import ChevronRight from '@carlsberggroup/malty.icons.chevron-right';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledChevron, StyledContainer, StyledDots, StyledPageNumber } from './Pagination.styled';
import { PaginationProps } from './Pagination.types';
import { DOTS, usePagination } from './usePagination';

export const Pagination = ({ count, currentPage, onChange, siblingCount }: PaginationProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const paginationRange = usePagination({
    totalPageCount: count,
    siblingCount,
    currentPage
  });

  if (currentPage < 1 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }

  const onNext = () => {
    onChange(currentPage + 1);
  };

  const onPrevious = () => {
    onChange(currentPage - 1);
  };

  const onPageClick = (targetPage: number | string) => {
    onChange(Number(targetPage));
  };

  const lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  return (
    <TypographyProvider>
      <StyledContainer>
        <StyledChevron disabled={currentPage === 1}>
          <ChevronLeft size={SizesTypes.Medium} color={Colors.Primary} onClick={onPrevious} />
        </StyledChevron>
        {paginationRange.map((pageNr, idx) => {
          if (pageNr === DOTS) {
            // eslint-disable-next-line react/no-array-index-key
            return <StyledDots key={`${pageNr}${idx}`}>&#8230;</StyledDots>;
          }
          return (
            <StyledPageNumber key={pageNr} theme={theme} active={pageNr === currentPage} onClick={onPageClick(pageNr)}>
              {pageNr}
            </StyledPageNumber>
          );
        })}
        <StyledChevron disabled={lastPage === currentPage}>
          <ChevronRight size={SizesTypes.Medium} color={Colors.Primary} onClick={onNext} />
        </StyledChevron>
      </StyledContainer>
    </TypographyProvider>
  );
};
