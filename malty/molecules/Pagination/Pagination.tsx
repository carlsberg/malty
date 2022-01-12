/* eslint-disable react/no-array-index-key */
import { Colors, SizesTypes } from '@carlsberggroup/malty.atoms.icon-wrapper';
import ChevronLeft from '@carlsberggroup/malty.icons.chevron-left';
import ChevronRight from '@carlsberggroup/malty.icons.chevron-right';
import { TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React from 'react';
import { Button, ButtonStyle } from '../../atoms/Button';
import { StyledChevron, StyledContainer, StyledDots } from './Pagination.styled';
import { PaginationProps } from './Pagination.types';
import { DOTS, usePagination } from './usePagination';

export const Pagination = ({ count, currentPage, onChange, siblingCount }: PaginationProps) => {
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

  const onPageClick = (targetPage: number) => {
    onChange(targetPage);
  };

  const onPageKeyUp = (pageNr: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Space') {
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
                <li key={`${pageNr}${idx}`} tabIndex={-1}>
                  <StyledDots>&#8230;</StyledDots>
                </li>
              );
            }
            return (
              <li key={pageNr}>
                <Button
                  style={ButtonStyle.Transparent}
                  selected={isCurrentPage}
                  onClick={() => onPageClick(Number(pageNr))}
                  onKeyUp={() => onPageKeyUp(Number(pageNr))}
                  aria-current={isCurrentPage}
                  aria-label={isCurrentPage ? `page ${pageNr}` : `Go to page ${pageNr}`}
                  tabIndex={0}
                  loading={false}
                  text={pageNr}
                />
              </li>
            );
          })}
          <li>
            <StyledChevron disabled={lastPage === currentPage} tabIndex={-1} onClick={onNext} onKeyUp={onNextKeyUp}>
              <ChevronRight size={SizesTypes.Medium} color={Colors.Primary} />
            </StyledChevron>
          </li>
        </ul>
      </StyledContainer>
    </TypographyProvider>
  );
};
