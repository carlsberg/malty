export interface DatepickerProps {
  label: string;
  startDate: Date;
  onChange: (date: Date) => void;
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  excludeDates?: Date[];
}
