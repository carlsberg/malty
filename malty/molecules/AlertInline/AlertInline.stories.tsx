import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { AlertInline as AlertInlineComponent } from './AlertInline';
import { AlertInlineColor, AlertInlineProps, AlertInlineSize } from './AlertInline.types';

export default {
  title: 'Information/Alert Inline ',
  component: AlertInlineComponent,
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

    icon: {
      description: 'When selected, Alert label will contain the selected icon',
      options: Object.values(IconName),
      control: {
        type: 'select'
      }
    },
    size: {
      description: 'Alert Height size - Only for In Line Alert type without actions. Options are',
      options: Object.keys(AlertInlineSize),
      mapping: AlertInlineSize,
      control: {
        type: 'select',
        label: Object.values(AlertInlineSize)
      },
      table: {
        defaultValue: {
          summary: 'AlertInlineSize.Default'
        }
      }
    },
    color: {
      description: 'Alert colors, from design predefined colors, as follows.',
      options: Object.keys(AlertInlineColor),
      mapping: AlertInlineColor,
      control: {
        type: 'select',
        label: Object.values(AlertInlineColor)
      },
      table: {
        defaultValue: {
          summary: 'AlertInlineColor.Notification'
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
const Template: Story<AlertInlineProps> = ({ ...args }) => (
  <StyledContainer>
    <AlertInlineComponent {...args} />
  </StyledContainer>
);

export const AlertInline = Template.bind({});
const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');
switch (variant) {
  case 'icon':
    AlertInline.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      icon: IconName.Information,
      size: AlertInlineSize.Default,
      color: AlertInlineColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
  case 'title':
    AlertInline.args = {
      title: 'Title Alert',
      message: 'Hello, Im the In Line Alert! Play with me.',
      size: AlertInlineSize.Default,
      color: AlertInlineColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
  case 'action':
    AlertInline.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      size: AlertInlineSize.Default,
      color: AlertInlineColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;
  case 'complete':
    AlertInline.args = {
      title: 'Title Alert',
      message: 'Hello, Im the In Line Alert! Play with me.',
      size: AlertInlineSize.Default,
      color: AlertInlineColor.Notification,
      dataQaId: 'inline-alert',
      firstAction: action('First Action clicked'),
      firstActionText: 'First Action',
      secondAction: action('Second Action clicked'),
      secondActionText: 'Second Action'
    };
    break;

  default:
    AlertInline.args = {
      message: 'Hello, Im the In Line Alert! Play with me.',
      size: AlertInlineSize.Default,
      color: AlertInlineColor.Notification,
      dataQaId: 'inline-alert'
    };
    break;
}
