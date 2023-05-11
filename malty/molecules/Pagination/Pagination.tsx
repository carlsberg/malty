import { Button, ButtonSize, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { EventKeys } from '@carlsberggroup/malty.utils.consts';
import React, { ChangeEvent, FocusEvent, KeyboardEvent, useContext, useState } from 'react';
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
  dataQaId,
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

  const renderContent = () => {
    if (isInput) {
      return (
        <StyledInputPagination theme={theme}>
          <StyledInput
            theme={theme}
            data-testid={`${dataQaId}-input`}
            value={inputValue}
            onChange={handleOnInputChange}
            onBlur={handleAssignInputValue}
            onKeyDown={handleOnKeyDown}
            max={count}
            min={MIN_ALLOWED_VALUE}
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
