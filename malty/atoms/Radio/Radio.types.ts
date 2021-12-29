export interface RadioProps extends React.HTMLAttributes<HTMLParagraphElement> {
  value: string | number;
  name: string;
  labelText: string;
  error?: string;
  selected?: boolean;
  disabled?: boolean;
  onValueChange: (value: string | number) => void;
}
