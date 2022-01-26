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
    icon: 'ItemCheck',
    title: 'Headline',
    text: `Paragraph block to support main headline(optional)
    And…it can have 2 lines, more than that is just boring…`
  };
  const buttons = [
    {
      style: 'secondary',
      label: 'Cancel',
      onClick: toggleModal
    },
    {
      style: 'primary',
      label: 'Confirm',
      onClick: () => console.log('ye')
    }
  ];
  return (
    <>
      <button type="button" onClick={toggleModal}>
        Toggle Modal
      </button>
      <ModalComponent open={open} setOpen={setOpen} info={info} buttons={buttons} />
    </>
  );
};

export const Modal = Template.bind({});
