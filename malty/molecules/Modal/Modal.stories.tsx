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
  return <ModalComponent open={open} setOpen={setOpen} />;
};

export const Modal = Template.bind({});
