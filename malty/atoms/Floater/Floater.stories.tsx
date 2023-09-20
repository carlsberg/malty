import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Floater } from './Floater';
import { FloaterColor, FloaterIconPosition, FloaterProps } from './Floater.types';

const StyledWrapper = styled.div`
  height: 50px;
`;

const meta: Meta<FloaterProps> = {
  component: Floater,
  title: 'Forms/Floater',
  parameters: {
    importObject: 'Floater',
    importPath: '@carlsberggroup/malty.atoms.floater'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Button label, can be'
    },

    onClick: {
      description: 'This is a function that will run on click. It is not a required property'
    },
    scroll: {
      description: 'Scroll position where will floater show',
      defaultValue: {
        summary: 0
      },
      control: {
        type: 'number'
      }
    },
    negative: {
      control: 'boolean',
      description: 'Should this be a white button?'
    },
    icon: {
      description: 'When selected, button label will contain the selected icon',
      control: 'select',
      mapping: IconName,
      options: Object.values({ undefined, ...IconName })
    },
    iconPos: {
      description: 'When icon present, position will be',
      control: 'select',
      mapping: FloaterIconPosition,
      options: Object.keys(FloaterIconPosition)
    },
    color: {
      description: 'Floater color. Options are',
      control: 'select',
      mapping: FloaterColor,
      options: Object.keys(FloaterColor)
    },
    dataTestId: {
      control: 'text'
    }
  }
};

export default meta;

type Story = StoryObj<FloaterProps>;

export const Base: Story = {
  args: {
    text: '',
    negative: false,
    icon: IconName.ArrowSmallUp,
    iconPos: FloaterIconPosition.Right
  },
  render: (args) => (
    <StyledWrapper>
      <Floater {...args} />
    </StyledWrapper>
  )
};

export const Text: Story = {
  render: Base.render,
  args: {
    ...Base.args,
    text: 'Floater'
  }
};
