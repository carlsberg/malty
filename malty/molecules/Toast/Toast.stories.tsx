import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Toast } from './Toast';
import { ToastColor, ToastProps } from './Toast.types';

const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
`;

const meta: Meta<ToastProps> = {
  title: 'Information/Toast',
  component: Toast,
  parameters: {
    importObject: 'Toast',
    importPath: '@carlsberg/malty.molecules.toast'
  },
  render: (args) => (
    <StyledContainer>
      <Toast {...args} />
    </StyledContainer>
  ),
  argTypes: {
    message: {
      control: 'text',
      description: 'Message to be displayed'
    },
    color: {
      description: 'Toast colors, from design predefined colors, as follows.',
      options: Object.keys(ToastColor),
      mapping: ToastColor,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: ToastColor.Notification
        }
      }
    },
    showCloseIcon: {
      description: 'If true close icon is displayed',
      control: 'boolean',
      table: {
        category: 'Icon'
      }
    },
    onClose: {
      description: 'function to be called when close icon is clicked',
      table: {
        category: 'Events'
      }
    },
    customActionText: {
      control: 'text',
      description: 'Text to be diplayed as custom action'
    },
    onCustomAction: {
      description: 'function to be called when custom action button is clicked',
      table: {
        category: 'Events'
      }
    },
    autoHideDuration: {
      control: 'number',
      description: 'Set auto hide duration'
    },
    dataQaId: {
      control: 'text',
      description: 'Toast data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ToastProps>;

export const Base: Story = {
  args: {
    message: 'Hello, Im the Toast Alert! Play with me.',
    color: ToastColor.Notification,
    showCloseIcon: true,
    dataQaId: 'toast-alert'
  }
};

export const Custom: Story = {
  args: {
    ...Base.args,
    customActionText: 'Action',
    onCustomAction: action('Custom Action clicked')
  }
};

export default meta;
