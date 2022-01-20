import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Modal as ModalComponent } from './Modal';

export default {
  title: 'Molecules/Modal',
  component: ModalComponent,
  parameters: {
    importObject: 'Modal',
    importPath: '@carlsberggroup/malty.molecules.modal'
  }
} as Meta;

const Template: Story = () => <ModalComponent />;

export const Modal = Template.bind({});
