import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Alert } from './Alert';
import { AlertBackgroundColor, AlertProps, AlertType, HeightSizeTypes } from './Alert.types';

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
    label: {
      control: 'text',
      description: 'Alert label, can be',
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
      options: Object.values(HeightSizeTypes),
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

export const Banner = Template.bind({});

Banner.args = {
  type: AlertType.Banner,
  label: 'Hello, Im the Banner Alert! Play with me.',
  action: true,
  icon: true,
  heightSize: HeightSizeTypes.Medium,
  color: AlertBackgroundColor.Notification,
  dataQaId: 'banner-alert',
  firstAction: action('First Action clicked'),
  firstActionText: 'First Action'
};

export const InLine = Template.bind({});

InLine.args = {
  type: AlertType.InLine,
  label: 'Hello, Im the In Line Alert! Play with me.',
  action: false,
  icon: false,
  heightSize: HeightSizeTypes.Medium,
  color: AlertBackgroundColor.Notification,
  dataQaId: 'inline-alert',
  firstAction: action('First Action clicked'),
  firstActionText: 'First Action',
  secondAction: action('Second Action clicked'),
  secondActionText: 'Second Action'
};

export const Toast = Template.bind({});

Toast.args = {
  type: AlertType.Toast,
  label: 'Hello, Im the Toast Alert! Play with me.',
  action: true,
  icon: true,
  heightSize: undefined,
  color: AlertBackgroundColor.Notification,
  dataQaId: 'toast-alert',
  firstAction: action('First Action clicked'),
  firstActionText: 'First Action'
};
