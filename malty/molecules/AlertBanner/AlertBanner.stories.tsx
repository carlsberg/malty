import layoutProps from '@carlsberggroup/malty.theme.malty-theme-provider/layout.json';
import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { AlertBanner as AlertBannerComponent } from './AlertBanner';
import { AlertBannerProps, AlertBannerType } from './AlertBanner.types';

export default {
  title: 'Information/Alert Banner',
  component: AlertBannerComponent,
  parameters: {
    importObject: 'AlertBanner',
    importPath: '@carlsberggroup/malty.molecules.alert-banner'
  },
  argTypes: {}
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
      eid: '1',
      type: AlertBannerType.Error,
      message:
        'Hello, Im the AlertBanner! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dataQaId: 'alert-banner',
      dismissible: true,
      onDismiss: action('Dismiss button clicked'),
      icon: true
    },
    {
      eid: '2',
      type: AlertBannerType.Information,
      message: 'Hello, Im the AlertBanner!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismissible: true,
      onDismiss: action('Dismiss button clicked'),
      icon: true
    },
    {
      eid: '3',
      type: AlertBannerType.Warning,
      message: 'Hello, Im the AlertBanner!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismissible: true,
      onDismiss: action('Dismiss button clicked'),
      icon: true
    },
    {
      eid: '4',
      type: AlertBannerType.Success,
      message: 'Hello, Im the AlertBanner!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismissible: true,
      onDismiss: action('Dismiss button clicked'),
      icon: true
    }
  ],
  breakpoint: layoutProps.small['device-max-width'].value,
  animation: {
    showAnimations: false,
    triggerYPosition: 0,
    isBannerTextCompressed: false,
    toggleBannerTextCompress: action('Button clicked')
  }
};
