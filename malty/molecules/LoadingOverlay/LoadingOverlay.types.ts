import { LoadingColor } from '@carlsberg/malty.molecules.loading';

export interface LoadingOverlayProps {
  dataTestId?: string;
  text?: string;
  overlayPositionFixed?: boolean;
  zIndex?: number;
  color?: LoadingColor;
}
