export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string | number;
  checked?: boolean;
  labelText?: string;
  error?: string;
  onValueChange: (checked: boolean) => void;
  required?: boolean;
}
