export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  htmlFor?: string;
  label?: string | JSX.Element;
  disabled?: boolean;
  required?: boolean;
  dataTestId?: string;
}
