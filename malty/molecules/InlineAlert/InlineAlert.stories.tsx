import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Alert as AlertComponent } from './InlineAlert';
import { InlineAlertColor, InlineAlertProps, InlineAlertSize } from './InlineAlert.types';

export default {
  title: 'Information/Inline Alert',
  component: AlertComponent,
  parameters: {
    importObject: 'InlineAlert',
    importPath: '@carlsberggroup/malty.molecules.inline-alert',
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
      options: Object.keys(InlineAlertSize),
      mapping: InlineAlertSize,
      control: {
        type: 'select',
        label: Object.values(InlineAlertSize)
      },
      table: {
        defaultValue: {
          summary: 'InlineAlertSize.Medium'
        }
      }
    },
    color: {
      description: 'Alert colors, from design predefined colors, as follows.',
      options: Object.keys(InlineAlertColor),
      mapping: InlineAlertColor,
      control: {
        type: 'select',
        label: Object.values(InlineAlertColor)
      },
      table: {
        defaultValue: {
          summary: 'InlineAlertColor.Notification'
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
      description: 'First Action text',
      table: { defaultValue: { summary: 'none' } }
    },
    secondActionText: {
      control: 'text',
      description: 'Second Action text',
      table: { defaultValue: { summary: 'none' } }
    }
  }
} as Meta;
const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
`;
const Template: Story<InlineAlertProps> = ({ ...args }) => (
  <StyledContainer>
    <AlertComponent {...args} />
  </StyledContainer>
);

export const InlineAlert = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');
switch (variant) {
  case 'icon':
    InlineAlert.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      icon: IconName.Information,
      size: InlineAlertSize.Medium,
      color: InlineAlertColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
  case 'title':
    InlineAlert.args = {
      title: 'Title Alert',
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      size: InlineAlertSize.Medium,
      color: InlineAlertColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
  case 'action':
    InlineAlert.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: true,
      size: InlineAlertSize.Medium,
      color: InlineAlertColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;
  case 'complete':
    InlineAlert.args = {
      title: 'Title Alert',
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: true,
      size: InlineAlertSize.Medium,
      color: InlineAlertColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;

  default:
    InlineAlert.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      action: false,
      size: InlineAlertSize.Medium,
      color: InlineAlertColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
}
