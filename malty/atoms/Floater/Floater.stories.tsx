import { ArrowSmallUp } from '@carlsberggroup/malty.icons.arrow-small-up';
import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
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
  render: (args) => (
    <StyledWrapper>
      <Floater {...args} />
    </StyledWrapper>
  ),
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
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select'
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
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<FloaterProps>;

export const Base: Story = {
  args: {
    text: '',
    negative: false,
    icon: <ArrowSmallUp />,
    iconPos: FloaterIconPosition.Right
  }
};

export const Text: Story = {
  args: {
    ...Base.args,
    text: 'Floater'
  }
};

export default meta;
