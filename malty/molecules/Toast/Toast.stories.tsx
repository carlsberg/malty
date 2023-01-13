import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Toast as ToastComponent } from './Toast';
import { ToastColor, ToastProps } from './Toast.types';

export default {
  title: 'Information/Toast',
  component: ToastComponent,
  parameters: {
    importObject: 'Toast',
    importPath: '@carlsberggroup/malty.molecules.toast',
    variants: ['custom'],
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'Message to be displayed',
    },
    color: {
      description: 'Toast colors, from design predefined colors, as follows.',
      options: Object.keys(ToastColor),
      mapping: ToastColor,
      control: {
        type: 'select',
        label: Object.values(ToastColor),
      },
      table: {
        defaultValue: {
          summary: 'ToastColor.Notification',
        },
      },
    },
    showCloseIcon: {
      description: 'If true close icon is displayed',
      control: 'boolean',
    },
    onClose: {
      description: 'function to be called when close icon is clicked',
    },
    customActionText: {
      control: 'text',
      description: 'Text to be diplayed as custom action',
      table: { defaultValue: { summary: 'none' } },
    },
    onCustomAction: {
      description: 'function to be called when custom action button is clicked',
    },
    autoHideDuration: {
      control: 'number',
      description: 'Set auto hide duration',
    },
    dataQaId: {
      control: 'text',
      description: 'Alert data-qi-id, can be',
      table: { defaultValue: { summary: 'none' } },
    },
  },
} as Meta;
const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
`;
const Template: Story<ToastProps> = ({ ...args }) => (
  <StyledContainer>
    <ToastComponent {...args} />
  </StyledContainer>
);

export const Toast = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');
switch (variant) {
  case 'custom':
    Toast.args = {
      message: 'Hello, Im the Toast Alert! Play with me.',
      color: ToastColor.Notification,
      customActionText: 'Action',
      onCustomAction: action('Custom Action clicked'),
      dataQaId: 'toast-alert',
    };
    break;
  default:
    Toast.args = {
      message: 'Hello, Im the Toast Alert! Play with me.',
      color: ToastColor.Notification,
      showCloseIcon: true,
      dataQaId: 'toast-alert',
    };
    break;
}
