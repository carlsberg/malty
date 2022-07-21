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

type Caption = {
  color: string;
  copy: string;
};

type Action = {
  copy: string;
  action: () => void;
};
