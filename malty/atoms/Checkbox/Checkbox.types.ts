export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string;
  checked: boolean;
  labelText?: string;
  error?: string;
  onValueChange: (checked: boolean) => void;
}
