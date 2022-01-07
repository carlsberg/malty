/* eslint-disable react/no-array-index-key */
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
  const lastPage = paginationRange && paginationRange[paginationRange.length - 1];

  if (currentPage < 1 || (paginationRange && paginationRange?.length < 2)) {
    return null;
  }

  const onNext = () => {
    if (currentPage < count) {
      onChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  const onPageClick = (targetPage: number | string) => {
    onChange(Number(targetPage));
  };

  const onPageKeyUp = (pageNr: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onChange(pageNr);
    }
  };

  const onPreviousKeyUp = () => {
    onPageKeyUp(currentPage - 1);
  };

  const onNextKeyUp = () => {
    onPageKeyUp(currentPage + 1);
  };

  return (
    <TypographyProvider>
      <StyledContainer>
        <ul>
          <li>
            <StyledChevron disabled={currentPage === 1} tabIndex={0} onClick={onPrevious} onKeyUp={onPreviousKeyUp}>
              <ChevronLeft size={SizesTypes.Medium} color={Colors.Primary} />
            </StyledChevron>
          </li>
          {paginationRange?.map((pageNr, idx) => {
            const isCurrentPage = pageNr === currentPage;
            if (pageNr === DOTS) {
              return (
                <li>
                  <StyledDots key={`${pageNr}${idx}`}>&#8230;</StyledDots>
                </li>
              );
            }
            return (
              <li>
                <StyledPageNumber
                  theme={theme}
                  active={isCurrentPage}
                  onClick={() => onPageClick(Number(pageNr))}
                  onKeyUp={() => onPageKeyUp(Number(pageNr))}
                  aria-current={isCurrentPage}
                  aria-label={isCurrentPage ? `page ${pageNr}` : `Go to page ${pageNr}`}
                  tabIndex={0}
                  key={pageNr}
                >
                  {pageNr}
                </StyledPageNumber>
              </li>
            );
          })}
          <li>
            <StyledChevron disabled={lastPage === currentPage} tabIndex={0} onKeyUp={onNextKeyUp} onClick={onNext}>
              <ChevronRight size={SizesTypes.Medium} color={Colors.Primary} />
            </StyledChevron>
          </li>
        </ul>
      </StyledContainer>
    </TypographyProvider>
  );
};
