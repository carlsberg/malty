import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Tooltip as TooltipComponent } from './Tooltip';
import {
  TooltipPlacement,
  TooltipPositionStrategy,
  TooltipProps,
  TooltipToggle,
} from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;

  span {
    width: 0;
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

export default {
  title: 'Information/Tooltip',
  component: TooltipComponent,
  parameters: {
    importObject: 'Tooltip',
    importPath: '@carlsberggroup/malty.atoms.tooltip',
    variants: ['dark', 'light'],
  },
  argTypes: {
    tooltipId: {
      control: 'text',
      description: 'Tooltip Id',
      table: { defaultValue: { summary: 'tooltip' } },
      defaultValue: 'tooltip',
    },
    triggerComponent: {
      control: {
        disable: true,
      },
      description:
        "Anchor element to have Tooltip anchor to. The position is based on this element. If no anchor provided the Tooltip will show in it's corresponding position on the markup, and anchor on itself.",
    },
    isOpen: {
      description: 'Tooltip visibility. Overrides all variants actions that toggle visibility',
      control: 'boolean',
      table: { defaultValue: { summary: 'undefined' } },
    },
    placement: {
      description: 'Tooltip position.',
      options: Object.values(TooltipPlacement),
      table: { defaultValue: { summary: 'TooltipPlacement.Bottom' } },
      control: {
        type: 'select',
        label: Object.keys(TooltipPlacement),
      },
      defaultValue: 'bottom',
    },

    positionStrategy: {
      description: 'Tooltip positioning strategy.',
      options: Object.values(TooltipPositionStrategy),
      mapping: TooltipPositionStrategy,
      table: { defaultValue: { summary: 'TooltipPositionStrategy.ABSOLUTE' } },
      control: {
        type: 'select',
        label: Object.keys(TooltipPositionStrategy),
      },
      defaultValue: 'absolute',
    },
    children: {
      description:
        'Content for the Tooltip, can be a `string`, a `React Element` or just simply `HTML`.',
      table: {
        type: {
          summary: 'JSX.Element',
        },
      },
      control: 'text',
    },
    toggle: {
      description: 'Expected Tooltip behaviour for trigger.',
      options: Object.values(TooltipToggle),
      mapping: TooltipToggle,
      table: { defaultValue: { summary: 'TooltipToggle.Hover' } },
      control: {
        type: 'select',
        label: Object.keys(TooltipToggle),
      },
      defaultValue: 'Hover',
    },
    isDark: {
      description: 'Dark theme for the Tooltip.',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
    },
    dataTestId: {
      control: 'text',
      description: 'Tooltip data-testid',
      table: { defaultValue: { summary: 'none' } },
    },
    autoHideDuration: {
      control: 'number',
      description: 'Set auto hide duration - available only for `Event` toggle',
      table: { defaultValue: { summary: '5000' } },
    },
    onClose: {
      description: 'Function to be executed when tooltip state is changed to hidden.',
    },
  },
} as Meta;

const Template: Story<TooltipProps> = ({
  placement,
  toggle,
  isDark,
  dataTestId,
  autoHideDuration,
  isOpen,
  children,
}: TooltipProps) => {
  const tooltipTextColor = isDark ? TextColor.White : TextColor.DigitalBlack;
  const renderTooltipEventToggle = () => (
    <Text textStyle={TextStyle.TinyBold} color={tooltipTextColor}>
      {children}
    </Text>
  );
  const toggleVisibility = (open: boolean) => () => {
    if (open) {
      TooltipComponent.openTooltip('tooltip');
    } else {
      TooltipComponent.closeTooltip('tooltip');
    }
  };

  const startTimer = () => {
    TooltipComponent.startTooltipTimer('tooltip');
  };

  return (
    <StyledContainer>
      <TooltipComponent
        tooltipId="tooltip"
        triggerComponent={(setTriggerElement) => (
          <p ref={setTriggerElement}>Choose your toggle control and play with me!!!</p>
        )}
        placement={placement}
        toggle={toggle}
        isOpen={isOpen}
        isDark={isDark}
        autoHideDuration={autoHideDuration}
        dataTestId={dataTestId}
      >
        {toggle === TooltipToggle.Event ? renderTooltipEventToggle() : children}
      </TooltipComponent>

      {toggle === TooltipToggle.Event && (
        <p>
          <button onClick={toggleVisibility(true)} type="button">
            Show
          </button>
          <button onClick={toggleVisibility(false)} type="button">
            Hide
          </button>
          <button onClick={startTimer} type="button">
            Open with timer
          </button>
        </p>
      )}
    </StyledContainer>
  );
};

export const Tooltip = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'dark':
    Tooltip.args = {
      placement: TooltipPlacement.Top,
      toggle: TooltipToggle.Hover,
      dataTestId: 'tooltip',
      children: (
        <div style={{ padding: '5px 0 0 0' }}>
          <Image src="https://via.placeholder.com/90x?text=Any+HTML" />
        </div>
      ),
      isDark: true,
      tooltipId: 'tooltip',
      triggerComponent: (setTriggerElement) => (
        <p ref={setTriggerElement}>Choose your toggle control and play with me!!!</p>
      ),
    };
    break;

  default:
    Tooltip.args = {
      placement: TooltipPlacement.Top,
      toggle: TooltipToggle.Hover,
      dataTestId: 'tooltip',
      children: 'A simple Tooltip content with some text. Thanks for open me!',
      isDark: false,
      tooltipId: 'tooltip',
      triggerComponent: (setTriggerElement) => (
        <p ref={setTriggerElement}>Choose your toggle control and play with me!!!</p>
      ),
    };
    break;
}
