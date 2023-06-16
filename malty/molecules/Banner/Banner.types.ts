import { ButtonProps } from '@carlsberggroup/malty.atoms.button';
import { PillProps } from '@carlsberggroup/malty.atoms.pill';

export enum BannerLayout {
  Full = 'full',
  Half = 'half',
  Third = 'third'
}

export type ActionButtonProps = { key: React.Key } & Pick<
  ButtonProps,
  'color' | 'style' | 'text' | 'negative' | 'url' | 'onClick'
>;

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
  actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;
}
