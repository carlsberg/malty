export interface RatingProps {
  name: string;
  label: string;
  value: number;
  readOnly?: boolean;
  disabled?: boolean;
  totalReview?: number;
  onStarClick?: (index: number, value: number, name: string, e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  onStarHover?: (index: number, value: number, name: string, e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  onStarHoverOut?: (
    index: number,
    value: number,
    name: string,
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) => void;
  dataTestId?: string;
}
