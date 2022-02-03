import { ButtonStyle } from '@carlsberggroup/malty.atoms.button';
import { IconNamesTypes } from '@carlsberggroup/malty.atoms.icon';
import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Modal as ModalComponent } from './Modal';

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
      description: 'Is the modal open?'
    }
  }
} as Meta;

const Template: Story = () => {
  const [open, setOpen] = useState(true);
  const toggleModal = () => setOpen(!open);
  const info = {
    title: 'Headline',
    text: `Paragraph block to support main headline(optional)
    And…it can have 2 lines, more than that is just boring…`,
    icon: IconNamesTypes.ItemCheck
  };
  const buttons = [
    {
      variant: ButtonStyle.Secondary,
      label: 'Cancel',
      onClick: toggleModal
    },
    {
      variant: ButtonStyle.Primary,
      label: 'Confirm',
      onClick: () => alert('primay button pressed')
    }
  ];
  return (
    <>
      <button type="button" onClick={toggleModal}>
        Toggle Modal
      </button>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        info={info}
        buttons={buttons}
        image="https://source.unsplash.com/user/c_v_r/220x280"
      />
    </>
  );
};

export const Modal = Template.bind({});
