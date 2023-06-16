import { ButtonProps } from '@carlsberggroup/malty.atoms.button';

export type ActionButtonProps = { key: React.Key } & Pick<
  ButtonProps,
  'color' | 'style' | 'text' | 'negative' | 'url' | 'onClick'
>;

export interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;
  scrollText?: string;
  dataTestId?: string;
  height?: string;
}
