import { Button, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { KeyboardEvent, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
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
  StyledLabel,
  StyledWrapper
} from './Datepicker.styled';
import { Colors, DatepickerProps, DatepickerSize } from './Datepicker.types';

export const Datepicker = ({
  startDate,
  endDate,
  onChange,
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
  ...props
}: DatepickerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;
  const [numSize, setNumSize] = useState(theme.sizes.xl.value);
  const colors = useColorsMapping();
  const id = useMemo(() => uuid(), []);
  const [open, setOpen] = useState(false);
  const startDateRef = useRef<Date | null>(startDate);
  const endDateRef = useRef<Date | null | undefined>(endDate);

  const handleClose = useCallback(() => setOpen(false), []);
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
    if (event.key === 'Escape') {
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

  const Container = ({ children }: { children: ReactNode }) => (
    <StyledContainer theme={theme}>
      <StyledCalendar theme={theme}>{children}</StyledCalendar>
    </StyledContainer>
  );

  const renderDatepickerCaptions = () => {
    if (!captions || !captions.length) {
      return null;
    }
    return (
      <StyledCaptionContainer>
        {captions.map(({ color, borderColor, dotted, label: captionLabel }, index) => (
          <StyledCaption
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
            style={ButtonStyle.Secondary}
            text={secondaryAction.label}
            fullWidth
            onClick={handleSecondaryAction}
          />
        )}
        {primaryAction && (
          <Button style={ButtonStyle.Primary} text={primaryAction.label} fullWidth onClick={handlePrimaryAction} />
        )}
      </StyledActionsContainer>
    );
  };

  return (
    <TypographyProvider>
      <StyledWrapper theme={theme}>
        {!inline && label && (
          <StyledLabel htmlFor={id} disabled={disabled} theme={theme}>
            {label}
          </StyledLabel>
        )}
        <StyledDatepicker size={numSize} disabled={disabled} readOnly={readOnly} theme={theme}>
          {!inline && (
            <StyledInputIcon disabled={disabled} readOnly={readOnly} theme={theme}>
              <Calendar size={IconSize.Medium} color={IconColor.DigitalBlack} />
            </StyledInputIcon>
          )}

          <DatePicker
            id={id}
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
            calendarContainer={Container}
            calendarStartDay={1}
            useWeekdaysShort
            minDate={minDate}
            maxDate={maxDate}
            excludeDates={excludeDates}
            className="datepickerInput"
            inline={inline}
            selectsRange={selectsRange}
            placeholderText={placeholderText}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
          >
            {renderDatepickerCaptions()}
            {renderActions()}
          </DatePicker>
        </StyledDatepicker>
      </StyledWrapper>
    </TypographyProvider>
  );
};
