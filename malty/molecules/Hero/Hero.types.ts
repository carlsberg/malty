import { ButtonProps } from '@carlsberg/malty.atoms.button';
import { HeadlineProps } from '@carlsberg/malty.atoms.headline';

export type ActionButtonProps = { key: React.Key } & Pick<
  ButtonProps,
  'color' | 'style' | 'text' | 'negative' | 'url' | 'onClick'
>;

export interface HeroProps {
  title: string;
  titleAs?: HeadlineProps['as'];
  description: string;
  descriptionAs?: HeadlineProps['as'];
  imageSrc: string;
  actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;
  scrollText?: string;
  dataTestId?: string;
  height?: string;
}
