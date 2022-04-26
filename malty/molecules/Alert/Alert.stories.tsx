import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Alert as AlertComponent } from './Alert';
import { AlertColor, AlertProps, AlertSize } from './Alert.types';

export default {
  title: 'Information/Alert',
  component: AlertComponent,
  parameters: {
    importObject: 'Alert',
    importPath: '@carlsberggroup/malty.molecules.alert',
    variants: ['icon', 'action', 'title', 'complete']
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title'
    },
    message: {
      control: 'text',
      description: 'message'
    },
    action: {
      description: 'Add action',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    },
    icon: {
      description: 'When selected, Alert label will contain the selected icon',
      options: Object.values(IconName),
      control: {
        type: 'select'
      }
    },
    size: {
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
    firstAction: {
      description: 'Function to be executed when first action is clicked'
    },
    secondAction: {
      description: 'Function to be executed when second action is clicked'
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
  case 'icon':
    Alert.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      icon: IconName.Information,
      size: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
  case 'title':
    Alert.args = {
      title: 'Title Alert',
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      size: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
  case 'action':
    Alert.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: true,
      size: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;
  case 'complete':
    Alert.args = {
      title: 'Title Alert',
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: true,
      size: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;

  default:
    Alert.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      size: AlertSize.Medium,
      color: AlertColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
}
