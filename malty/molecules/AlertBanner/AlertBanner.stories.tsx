import layoutProps from '@carlsberggbs/malty.theme.malty-theme-provider/layout.json';
import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { AlertBanner } from './AlertBanner';
import { AlertBannerProps, AlertBannerType } from './AlertBanner.types';

const StyledContainer = styled.div`
  height: 200px;
  width: 100%;
`;
const AlertBannerComponent = (props: AlertBannerProps) => {
  return (
    <StyledContainer>
      <AlertBanner {...props} />
    </StyledContainer>
  );
};

const meta: Meta<AlertBannerProps> = {
  title: 'Information/Alert Banner',
  component: AlertBanner,
  parameters: {
    importObject: 'AlertBanner',
    importPath: '@carlsberggbs/malty.molecules.alert-banner'
  },
  render: (args) => <AlertBannerComponent {...args} />,
  argTypes: {
    alerts: {
      description: 'Alerts to be rendered by the component'
    },
    breakpoint: {
      description: 'Change component styles based on the value passed'
    },
    animation: {},
    onActiveAlertChange: {
      description: 'Function that will run when the user clicks in the arrow to change the visible alert',
      control: 'none'
    }
  }
};

type Story = StoryObj<AlertBannerProps>;

export const Base: Story = {
  args: {
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
      toggleBannerTextCompress: action('Dismiss button clicked')
    },
    onActiveAlertChange: () => null
  }
};

export default meta;
