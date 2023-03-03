import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';

export enum ModalSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  dismissible?: boolean;
  whiteBackground?: boolean;
  content: React.ReactNode | JSX.Element;
  size?: ModalSize;
  overlayZindex?: number;
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
