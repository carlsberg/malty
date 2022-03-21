import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Tooltip as TooltipComponent } from './Tooltip';
import { TooltipPosition, TooltipProps, TooltipToggle } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40vh;
  margin-left: calc(50% - 75px);
  p {
    white-space: nowrap;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;

export default {
  title: 'Information/Tooltip',
  component: TooltipComponent,
  parameters: {
    importObject: 'Tooltip',
    importPath: '@carlsberggroup/malty.atoms.tooltip'
  },
  argTypes: {
    position: {
      description: 'Tooltip position.',
      options: Object.keys(TooltipPosition),
      mapping: TooltipPosition,
      table: { defaultValue: { summary: 'TooltipPosition.Top' } },
      control: {
        type: 'select',
        label: Object.values(TooltipPosition)
      },
      defaultValue: 'Top'
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
    darkTheme: {
      description: 'Dark theme for the Tooltip.',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } }
    }
  }
} as Meta;

const Template: Story<TooltipProps> = ({ position, toggle, darkTheme, children }: TooltipProps) => (
  <StyledContainer>
    <p id="testId">Click here to toggle it! Play with me and my tooltip!!!</p>
    <TooltipComponent anchor="testId" position={position} toggle={toggle} darkTheme={darkTheme}>
      {children}
    </TooltipComponent>
  </StyledContainer>
);

export const Tooltip = Template.bind({});

Tooltip.args = {
  position: TooltipPosition.TopCenter,
  children: 'A simple Tooltip content with some text',
  darkTheme: true
};
