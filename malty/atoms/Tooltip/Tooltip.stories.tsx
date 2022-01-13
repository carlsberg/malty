import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Tooltip as TooltipComponent } from './Tooltip';
import { Position, Toggle, TooltipProps } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export default {
  title: 'Atoms/Tooltip',
  component: TooltipComponent,
  parameters: {
    importObject: 'Tooltip',
    importPath: '@carlsberggroup/malty.atoms.tooltip'
  },
  argTypes: {
    position: {
      options: Object.values(Position),
      description: 'Tooltip position.',
      table: { defaultValue: { summary: 'top' } },
      control: {
        type: 'radio'
      }
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
      table: { defaultValue: { summary: 'persist' } },
      options: Object.values(Toggle),
      control: {
        type: 'radio'
      },
      defaultValue: Toggle.Persist
    },
    isOpen: {
      table: {
        disable: true
      }
    }
  }
} as Meta;

const Template: Story<TooltipProps> = ({ position, toggle, children }: TooltipProps) => (
  <StyledContainer>
    <div id="testId">Click here to toggle it!</div>
    <TooltipComponent anchor="testId" position={position} toggle={toggle}>
      {children}
    </TooltipComponent>
  </StyledContainer>
);

export const Tooltip = Template.bind({});

Tooltip.args = {
  position: Position.Top,
  children: 'A simple Tooltip component content with some text'
};
