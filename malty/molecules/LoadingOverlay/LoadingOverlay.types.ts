import { LoadingColor } from '@carlsberggroup/malty.molecules.loading/Loading.types';

export interface LoadingOverlayProps {
  dataTestId?: string;
  text?: string;
  overlayPositionFixed?: boolean;
  zIndex?: number;
  color?: LoadingColor;
}
