/* eslint-disable react/no-array-index-key */
import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { DOTS, usePagination } from './Pagination.helper';
import { StyledContainer, StyledDots, StyledInput, StyledInputPagination } from './Pagination.styled';
import { PaginationProps, PaginationType } from './Pagination.types';

export const Pagination = ({
  count,
  currentPage,
  onChange,
  siblingCount,
  type = PaginationType.Default,
  dataQaId,
  isWhite = false,
  zeroBasedIndex = false
}: PaginationProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [inputValue, setInputValue] = useState<number | string>(currentPage);
  const [buttonSize, setButtonSize] = useState(ButtonSize.Medium);

  const paginationRange = usePagination({
    totalPageCount: count,
    siblingCount,
    currentPage
  });
  const lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  const isFirstPage =
    // eslint-disable-next-line no-nested-ternary
    type === PaginationType.Input ? (zeroBasedIndex === true ? inputValue === 0 : inputValue === 1) : currentPage === 1;
  const isLastPage =
    // eslint-disable-next-line no-nested-ternary
    type === PaginationType.Input
      ? zeroBasedIndex === true && inputValue
        ? lastPage === (inputValue as number) + 1
        : lastPage === inputValue
      : lastPage === currentPage;
  const isCompact = type === PaginationType.Compact;
  const isInput = type === PaginationType.Input;

  useEffect(() => {
    let timeOutId: NodeJS.Timeout;

    if (type === PaginationType.Input) {
      if (inputValue || inputValue === 0 || inputValue === '') {
        timeOutId = setTimeout(() => onChange(inputValue), 350);
      }
    }

    return () => clearTimeout(timeOutId);
  }, [inputValue]);

  useEffect(() => {
    if (type === PaginationType.Input) {
      setInputValue(currentPage);
    }
  }, [currentPage]);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setButtonSize(ButtonSize.Small);
    }
  }, [window.innerWidth]);

  if (!zeroBasedIndex) {
    if (currentPage < 1 || !paginationRange || paginationRange.length < 2) {
      return null;
    }
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
    if (type === PaginationType.Input) {
      if (inputValue && inputValue > count && inputValue === undefined) {
        return zeroBasedIndex ? setInputValue(0) : setInputValue(1);
      }

      return setInputValue((inputValue as number) - 1);
    }

    return onChange(currentPage - 1);
  };

  const onNext = () => {
    if (type === PaginationType.Input) {
      if (inputValue && inputValue < count && inputValue === undefined) {
        return zeroBasedIndex ? setInputValue(0) : setInputValue(1);
      }
      return setInputValue((inputValue as number) + 1);
    }

    return onChange(currentPage + 1);
  };

  const onPreviousKeyUp = () => {
    onPageKeyUp(currentPage - 1);
  };

  const onNextKeyUp = () => {
    onPageKeyUp(currentPage + 1);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value !== '') {
      setInputValue(Number(event.target.value) - 1);
    } else {
      setInputValue('');
    }
  };

  const renderContent = () => {
    if (isInput) {
      return (
        <StyledInputPagination theme={theme}>
          <StyledInput
            theme={theme}
            data-testid={`${dataQaId}-input`}
            // eslint-disable-next-line no-nested-ternary
            value={zeroBasedIndex ? (typeof inputValue === 'string' ? inputValue : inputValue + 1) : inputValue}
            onChange={(e) => handleInput(e)}
            max={count}
            min={0}
            type="number"
          />
          <Text
            dataQaId={`${dataQaId}-input-count`}
            textStyle={TextStyle.MediumSmallDefault}
            color={isWhite ? TextColor.White : TextColor.DigitalBlack}
          >{` / ${count}`}</Text>
        </StyledInputPagination>
      );
    }

    if (isCompact) {
      return (
        <li>
          <Text
            dataQaId={`${dataQaId}-pagination-compact`}
            textStyle={TextStyle.SmallDefault}
            color={isWhite ? TextColor.White : TextColor.DigitalBlack}
          >{`${currentPage} of ${count}`}</Text>
        </li>
      );
    }

    return (
      <>
        {paginationRange?.map((pageNr, idx) => {
          const isCurrentPage = pageNr === currentPage;
          if (pageNr === DOTS) {
            return (
              <li data-testid={`${dataQaId}-dots`} key={`dots-${idx}`} tabIndex={-1}>
                <StyledDots theme={theme} isWhite={isWhite}>
                  &#8230;
                </StyledDots>
              </li>
            );
          }
          return (
            <li className="default-pagination" key={pageNr}>
              <Button
                dataTestId={`${dataQaId}-page-${pageNr}`}
                style={ButtonStyle.Transparent}
                selected={isCurrentPage}
                onClick={() => onPageClick(Number(pageNr))}
                onKeyUp={() => onPageKeyUp(Number(pageNr))}
                aria-current={isCurrentPage}
                aria-label={isCurrentPage ? `page ${pageNr}` : `Go to page ${pageNr}`}
                tabIndex={0}
                text={pageNr}
                negative={isWhite}
                size={buttonSize}
              />
            </li>
          );
        })}
      </>
    );
  };

  return (
    <StyledContainer data-testid={dataQaId} isWhite={isWhite} theme={theme}>
      <ul>
        <li>
          <Button
            dataTestId={`${dataQaId}-button-previous`}
            style={ButtonStyle.Transparent}
            disabled={isFirstPage}
            tabIndex={isFirstPage ? -1 : 0}
            onClick={onPrevious}
            onKeyUp={onPreviousKeyUp}
            icon={IconName.ChevronLeft}
            size={buttonSize}
            negative={isWhite}
            aria-label="Previous button"
          />
        </li>
        {renderContent()}
        <li>
          <Button
            dataTestId={`${dataQaId}-button-next`}
            style={ButtonStyle.Transparent}
            disabled={isLastPage}
            tabIndex={isLastPage ? -1 : 0}
            onClick={onNext}
            onKeyUp={onNextKeyUp}
            icon={IconName.ChevronRight}
            size={buttonSize}
            negative={isWhite}
            aria-label="Next button"
          />
        </li>
      </ul>
    </StyledContainer>
  );
};
