export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  info: {
    icon?: string;
    title: string;
    text: string;
  };
  buttons?: [
    {
      style: string;
      label: string;
      onClick: (open: boolean) => void;
    }
  ];
}

export enum SizeTypes {
  Small = 'Small',
  Medium = 'Medium',
  Large = 'Large'
}

export enum Sizes {
  Small = 16,
  Medium = 24,
  Large = 48
}

export enum LoadingStatus {
  Pending = 'Pending',
  Success = 'Success',
  Failure = 'Failure'
}
