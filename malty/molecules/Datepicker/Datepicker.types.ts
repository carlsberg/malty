export interface DatepickerProps {
  label: string;
  startDate: Date;
  onChange: (date: Date) => void;
  locale?: string;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  excludeDates?: Date[];
  placeholderText?: string;
  selectsRange?: boolean;
  endDate?: Date | null;
  inline?: boolean;
  dateFormat?: string;
  readOnly?: boolean;
  captions?: Caption[];
  primaryAction?: Action;
  secondaryAction?: Action;
}

export type Caption = {
  color: string;
  copy: string;
  border?: string;
};

export type Action = {
  copy: string;
  action: () => void;
};
