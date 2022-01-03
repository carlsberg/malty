export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  value: string | number;
  name: string;
  labelText: string;
  error?: string;
  selected?: boolean;
  disabled?: boolean;
  onValueChange: (value: string | number) => void;
}
