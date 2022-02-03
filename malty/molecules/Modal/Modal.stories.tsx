import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Modal as ModalComponent } from './Modal';
import { ModalProps } from './Modal.types';

export default {
  title: 'Molecules/Modal',
  component: ModalComponent,
  parameters: {
    importObject: 'Modal',
    importPath: '@carlsberggroup/malty.molecules.modal'
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'The bolean state that controlls whether the Modal is open or not'
    },
    setOpen: {
      description: `The useState function that controlls the "open" state`
    },
    title: {
      control: 'text',
      description: 'Modal title'
    },
    text: {
      control: 'text',
      description: 'Modal text'
    },
    icon: {
      control: {
        type: 'select',
        options: IconNamesTypes
      },
      description: 'Main Icon displayed'
    },
    image: {
      control: 'text',
      description: 'Image source url'
    },
    buttons: {
      control: '',
      description: 'An array of maximum 2 buttons '
    }
  }
} as Meta;

const Template: Story<ModalProps> = ({ title, text, icon, image, buttons }: ModalProps) => {
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);
  return (
    <>
      <div style={{ height: '600px', width: '500px' }}>
        <button type="button" onClick={toggleModal}>
          Toggle Modal
        </button>
        <ModalComponent
          open={open}
          setOpen={setOpen}
          title={title}
          text={text}
          icon={icon}
          image={image}
          buttons={buttons}
        />
      </div>
    </>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  title: 'Headline',
  text: `Paragraph block to support main headline(optional)
  And…it can have 2 lines, more than that is just boring…`,
  icon: IconNamesTypes.ItemCheck,
  image: 'https://source.unsplash.com/user/c_v_r/220x280',
  buttons: [
    {
      variant: ButtonStyle.Secondary,
      label: 'Cancel',
      onClick: () => alert('primay button pressed')
    },
    {
      variant: ButtonStyle.Primary,
      label: 'Confirm',
      onClick: () => alert('primay button pressed')
    }
  ]
};
