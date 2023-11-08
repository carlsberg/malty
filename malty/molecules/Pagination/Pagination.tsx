import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { EventKeys } from '@carlsberggroup/malty.utils.consts';
import React, { ChangeEvent, FocusEvent, KeyboardEvent, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { LEFT_DOTS, RIGHT_DOTS, usePagination } from './Pagination.helper';
import { StyledContainer, StyledDots, StyledInput, StyledInputPagination } from './Pagination.styled';
import { PaginationProps, PaginationTrigger, PaginationType } from './Pagination.types';

const MIN_ALLOWED_VALUE = 1;

export const Pagination = ({
  count,
  currentPage,
  onChange,
  siblingCount,
  type = PaginationType.Default,
  dataTestId,
  disabled = false,
  isWhite = false
}: PaginationProps) => {
  const isInput = type === PaginationType.Input;
  const isCompact = type === PaginationType.Compact;
  const isLastPage = currentPage === count;
  const isFirstPage = currentPage === MIN_ALLOWED_VALUE;
  // TODO: in case this component needs to be used in SSR, include validation for the window or
  // include a custom hook to check for the screen size
  // https://github.com/CarlsbergGBS/cx-component-library/pull/629#discussion_r1187538517
  const buttonSize = window.innerWidth <= 768 ? ButtonSize.Small : ButtonSize.Medium;

  const theme = useContext(ThemeContext) || defaultTheme;

  const [provisionalInputValue, setProvisionalInputValue] = useState<number | string>(currentPage);
  const [inputValue, setInputValue] = useState<number | string>(currentPage);

  const displayedPages = usePagination({
    totalPageCount: count,
    siblingCount,
    currentPage,
    isDefault: type === PaginationType.Default
  });

  useEffect(() => {
    setInputValue(currentPage);
  }, [currentPage]);

  const onPageClick = (targetPage: number) => {
    onChange(targetPage, PaginationTrigger.PageNr);
  };

  const onPageKeyUp =
    (pageNr: number, trigger: PaginationTrigger = PaginationTrigger.PageNr) =>
    (event: KeyboardEvent) => {
      if (event.key === EventKeys.ENTER || event.key === EventKeys.SPACE) {
        event.preventDefault();
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

  const handleOnInputChange = ({ currentTarget: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(value !== '' ? Number(value) : value);
  };

  const handleAssignInputValue = ({
    currentTarget: { value }
  }: KeyboardEvent<HTMLInputElement> | FocusEvent<HTMLInputElement>) => {
    let newValue = Number(value === '' ? provisionalInputValue : value);

    if (newValue > count) {
      newValue = count;
    } else if (newValue < MIN_ALLOWED_VALUE) {
      newValue = MIN_ALLOWED_VALUE;
    }

    if (newValue !== provisionalInputValue) {
      onChange(newValue, PaginationTrigger.PageNr);
    }

    setInputValue(newValue);
    setProvisionalInputValue(newValue);
  };

  const handleOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === EventKeys.ENTER) {
      handleAssignInputValue(event);
    }
  };

  const getTextColor = () => {
    if (isWhite) {
      return TextColor.White;
    }

    if (disabled) {
      return TextColor.DisableLightTheme;
    }

    return TextColor.DigitalBlack;
  };

  const renderContent = () => {
    if (isInput) {
      return (
        <StyledInputPagination theme={theme}>
          <StyledInput
            theme={theme}
            data-testid={`${dataTestId}-input`}
            value={inputValue}
            onChange={handleOnInputChange}
            onBlur={handleAssignInputValue}
            onKeyDown={handleOnKeyDown}
            max={count}
            min={MIN_ALLOWED_VALUE}
            type="number"
            aria-label={`Page ${inputValue}`}
            disabled={disabled}
          />
          <Text
            dataQaId={`${dataTestId}-input-count`}
            textStyle={TextStyle.MediumSmallDefault}
            color={getTextColor()}
            aria-label={`of ${count}`}
          >{` / ${count}`}</Text>
        </StyledInputPagination>
      );
    }

    if (isCompact) {
      return (
        <li>
          <Text
            dataQaId={`${dataTestId}-pagination-compact`}
            textStyle={TextStyle.SmallDefault}
            color={getTextColor()}
            aria-label={`Page ${currentPage} of ${count}`}
          >{`${currentPage} of ${count}`}</Text>
        </li>
      );
    }

    return (
      displayedPages?.map((pageNr) => {
        const isCurrentPage = pageNr === currentPage;
        if (pageNr === LEFT_DOTS || pageNr === RIGHT_DOTS) {
          return (
            <li data-testid={`${dataTestId}-${pageNr}`} key={pageNr} tabIndex={-1}>
              <StyledDots theme={theme} isWhite={isWhite} $disabled={disabled} aria-label="Ellipsis">
                &#8230;
              </StyledDots>
            </li>
          );
        }
        return (
          <li className="default-pagination" key={pageNr}>
            <Button
              dataTestId={`${dataTestId}-page-${pageNr}`}
              style={ButtonStyle.Transparent}
              selected={isCurrentPage}
              onClick={() => onPageClick(Number(pageNr))}
              onKeyUp={() => onPageKeyUp(Number(pageNr))}
              aria-current={isCurrentPage}
              aria-label={isCurrentPage ? `Page ${pageNr}` : `Go to page ${pageNr}`}
              tabIndex={0}
              text={pageNr}
              negative={isWhite}
              size={buttonSize}
              disabled={disabled}
            />
          </li>
        );
      }) ?? null
    );
  };

  return (
    <StyledContainer data-testid={dataTestId} isWhite={isWhite} theme={theme}>
      <ul>
        <li>
          <Button
            dataTestId={`${dataTestId}-button-previous`}
            style={ButtonStyle.Transparent}
            disabled={isFirstPage || disabled}
            tabIndex={isFirstPage ? -1 : 0}
            onClick={onPrevious}
            onKeyUp={onPreviousKeyUp}
            icon={IconName.ChevronLeft}
            size={buttonSize}
            negative={isWhite}
            aria-label="Go to previous page"
          />
        </li>
        {renderContent()}
        <li>
          <Button
            dataTestId={`${dataTestId}-button-next`}
            style={ButtonStyle.Transparent}
            disabled={isLastPage || disabled}
            tabIndex={isLastPage ? -1 : 0}
            onClick={onNext}
            onKeyUp={onNextKeyUp}
            icon={IconName.ChevronRight}
            size={buttonSize}
            negative={isWhite}
            aria-label="Go to next page"
          />
        </li>
      </ul>
    </StyledContainer>
  );
};
