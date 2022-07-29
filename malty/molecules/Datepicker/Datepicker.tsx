import { Button, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ReactNode, useCallback, useContext, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { ThemeContext } from 'styled-components';
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
import { DatepickerProps } from './Datepicker.types';

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
  captions,
  primaryAction,
  secondaryAction,
  ...props
}: DatepickerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const [open, setOpen] = useState(false);

  const start = useRef<Date | null | undefined>(startDate);
  const end = useRef<Date | null | undefined>(endDate);

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

  const handleSelect = (date: Date, event: React.SyntheticEvent<HTMLDivElement, Event>) => {
    if (event.key === 'Enter') {
      if (!selectsRange && startDate) {
        handleClose();
        return;
      }
      if (start.current && end.current) {
        start.current = date;
        end.current = null;
        return;
      }
      if (start.current && date < start.current) {
        start.current = date;
        end.current = null;
        return;
      }
      if (start.current && date > start.current) {
        end.current = date;
        handleClose();
      }
    }
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  const Container = ({ children }: { children: ReactNode }) => (
    <StyledContainer theme={theme}>
      <StyledCalendar theme={theme}>{children}</StyledCalendar>
    </StyledContainer>
  );

  const renderDatepickerCaptions = () => {
    if (!captions) {
      return null;
    }
    return (
      <StyledCaptionContainer>
        {captions.map((caption, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <StyledCaption color={caption.color} borderColor={caption.borderColor} key={`datepicker-caption-${index}`}>
            <Text textStyle={TextStyle.SmallDefault}>{caption.copy}</Text>
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
          <Button style={ButtonStyle.Secondary} text={secondaryAction.copy} fullWidth onClick={handleSecondaryAction} />
        )}
        {primaryAction && (
          <Button style={ButtonStyle.Primary} text={primaryAction.copy} fullWidth onClick={handlePrimaryAction} />
        )}
      </StyledActionsContainer>
    );
  };

  return (
    <TypographyProvider>
      <StyledWrapper theme={theme}>
        {!inline && (
          <StyledLabel htmlFor={id} disabled={disabled} theme={theme}>
            {label}
          </StyledLabel>
        )}
        <StyledDatepicker disabled={disabled} readOnly={readOnly} theme={theme}>
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
            onChange={onChange}
            onFocus={handleOpen}
            onSelect={handleSelect}
            onClickOutside={handleClose}
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
            shouldCloseOnSelect={!selectsRange}
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
