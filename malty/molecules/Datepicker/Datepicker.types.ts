export interface DatepickerProps {
  label: string;
  startDate: Date | null;
  onChange: (date: (Date | null) | [Date | null, Date | null]) => void;
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
  borderColor?: string;
};

export type Action = {
  copy: string;
  action?: () => void;
};
