/* eslint-disable react/no-array-index-key */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { DOTS, usePagination } from './Pagination.helper';
import { StyledContainer, StyledDots } from './Pagination.styled';
import { PaginationProps, PaginationType } from './Pagination.types';

export const Pagination = ({
  count,
  currentPage,
  onChange,
  siblingCount,
  type = PaginationType.default
}: PaginationProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

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

  const renderContent = () => {
    if (isCompact) {
      return (
        <li>
          <Text textStyle={TextStyle.SmallDefault}>{`${currentPage} of ${count}`}</Text>
        </li>
      );
    }
    return (
      <>
        {paginationRange.map((pageNr, idx) => {
          const isCurrentPage = pageNr === currentPage;
          if (pageNr === DOTS) {
            return (
              <li key={`dots-${idx}`} tabIndex={-1}>
                <StyledDots theme={theme}>&#8230;</StyledDots>
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
                text={pageNr}
              />
            </li>
          );
        })}
      </>
    );
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
          {renderContent()}
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
