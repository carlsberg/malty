import { ButtonProps } from '@carlsberg/malty.atoms.button';
import { PillProps } from '@carlsberg/malty.atoms.pill';
import { SpaceProps } from '@carlsberg/malty.utils.space';

export enum BannerLayout {
  Full = 'full',
  Half = 'half',
  Third = 'third'
}

export type ActionButtonProps = { key: React.Key } & Pick<
  ButtonProps,
  'color' | 'style' | 'text' | 'negative' | 'url' | 'onClick'
>;

export interface BannerProps extends SpaceProps {
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

export type StyledBannerContainerProps = {
  negative: boolean;
  reverse: boolean;
  layout: BannerLayout;
} & SpaceProps;
