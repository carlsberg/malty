/* eslint-disable react/no-array-index-key */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React from 'react';
import { Content } from './components/Content';
import { StyledContainer } from './Pagination.styled';
import { PaginationProps, PaginationType } from './Pagination.types';
import { usePagination } from './usePagination';

export const Pagination = ({
  count,
  currentPage,
  onChange,
  siblingCount,
  type = PaginationType.default
}: PaginationProps) => {
  const paginationRange = usePagination({
    totalPageCount: count,
    siblingCount,
    currentPage
  });
  const lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  const isFirstPage = currentPage === 1;
  const isLastPage = lastPage === currentPage;

  const isCompact = type === PaginationType.compact;

  if (currentPage < 1 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  const onPageClick = (targetPage: number) => {
    onChange(targetPage);
  };

  const onPageKeyUp = (pageNr: number) => (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      e.preventDefault();
      onChange(pageNr);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onChange(currentPage - 1);
    }
  };

  const onNext = () => {
    if (currentPage < count) {
      onChange(currentPage + 1);
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
            <Button
              style={ButtonStyle.Transparent}
              disabled={isFirstPage}
              tabIndex={isFirstPage ? -1 : 0}
              onClick={onPrevious}
              onKeyUp={onPreviousKeyUp}
              icon={IconName.ChevronLeft}
              size={isCompact ? ButtonSize.Small : ButtonSize.Medium}
            />
          </li>
          <Content
            currentPage={currentPage}
            paginationRange={paginationRange}
            count={count}
            onPageClick={onPageClick}
            onPageKeyUp={onPageKeyUp}
            type={type}
          />
          <li>
            <Button
              style={ButtonStyle.Transparent}
              disabled={isLastPage}
              tabIndex={isLastPage ? -1 : 0}
              onClick={onNext}
              onKeyUp={onNextKeyUp}
              icon={IconName.ChevronRight}
              size={isCompact ? ButtonSize.Small : ButtonSize.Medium}
            />
          </li>
        </ul>
      </StyledContainer>
    </TypographyProvider>
  );
};
