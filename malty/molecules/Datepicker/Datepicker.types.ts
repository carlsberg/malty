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
  shouldCloseOnSelect?: boolean;
}

export type Caption = {
  color: string;
  label: string;
  borderColor?: string;
  dotted?: boolean;
};

export type Action = {
  label: string;
  action?: () => void;
};
