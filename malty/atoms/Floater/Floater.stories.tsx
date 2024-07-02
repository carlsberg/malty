import { ArrowSmallUp } from '@carlsberg/malty.icons.arrow-small-up';
import { allIconsStoryOptions } from '@carlsberg/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Floater } from './Floater';
import { FloaterColor, FloaterIconPosition, FloaterProps } from './Floater.types';

const StyledWrapper = styled.div`
  height: 50px;
`;

const meta: Meta<FloaterProps> = {
  title: 'Forms/Floater',
  component: Floater,
  parameters: {
    importObject: 'Floater',
    importPath: '@carlsberg/malty.atoms.floater'
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
      description: 'This is a function that will run on click. It is not a required property',
      table: {
        category: 'Events'
      }
    },
    scroll: {
      description: 'Scroll position where will floater show',
      table: {
        defaultValue: {
          summary: 0
        }
      },
      control: 'number'
    },
    negative: {
      control: 'boolean',
      description: 'Should this be a white button?',
      table: {
        category: 'Styling'
      }
    },
    icon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select',
      table: {
        category: 'Icon'
      }
    },
    iconPos: {
      description: 'When icon present, position will be',
      control: 'select',
      mapping: FloaterIconPosition,
      options: Object.keys(FloaterIconPosition),
      table: {
        category: 'Icon',
        defaultValue: {
          summary: FloaterIconPosition.Right
        }
      }
    },
    color: {
      description: 'Floater color. Options are',
      control: 'select',
      mapping: FloaterColor,
      options: Object.keys(FloaterColor),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: FloaterColor.DigitalBlack
        }
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Floater data-testid'
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
