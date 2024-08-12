import { ButtonColor, ButtonStyle } from '@carlsberg/malty.atoms.button';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Modal } from './Modal';
import { ActionButtonProps, ModalProps, ModalSize } from './Modal.types';

const ModalComponent = ({ open, ...props }: ModalProps) => {
  const [openModal, setOpenModal] = useState(open);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <div style={{ height: '600px', width: '1200px' }}>
      <button type="button" onClick={toggleModal}>
        Toggle Modal
      </button>
      <Modal {...props} open={openModal} onClose={toggleModal} />
    </div>
  );
};

const meta: Meta<ModalProps> = {
  title: 'Overlays/Modal',
  component: Modal,
  parameters: {
    importObject: 'Modal',
    importPath: '@carlsberg/malty.molecules.modal'
  },
  render: (args) => <ModalComponent {...args} />,
  argTypes: {
    open: {
      description: 'The boolean state that controls whether the Modal is open or not',
      control: 'none'
    },
    onClose: {
      description: 'Function that will run when the user closes the modal',
      control: 'none',
      table: {
        category: 'Events'
      }
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
      description:
        'An array of maximum 2 actions structured as such "ActionButtonProps[] | React.ReactNode | JSX.Element"',
      table: {
        category: 'Events'
      }
    },
    whiteBackground: {
      control: 'boolean',
      description: 'If true background overlay turns white instead of grayish',
      table: {
        category: 'Styling'
      }
    },
    overlayZindex: {
      control: 'number',
      description: 'Controls the z-index of the modal overlay',
      table: {
        category: 'Styling'
      }
    },
    size: {
      control: {
        type: 'select'
      },
      options: Object.values(ModalSize),
      description: 'Picks the size of the modal',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: ModalSize.Medium
        }
      }
    },
    content: {
      description: 'Body content of the modal'
    }
  }
};

const actions: ActionButtonProps[] = [
  {
    key: 'cancel',
    text: 'Cancel',
    style: ButtonStyle.Secondary,
    color: ButtonColor.DigitalBlack,
    onClick: () => alert('secondary button pressed')
  },
  {
    key: 'confirm',
    text: 'Confirm',
    style: ButtonStyle.Primary,
    color: ButtonColor.ThemePrimary,
    onClick: () => alert('primary button pressed')
  }
];

type Story = StoryObj<ModalProps>;

export const Base: Story = {
  args: {
    title: 'Headline',
    content: <p>Anything you want</p>,
    open: true,
    dismissible: true,
    whiteBackground: false,
    size: ModalSize.Medium,
    overlayZindex: 999,
    actions
  }
};

export default meta;
