import { ButtonProps } from '@carlsberggroup/malty.atoms.button';

export enum ModalSize {
  Medium = 'Medium',
  Large = 'Large',
  XLarge = 'XLarge'
}

export type ActionButtonProps = { key: React.Key } & Pick<ButtonProps, 'text' | 'style' | 'color' | 'onClick'>;

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  dismissible?: boolean;
  whiteBackground?: boolean;
  content: React.ReactNode | JSX.Element;
  size?: ModalSize;
  overlayZindex?: number;
  actions?: ActionButtonProps[] | React.ReactNode | JSX.Element;
}
