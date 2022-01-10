export interface ToggleProps {
  onValueChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  checked: boolean;
  error?: string;
}
