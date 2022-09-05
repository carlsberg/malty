import { action } from '@storybook/addon-actions';
import { Meta, Story } from '@storybook/react';
import React, { RefObject, useState } from 'react';
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
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
const Template: Story<AlertBannerProps> = ({ ...args }) => {
  const [heightSize, setHeight] = useState(0);
  const [isBannerTextCompressed, setIsBannerTextCompressed] = useState<boolean>(false);
  const size: RefObject<HTMLDivElement> = React.useRef(null);
  const toggleBannerTextCompress = (newStatus: boolean) => {
    setIsBannerTextCompressed(newStatus)
  } 

  const override = {
    ...args,
    animation: {
      ...args.animation,
      showAnimations: true,
      isBannerTextCompressed,
      triggerYPosition: 50,
      toggleBannerTextCompress
    }
  }

  return (
    <div style={{ height: '200vh' }}>
      <StyledContainer ref={size} id="testID">
        <AlertBannerComponent {...override} />
      </StyledContainer>
      <div style={{ height: heightSize }} />
      <div><h1 style={{ margin: 0, padding: 0 }}>Foo text</h1></div>
    </div>
  )
};

export const AlertBanner = Template.bind({});

AlertBanner.args = {
  alerts: [
    {
      type: AlertBannerType.Error,
      message: 'Hello, Im the das sdasdasd asdasd asdasdasdasdasdasdadad a assdsdasddass asd asdasd asdas dasd dasdasd asdasdas d!',
      dataQaId: 'alert-banner',
      action: action('First Action clicked'),
      actionName: 'First Action',
      dismiss: action('Dismiss button clicked'),
      icon: true
    },
    {
      type: AlertBannerType.Information,
      message: 'Hello, Im the d asasdd das sadsd asd d dsadasdasdsadas das!',
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
  ],
  breakpoint: '768px',
  animation: {
    showAnimations: false,
    triggerYPosition: 0,
    isBannerTextCompressed: false,
    toggleBannerTextCompress: action('Button clicked'),
  }
};
