import { SpaceProps } from '@carlsberg/malty.utils.space';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement>, SpaceProps {
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
