import { ButtonColor, ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Modal as ModalComponent } from './Modal';
import { ModalProps, ModalSize } from './Modal.types';

export default {
  title: 'Overlays/Modal',
  component: ModalComponent,
  parameters: {
    importObject: 'Modal',
    importPath: '@carlsberggroup/malty.molecules.modal'
  },
  argTypes: {
    open: {
      description: 'The bolean state that controlls whether the Modal is open or not',
      control: ''
    },
    setOpen: {
      description: `The useState function that controlls the "open" state`
    },
    title: {
      control: 'text',
      description: 'Modal title'
    },
    dismissible: {
      control: 'boolean',
      description: 'Defines if the user has the ability to close the Modal'
    },
    actions: {
      control: '',
      description: 'An array of maximum 2 actions structured as such "ActionButton[] | React.ReactNode | JSX.Element"'
    },
    whiteBackground: {
      control: 'boolean',
      description: 'If true background overlay turns white instead of grayish'
    },
    overlayZindex: {
      control: 'number',
      description: 'Controls the z-index of the modal overlay'
    },
    size: {
      control: {
        type: 'select'
      },
      options: Object.values(ModalSize),
      description: 'Picks the size of the modal'
    }
  }
} as Meta;

const Template: Story<ModalProps> = ({
  title,
  content,
  actions,
  dismissible,
  whiteBackground,
  size,
  overlayZindex
}: ModalProps) => {
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);
  return (
    <div style={{ height: '600px', width: '1200px' }}>
      <button type="button" onClick={toggleModal}>
        Toggle Modal
      </button>
      <ModalComponent
        open={open}
        content={content}
        dismissible={dismissible}
        onClose={toggleModal}
        title={title}
        actions={actions}
        whiteBackground={whiteBackground}
        size={size}
        overlayZindex={overlayZindex}
      />
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  title: 'Headline',
  content: <p>Anything you want</p>,
  dismissible: true,
  whiteBackground: false,
  size: ModalSize.Medium,
  overlayZindex: 999,
  actions: [
    {
      text: 'Cancel',
      style: ButtonStyle.Secondary,
      color: ButtonColor.DigitalBlack,
      onClick: () => alert('secondary button pressed')
    },
    {
      text: 'Confirm',
      style: ButtonStyle.Primary,
      color: ButtonColor.ThemePrimary,
      onClick: () => alert('primary button pressed')
    }
  ]
};
