import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { AlertBanner as AlertBannerComponent } from './AlertBanner';
import { AlertBannerProps, AlertBannerType } from './AlertBanner.types';

export default {
  title: 'Information/AlertBanner',
  component: AlertBannerComponent,
  parameters: {
    importObject: 'AlertBanner',
    importPath: '@carlsberggroup/malty.atoms.alert-banner'
  },
  argTypes: {
    message: {
      control: 'text',
      description: 'AlertBanner children, can be',
      table: { defaultValue: { summary: 'none' } }
    },
    action: {
      description: 'Add action',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    },
    dataQaId: {
      control: 'text',
      description: 'AlertBanner data-qi-id, can be',
      table: { defaultValue: { summary: 'none' } }
    },
    actionName: {
      control: 'text',
      description: 'Action',
      table: { defaultValue: { summary: 'none' } }
    },
    dismiss: {
      control: ''
    },
    icon: {
      description: 'Add icon',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    }
  }
} as Meta;

const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
`;
const Template: Story<AlertBannerProps> = ({ ...args }) => (
  <StyledContainer>
    <AlertBannerComponent {...args} />
  </StyledContainer>
);

export const AlertBanner = Template.bind({});

AlertBanner.args = {
  alerts: [
    {
      type: AlertBannerType.Error,
      message: 'Hello, Im the AlertBanner!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismiss: action('Dismiss button clicked'),
      icon: true
    },
    {
      type: AlertBannerType.Information,
      message: 'Hello, Im the AlertBanner!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismiss: action('Dismiss button clicked'),
      icon: true
    },
    {
      type: AlertBannerType.Warning,
      message: 'Hello, Im the AlertBanner!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismiss: action('Dismiss button clicked'),
      icon: true
    }
  ]
};
