import { ButtonProps } from '@carlsberggroup/malty.atoms.button';

export enum ModalSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export type ActionButton = { key?: string } & Pick<ButtonProps, 'text' | 'style' | 'color' | 'onClick'>;

export type Actions = ActionButton[] | React.ReactNode | JSX.Element;

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  dismissible?: boolean;
  whiteBackground?: boolean;
  content: React.ReactNode | JSX.Element;
  size?: ModalSize;
  overlayZindex?: number;
  actions?: Actions;
}
