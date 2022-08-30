export interface ToggleProps extends React.HTMLAttributes<HTMLInputElement> {
  onValueChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  checked: boolean;
  error?: string;
  required?: boolean;
}
