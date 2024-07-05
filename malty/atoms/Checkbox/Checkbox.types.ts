import { SpaceProps } from '@carlsberg/malty.utils.space';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement>, SpaceProps {
  value?: string | number;
  checked?: boolean;
  labelText?: string;
  error?: string;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
  required?: boolean;
  isIndeterminate?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

export type StyledCheckboxContainerProps = {
  fullWidth?: boolean;
} & SpaceProps;
