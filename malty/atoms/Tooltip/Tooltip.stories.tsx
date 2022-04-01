import { Image } from '@carlsberggroup/malty.atoms.image';
import { Text, TextColor, TextStyle } from '@carlsberggroup/malty.atoms.text';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Tooltip as TooltipComponent } from './Tooltip';
import { TooltipPosition, TooltipProps, TooltipToggle } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40vh;

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
    variants: ['dark', 'light']
  },
  argTypes: {
    position: {
      description: 'Tooltip position.',
      options: Object.keys(TooltipPosition),
      mapping: TooltipPosition,
      table: { defaultValue: { summary: 'TooltipPosition.TopCEnter' } },
      control: {
        type: 'select',
        label: Object.values(TooltipPosition)
      },
      defaultValue: 'TopCenter'
    },
    anchor: {
      control: {
        disable: true
      },
      description:
        "Anchor element to have Tooltip anchor to. The position is based on this element. If no anchor provided the Tooltip will show in it's corresponding position on the markup, and anchor on itself."
    },
    children: {
      description: 'Content for the Tooltip, can be a `string`, a `React Element` or just simply `HTML`.',
      table: {
        type: {
          summary: 'JSX.Element'
        }
      },
      control: 'text'
    },
    toggle: {
      description: 'Expected Tooltip behaviour for trigger.',
      options: Object.keys(TooltipToggle),
      mapping: TooltipToggle,
      table: { defaultValue: { summary: 'TooltipToggle.Persist' } },
      control: {
        type: 'select',
        label: Object.values(TooltipToggle)
      },
      defaultValue: 'Persist'
    },
    isOpen: {
      table: {
        disable: true
      }
    },
    isDark: {
      description: 'Dark theme for the Tooltip.',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    },
    dataTestId: {
      control: 'text',
      description: 'Tooltip data-testid',
      table: { defaultValue: { summary: 'none' } }
    },
    autoHideDuration: {
      control: 'number',
      description: 'Set auto hide duration - available only for `Event` toggle',
      table: { defaultValue: { summary: '5000' } }
    },
    onHideTooltip: {
      description: 'Function to be executed when tooltip state is changed to hidden.'
    }
  }
} as Meta;

const Template: Story<TooltipProps> = ({
  position,
  toggle,
  isDark,
  dataTestId,
  autoHideDuration,
  children
}: TooltipProps) => {
  const tooltipTextColor = isDark ? TextColor.White : TextColor.DigitalBlack;
  const tooltipAnchorRef = React.useRef<HTMLParagraphElement>(null);
  const renderTooltipEventToggle = () => (
    <Text textStyle={TextStyle.TinyBold} color={tooltipTextColor}>
      {children}
    </Text>
  );
  const toggleVisibility = (open: boolean) => () => {
    if (open) {
      TooltipComponent.openTootip(tooltipAnchorRef);
    } else {
      TooltipComponent.closeTooltip(tooltipAnchorRef);
    }
  };

  const startTimer = () => {
    TooltipComponent.startTooltipTimer(tooltipAnchorRef);
  };

  return (
    <StyledContainer>
      <p ref={tooltipAnchorRef}>Choose your toggle control and play with me!!!</p>

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
      <TooltipComponent
        position={position}
        toggle={toggle}
        isDark={isDark}
        autoHideDuration={autoHideDuration}
        anchorRef={tooltipAnchorRef}
        dataTestId={dataTestId}
      >
        {toggle === TooltipToggle.Event ? renderTooltipEventToggle() : children}
      </TooltipComponent>
    </StyledContainer>
  );
};

export const Tooltip = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'dark':
    Tooltip.args = {
      position: TooltipPosition.TopCenter,
      toggle: TooltipToggle.Persist,
      dataTestId: 'tooltip',
      children: (
        <div style={{ padding: '5px 0 0 0' }}>
          <Image src="https://via.placeholder.com/90x?text=Any+HTML" />
        </div>
      ),
      isDark: true
    };
    break;

  default:
    Tooltip.args = {
      position: TooltipPosition.TopCenter,
      toggle: TooltipToggle.Persist,
      dataTestId: 'tooltip',
      children: 'A simple Tooltip content with some text. Thanks for open me!',
      isDark: false
    };
    break;
}
