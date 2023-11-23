import { SpaceProps } from '@carlsberggroup/malty.utils.space';

export interface RatingProps extends SpaceProps {
  name: string;
  label: string;
  value: number;
  readOnly?: boolean;
  disabled?: boolean;
  totalReview?: number;
  onStarClick?: (index: number, value: number, name: string, e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
  dataTestId?: string;
}
