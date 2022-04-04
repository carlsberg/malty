import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ForwardedRef, forwardRef, ReactNode, useContext } from 'react';
import DatePicker from 'react-datepicker';
import { ThemeContext } from 'styled-components';
import { StyledCalendar, StyledContainer, StyledDatepicker, StyledInput } from './Datepicker.styled';
import { DatepickerProps } from './Datepicker.types';

export const Datepicker = ({
  startDate,
  onChange,
  label,
  locale,
  minDate,
  maxDate,
  disabled,
  excludeDates,
  ...props
}: DatepickerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const CustomInput = forwardRef(
    ({ value, onClick }: { value: Date; onClick: () => void }, ref: ForwardedRef<HTMLButtonElement>) => (
      <StyledInput theme={theme} disabled={disabled}>
        <label htmlFor="datepicker-input" onClick={onClick}>
          {label}
        </label>
        <button name="datepicker-input" type="button" className="datepickerInput" onClick={onClick} ref={ref}>
          {value}
          <Calendar size={IconSize.Medium} color={IconColor.Primary} />
        </button>
      </StyledInput>
    )
  );

  const Container = ({ children }: { children: ReactNode }) => (
    <StyledContainer>
      <StyledCalendar>{children}</StyledCalendar>
    </StyledContainer>
  );

  return (
    <TypographyProvider>
      <StyledDatepicker>
        <DatePicker
          selected={startDate}
          disabled={disabled}
          onChange={(date: Date) => onChange(date)}
          locale={locale}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          customInput={<CustomInput />}
          showPopperArrow={false}
          calendarClassName="calendar"
          calendarContainer={Container}
          disabledKeyboardNavigation
          calendarStartDay={1}
          useWeekdaysShort
          minDate={minDate}
          maxDate={maxDate}
          excludeDates={excludeDates}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...props}
        />
      </StyledDatepicker>
    </TypographyProvider>
  );
};
