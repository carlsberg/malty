import { Button, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { Text, TextStyle } from '@carlsberggroup/malty.atoms.text';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ReactNode, useContext } from 'react';
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
        {secondaryAction && <Button style={ButtonStyle.Secondary} text={secondaryAction.copy} fullWidth />}
        {primaryAction && <Button style={ButtonStyle.Primary} text={primaryAction.copy} fullWidth />}
      </StyledActionsContainer>
    );
  };

  return (
    <TypographyProvider>
      <StyledWrapper theme={theme}>
        {!inline && (
          <StyledLabel disabled={disabled} htmlFor="datepicker-input" theme={theme}>
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
            selected={startDate}
            startDate={startDate}
            endDate={selectsRange ? endDate : null}
            disabled={disabled}
            readOnly={readOnly}
            onChange={onChange}
            locale={locale}
            showPopperArrow={false}
            calendarClassName="calendar"
            calendarContainer={Container}
            disabledKeyboardNavigation
            calendarStartDay={1}
            useWeekdaysShort
            minDate={minDate}
            maxDate={maxDate}
            excludeDates={excludeDates}
            className="datepickerInput"
            inline={inline}
            selectsRange={selectsRange}
            shouldCloseOnSelect={!selectsRange}
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
