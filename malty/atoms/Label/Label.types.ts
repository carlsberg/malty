import { SpaceProps } from '@carlsberg/malty.utils.space';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement>, SpaceProps {
  htmlFor?: string;
  label?: string | JSX.Element;
  disabled?: boolean;
  required?: boolean;
  dataTestId?: string;
}

export type StyledLabelProps = {
  disabled?: boolean;
  required?: boolean;
} & SpaceProps;
