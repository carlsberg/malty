import { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { ButtonType } from '../Button/Button.types';
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
const Template: Story<TooltipProps> = ({ content, position }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledContainer>
      <Tooltip position={position} content={content} isOpen={isOpen}>
        <Button buttonType={ButtonType.Primary} text="Toggle" onClick={() => setIsOpen(!isOpen)} />
      </Tooltip>
    </StyledContainer>
  );
};

export const Main = Template.bind({});
Main.args = {
  position: Position.Bottom,
  content: 'Test'
};
