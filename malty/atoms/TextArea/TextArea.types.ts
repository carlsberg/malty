export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value?: string;
  label?: string;
  placeholder?: string;
  resize?: boolean;
  disabled?: boolean;
  onValueChange: (value: string) => void;
  error?: string;
  hint?: string;
  maxLength?: number;
  readOnly?: boolean;
  dataTestId?: string;
  required?: boolean;
}
