export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  value: string | number;
  name: string;
  label: string;
  error?: string;
  selected?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string | number) => void;
  required?: boolean;
  dataTestId?: string;
  readOnly?: boolean;
}
