import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Alert as AlertComponent } from './Alert';
import { AlertColor, AlertProps, AlertSize, AlertType } from './Alert.types';

export default {
  title: 'Information/Alert',
  component: AlertComponent,
  parameters: {
    importObject: 'Alert',
    importPath: '@carlsberggroup/malty.atoms.alert'
  },
  argTypes: {
    type: {
      description: 'Types of Alert',
      options: Object.keys(AlertType),
      mapping: AlertType,
      control: {
        type: 'select',
        label: Object.values(AlertType)
      },
      table: {
        defaultValue: {
          summary: 'AlertType.Banner'
        }
      }
    },
    children: {
      control: 'text',
      description: 'Alert children, can be',
      table: { defaultValue: { summary: 'none' } }
    },
    action: {
      description: 'Add action',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    },
    icon: {
      description: 'Add icon',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    },
    heightSize: {
      description: 'Alert Height size - Only for In Line Alert type without actions. Options are',
      options: Object.keys(AlertSize),
      mapping: AlertSize,
      control: {
        type: 'select',
        label: Object.values(AlertSize)
      },
      table: {
        defaultValue: {
          summary: 'AlertSize.Medium'
        }
      }
    },
    color: {
      description: 'Alert colors, from design predefined colors, as follows.',
      options: Object.keys(AlertColor),
      mapping: AlertColor,
      control: {
        type: 'select',
        label: Object.values(AlertColor)
      },
      table: {
        defaultValue: {
          summary: 'AlertColor.Notification'
        }
      }
    },
    dataQaId: {
      control: 'text',
      description: 'Alert data-qi-id, can be',
      table: { defaultValue: { summary: 'none' } }
    },
    firstActionText: {
      control: 'text',
      description: 'Action',
      table: { defaultValue: { summary: 'none' } }
    },
    secondActionText: {
      control: 'text',
      description: 'Second Action',
      table: { defaultValue: { summary: 'none' } }
    },
    autoHideDuration: {
      control: 'number',
      description: 'Set auto hide duration',
      table: { defaultValue: { summary: '5000' } }
    }
  }
} as Meta;
const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
`;
const Template: Story<AlertProps> = ({ ...args }) => (
  <StyledContainer>
    <AlertComponent {...args} />
  </StyledContainer>
);

export const Alert = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'inline':
    Alert.args = {
      type: AlertType.InLine,
      children: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      icon: false,
      heightSize: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;
  case 'toast':
    Alert.args = {
      type: AlertType.Toast,
      children: 'Hello, Im the Toast Alert! Play with me.',
      action: true,
      heightSize: undefined,
      color: AlertColor.Notification,
      dataQaId: 'toast-alert',
      firstAction: action('Undo Action clicked'),
      firstActionText: 'Undo',
      onHideToast: action('hideToast Action clicked')
    };
    break;
  default:
    Alert.args = {
      type: AlertType.Banner,
      children: 'Hello, Im the Banner Alert! Play with me.',
      action: true,
      icon: true,
      heightSize: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'banner-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      dismiss: action('Dismiss button clicked')
    };
    break;
}
