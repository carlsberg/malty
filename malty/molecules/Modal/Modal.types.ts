import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  text: string;
  icon?: IconNamesTypes;
  image?: string;
  buttons?: {
    variant: ButtonStyle;
    label: string;
    onClick: () => void;
  }[];
}
