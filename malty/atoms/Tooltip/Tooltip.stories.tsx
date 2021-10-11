import { Meta, Story } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { Position, Toggle, TooltipProps } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    importObject: 'Tooltip',
    importPath: '@carlsberggroup/malty.atoms.tooltip'
  },
  argTypes: {
    position: {
      options: Object.values(Position),
      control: {
        type: 'radio'
      }
    },
    anchor: {
      control: {
        disable: true
      }
    },
    children: {
      table: {
        type: {
          summary: 'JSX.Element'
        }
      },
      control: 'text'
    },
    toggle: {
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
    <Tooltip anchor="testId" position={position} toggle={toggle}>
      {children}
    </Tooltip>
  </StyledContainer>
);
export const Main = Template.bind({});
Main.args = {
  position: Position.Bottom,
  children: 'A simple Tooltip component content with some text'
};
