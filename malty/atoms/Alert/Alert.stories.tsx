import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Alert as AlertComponent } from './Alert';
import { AlertBackgroundColor, AlertHeightSizeTypes, AlertProps, AlertType } from './Alert.types';

export default {
  title: 'Atoms/Alert',
  component: AlertComponent,
  parameters: {
    importObject: 'Alert',
    importPath: '@carlsberggroup/malty.atoms.alert'
  },
  argTypes: {
    type: {
      description: 'Types of Alert',
      options: Object.values(AlertType),
      table: { defaultValue: { summary: 'Banner' } },
      control: {
        type: 'radio'
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
      options: Object.values(AlertHeightSizeTypes),
      description: 'Alert Height size - Only for In Line Alert type without actions. Options are',
      table: {
        defaultValue: {
          summary: 'medium'
        }
      },
      control: {
        type: 'radio'
      }
    },
    color: {
      options: Object.values(AlertBackgroundColor),
      control: {
        type: 'select'
      },
      description: 'Alert colors, from design predefined colors, as follows.',
      table: {
        defaultValue: {
          summary: 'Notification'
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
    }
  }
} as Meta;

const Template: Story<AlertProps> = ({ ...args }) => <AlertComponent {...args} />;

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
      heightSize: AlertHeightSizeTypes.Medium,
      color: AlertBackgroundColor.Notification,
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
      icon: true,
      heightSize: undefined,
      color: AlertBackgroundColor.Notification,
      dataQaId: 'toast-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action'
    };
    break;
  default:
    Alert.args = {
      type: AlertType.Banner,
      children: 'Hello, Im the Banner Alert! Play with me.',
      action: true,
      icon: true,
      heightSize: AlertHeightSizeTypes.Medium,
      color: AlertBackgroundColor.Notification,
      dataQaId: 'banner-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action'
    };
    break;
}
