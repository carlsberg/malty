export interface RatingProps {
  name: string;
  label: string;
  value: number;
  editing?: boolean;
  className?: string;
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
