import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Tooltip } from './Tooltip';
import { Position, TooltipProps } from './Tooltip.types';

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 2rem);
`;

export default {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  argTypes: {
    position: {
      options: Object.values(Position),
      control: {
        type: 'radio'
      }
    },
    content: {
      control: {
        disable: true
      }
    },
    isOpen: {
      table: {
        disable: true
      }
    }
  }
} as Meta;
const Template: Story<TooltipProps> = ({ position }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledContainer>
      <Tooltip position={position} isOpen={isOpen}>
        <>
          A simple bottom Tooltip component with some text
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            Toggle
          </button>
        </>
      </Tooltip>
    </StyledContainer>
  );
};

export const Main = Template.bind({});
Main.args = {
  position: Position.Bottom
};
