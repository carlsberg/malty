import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { PillProps } from '@carlsberggroup/malty.atoms.pill';

export enum BannerLayout {
  Full = 'full',
  Half = 'half',
  Third = 'third'
}

export interface BannerProps {
  layout?: BannerLayout;
  label?: PillProps | string;
  reverse?: boolean;
  negative?: boolean;
  imageSrc: string;
  imageHeight?: string;
  title: string;
  description?: string;
  dataTestId?: string;
  actions?:
    | {
        variant: ButtonStyle;
        label: string;
        onClick?: () => void;
        url?: string;
        key?: string;
      }[]
    | React.ReactNode
    | JSX.Element;
}
