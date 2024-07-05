import { Button, ButtonStyle } from '@carlsberg/malty.atoms.button';
import { Label } from '@carlsberg/malty.atoms.label';
import { Text, TextStyle } from '@carlsberg/malty.atoms.text';
import { Calendar } from '@carlsberg/malty.icons.calendar';
import { globalTheme as defaultTheme } from '@carlsberg/malty.theme.malty-theme-provider';
import { EventKeys } from '@carlsberg/malty.utils.consts';
import { isolateSpaceProps } from '@carlsberg/malty.utils.space';
import React, { FC, KeyboardEvent, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ThemeContext } from 'styled-components';
import { v4 as uuid } from 'uuid';
import { useColorsMapping } from './Datepicker.helper';
import {
  StyledActionsContainer,
  StyledCalendar,
  StyledCaption,
  StyledCaptionContainer,
  StyledContainer,
  StyledDatepicker,
  StyledInputIcon,
  StyledWrapper
} from './Datepicker.styled';
import { Colors, DatepickerProps, DatepickerSize } from './Datepicker.types';

const DATE_PICKER_INPUT_CLASSNAME = 'datepickerInput';
export const DATE_PICKER_DEFAULT_FORMAT = 'MM/dd/yyyy';

export const Container: FC<{ withoutBorder?: boolean }> = ({ children, withoutBorder }) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  return (
    <StyledContainer theme={theme} withoutBorder={withoutBorder}>
      <StyledCalendar theme={theme}>{children}</StyledCalendar>
    </StyledContainer>
  );
};

export const Datepicker = ({
  startDate,
  endDate,
  onChange,
  onClose,
  label,
  locale,
  minDate,
  maxDate,
  disabled,
  excludeDates,
  selectsRange,
  inline,
  readOnly,
  placeholderText,
  captions,
  primaryAction,
  secondaryAction,
  shouldCloseOnSelect = true,
  size = DatepickerSize.Medium,
  required,
  dataTestId,
  withPortal,
  withoutBorder,
  dateFormat = DATE_PICKER_DEFAULT_FORMAT,
  ...props
}: DatepickerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.xl.value);
  const colors = useColorsMapping();
  const id = useMemo(() => uuid(), []);
  const [open, setOpen] = useState(false);
  const startDateRef = useRef<Date | null>(startDate);
  const endDateRef = useRef<Date | null | undefined>(endDate);
  const datepickerRef = useRef<HTMLDivElement>(null);
  const { spaceProps, restProps } = isolateSpaceProps(props);

  const handleClose = useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose]);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handlePrimaryAction = () => {
    primaryAction?.action?.();
    handleClose();
  };

  const handleSecondaryAction = () => {
    secondaryAction?.action?.();
    handleClose();
  };

  const handleChange = (date: (Date | null) | [Date | null, Date | null]) => {
    if (Array.isArray(date)) {
      [startDateRef.current, endDateRef.current] = date;
    } else {
      startDateRef.current = date;
    }

    onChange(date);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === EventKeys.ESCAPE) {
      handleClose();
    }
  };

  const handleSelect = () => {
    if (!shouldCloseOnSelect) {
      return;
    }

    if ((!selectsRange && startDateRef.current) || (startDateRef.current && endDateRef.current)) {
      handleClose();
    }
  };

  useEffect(() => {
    switch (size) {
      case DatepickerSize.Large: {
        setNumSize(theme.sizes['2xl'].value);
        break;
      }

      default: {
        setNumSize(theme.sizes.xl.value);
        break;
      }
    }
  }, [size, theme]);

  // This will set the input as readonly since the library doesn't provide a proper way to edit dates from the input directly ATM",
  useEffect(() => {
    if (selectsRange && datepickerRef.current) {
      const inputElement = datepickerRef.current.querySelector(`.${DATE_PICKER_INPUT_CLASSNAME}`) as
        | HTMLInputElement
        | undefined;
      if (inputElement) {
        inputElement.readOnly = true;
      }
    }
  }, [selectsRange]);

  const renderDatepickerCaptions = () => {
    if (!captions || !captions.length) {
      return null;
    }
    return (
      <StyledCaptionContainer>
        {captions.map(({ color, borderColor, dotted, label: captionLabel }, index) => (
          <StyledCaption
            data-testid={`${dataTestId}-caption-${index}`}
            color={colors[color]}
            borderColor={borderColor ? colors[borderColor] : colors[Colors.Transparent]}
            dotted={dotted}
            // eslint-disable-next-line react/no-array-index-key
            key={`datepicker-caption-${index}`}
          >
            <Text textStyle={TextStyle.SmallDefault}>{captionLabel}</Text>
          </StyledCaption>
        ))}
      </StyledCaptionContainer>
    );
  };

  const renderActions = () => {
    if (!primaryAction && !secondaryAction) {
      return null;
    }
    return (
      <StyledActionsContainer>
        {secondaryAction && (
          <Button
            dataTestId={`${dataTestId}-secondary-action`}
            style={ButtonStyle.Secondary}
            text={secondaryAction.label}
            fullWidth
            onClick={handleSecondaryAction}
          />
        )}
        {primaryAction && (
          <Button
            dataTestId={`${dataTestId}-primary-action`}
            style={ButtonStyle.Primary}
            text={primaryAction.label}
            fullWidth
            onClick={handlePrimaryAction}
          />
        )}
      </StyledActionsContainer>
    );
  };

  return (
    <StyledWrapper theme={theme} {...spaceProps}>
      {!inline && <Label label={label} htmlFor={id} required={required} disabled={disabled} />}
      <StyledDatepicker
        data-testid={dataTestId}
        size={numSize}
        disabled={disabled}
        readOnly={readOnly}
        isOpen={open}
        theme={theme}
        ref={datepickerRef}
      >
        {!inline && (
          <StyledInputIcon disabled={disabled} readOnly={readOnly} theme={theme} datePickerSize={numSize}>
            <Calendar />
          </StyledInputIcon>
        )}

        <DatePicker
          id={id}
          required={required}
          selected={startDate}
          startDate={startDate}
          endDate={selectsRange ? endDate : null}
          disabled={disabled}
          readOnly={readOnly}
          open={open}
          onChange={handleChange}
          onFocus={!readOnly && !disabled ? handleOpen : undefined}
          onSelect={handleSelect}
          onClickOutside={handleClose}
          onKeyDown={handleKeyDown}
          locale={locale}
          showPopperArrow={false}
          calendarClassName="calendar"
          calendarContainer={({ children }) => Container({ children, withoutBorder: withoutBorder && inline })}
          calendarStartDay={1}
          useWeekdaysShort
          minDate={minDate}
          maxDate={maxDate}
          excludeDates={excludeDates}
          className={DATE_PICKER_INPUT_CLASSNAME}
          inline={inline}
          selectsRange={selectsRange}
          placeholderText={placeholderText}
          showYearDropdown
          dropdownMode="select"
          dateFormatCalendar="MMMM"
          dateFormat={dateFormat}
          shouldCloseOnSelect={shouldCloseOnSelect}
          withPortal={withPortal}
          {...restProps}
        >
          {renderDatepickerCaptions()}
          {renderActions()}
        </DatePicker>
      </StyledDatepicker>
    </StyledWrapper>
  );
};
