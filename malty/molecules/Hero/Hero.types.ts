import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';

export interface ActionButtonProps {
  color: ButtonColor;
  style: ButtonStyle;
  label: string;
  negative?: boolean;
  url?: string;
  key?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;
  scroll?: string;
  dataTestId?: string;
  height?: string;
}
