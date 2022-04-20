import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Alert as AlertComponent } from './Alert';
import { AlertColor, AlertProps, AlertSize } from './Alert.types';

export default {
  title: 'Information/Inline Alert',
  component: AlertComponent,
  parameters: {
    importObject: 'Alert',
    importPath: '@carlsberggroup/malty.molecules.alert'
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title'
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

Alert.args = {
  title: 'Title',
  message: 'Hello, Im the In Line Alert! Play with me.',
  action: false,
  icon: false,
  size: AlertSize.Medium,
  color: AlertColor.Notification,
  dataQaId: 'inline-alert',
  firstAction: action('First Action clicked'),
  firstActionText: 'First Action',
  secondAction: action('Second Action clicked'),
  secondActionText: 'Second Action'
};
