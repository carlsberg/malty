import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface ToggleProps extends React.HTMLAttributes<HTMLInputElement>, SpaceProps {
  onValueChange: (value: boolean) => void;
  label?: string;
  disabled?: boolean;
  checked?: boolean;
  error?: string;
  required?: boolean;
  dataTestId?: string;
}
