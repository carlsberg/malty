import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { PillProps } from '@carlsberggroup/malty.atoms.pill';

export interface HeroProps {
  layout?: HeroLayout;
  label?: PillProps | string;
  reverse?: boolean;
  negative?: boolean;
  imageSrc: string;
  title: string;
  description?: string;
  dataTestId?: string;
  actions?:
    | {
        variant: ButtonStyle;
        label: string;
        onClick: () => void;
        key?: string;
      }[]
    | React.ReactNode
    | JSX.Element;
}

export enum HeroLayout {
  Full = 'full',
  Half = 'half',
  Third = 'third'
}
