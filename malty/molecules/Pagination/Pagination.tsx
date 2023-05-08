import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ChangeEvent, FocusEvent, KeyboardEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { LEFT_DOTS, RIGHT_DOTS, usePagination } from './Pagination.helper';
import { StyledContainer, StyledDots, StyledInput, StyledInputPagination } from './Pagination.styled';
import { PaginationProps, PaginationTrigger, PaginationType } from './Pagination.types';

export const Pagination = ({
  count,
  currentPage,
  onChange,
  siblingCount,
  type = PaginationType.Default,
  dataQaId,
  isWhite = false
}: PaginationProps) => {
  const isInput = type === PaginationType.Input;
  const isCompact = type === PaginationType.Compact;
  const minAllowedValue = 1;
  const isLastPage = currentPage === count;
  const isFirstPage = currentPage === minAllowedValue;

  const theme = useContext(ThemeContext) || defaultTheme;

  const [provisionalInputValue, setProvisionalInputValue] = useState<number | string>(currentPage);
  const [inputValue, setInputValue] = useState<number | string>(currentPage);
  const [buttonSize, setButtonSize] = useState(ButtonSize.Medium);

  const displayedPages = usePagination({
    totalPageCount: count,
    siblingCount,
    currentPage,
    isDefault: type === PaginationType.Default
  });

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setButtonSize(ButtonSize.Small);
    }
  }, [setButtonSize]);

  const onPageClick = (targetPage: number) => {
    onChange(targetPage, PaginationTrigger.PageNr);
  };

  const onPageKeyUp =
    (pageNr: number, trigger: PaginationTrigger = PaginationTrigger.PageNr) =>
    (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === 'Space') {
        e.preventDefault();
        onChange(pageNr, trigger);
      }
    };

  const onPrevious = () => {
    if (type === PaginationType.Input) {
      onChange((inputValue as number) - 1);
      return setInputValue((inputValue as number) - 1);
    }

    return onChange(currentPage - 1, PaginationTrigger.Prev);
  };

  const onNext = () => {
    if (type === PaginationType.Input) {
      onChange((inputValue as number) + 1);
      return setInputValue((inputValue as number) + 1);
    }

    return onChange(currentPage + 1, PaginationTrigger.Next);
  };

  const onPreviousKeyUp = () => {
    onPageKeyUp(currentPage - 1, PaginationTrigger.Prev);
  };

  const onNextKeyUp = () => {
    onPageKeyUp(currentPage + 1, PaginationTrigger.Next);
  };

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue: string | number = e.target.value;

    if (newValue !== '') {
      newValue = Number(newValue);
    }

    setInputValue(newValue);
  };

  const handleAssignInputValue = (value: string) => {
    let newValue = value === '' ? Number(provisionalInputValue) : Number(value);

    if (newValue > count) {
      newValue = count;
    } else if (newValue < minAllowedValue) {
      newValue = minAllowedValue;
    }

    if (newValue !== provisionalInputValue) {
      onChange(newValue, PaginationTrigger.PageNr);
    }

    setInputValue(newValue);
    setProvisionalInputValue(newValue);
  };

  const handleOnKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAssignInputValue(e.currentTarget.value);
    }
  };

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleAssignInputValue(e.target.value);
  };

  const renderContent = () => {
    if (isInput) {
      return (
        <StyledInputPagination theme={theme}>
          <StyledInput
            theme={theme}
            data-testid={`${dataQaId}-input`}
            value={inputValue}
            onChange={handleOnInputChange}
            onBlur={handleOnBlur}
            onKeyDown={handleOnKeyDown}
            max={count}
            min={minAllowedValue}
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
      displayedPages?.map((pageNr) => {
        const isCurrentPage = pageNr === currentPage;
        if (pageNr === LEFT_DOTS || pageNr === RIGHT_DOTS) {
          return (
            <li data-testid={`${dataQaId}-${pageNr}`} key={pageNr} tabIndex={-1}>
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
      }) ?? null
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
