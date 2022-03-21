import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import Calendar from '@carlsberggroup/malty.icons.calendar';
import { globalTheme as defaultTheme, TypographyProvider } from '@carlsberggroup/malty.theme.malty-theme-provider';
import React, { ForwardedRef, forwardRef, useContext } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ThemeContext } from 'styled-components';
import { StyledDatepicker, StyledInput } from './Datepicker.styled';
import { DatepickerProps } from './Datepicker.types';

export const Datepicker = ({ startDate, onChange, label }: DatepickerProps) => {
  const theme = useContext(ThemeContext) || defaultTheme;

  const CustomInput = forwardRef(
    ({ value, onClick }: { value: Date; onClick: () => void }, ref: ForwardedRef<HTMLButtonElement>) => (
      <StyledInput theme={theme}>
        <label htmlFor="datepicker-input" onClick={onClick}>
          teste label {label}
        </label>
        <button name="datepicker-input" type="button" className="datepickerInput" onClick={onClick} ref={ref}>
          {value}
          <Calendar size={IconSize.Medium} color={IconColor.Primary} />
        </button>
      </StyledInput>
    )
  );

  return (
    <TypographyProvider>
      <StyledDatepicker>
        <DatePicker selected={startDate} onChange={(date: Date) => onChange(date)} customInput={<CustomInput />} />
      </StyledDatepicker>
    </TypographyProvider>
  );
};
