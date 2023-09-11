import { TextColor } from '@carlsberggroup/malty.atoms.text';

export interface StockStatusProps {
  label: string;
  labelColor?: TextColor;
  stockColor?: TextColor;
  availability?: string;
  withMarginBottom?: boolean;
  dataTestId?: string;
}
