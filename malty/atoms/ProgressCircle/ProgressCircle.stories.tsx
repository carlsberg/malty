import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ProgressCircle as ProgressCircleComponent } from './ProgressCircle';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

const meta: Meta<ProgressCircleProps> = {
  title: 'Progress Indicators/Progress Circle',
  component: ProgressCircleComponent,
  render: (args) => {
    return <ProgressCircleComponent {...args} />;
  },
  parameters: {
    importObject: 'ProgressCircle',
    importPath: '@carlsberggroup/malty.atoms.progress-circle'
  },
  argTypes: {
    displayPercentage: {
      control: 'boolean',
      description: 'Show text information of percentage data?',
      table: {
        category: 'Percentage label',
        defaultValue: {
          summary: true
        }
      }
    },
    errorLabel: {
      control: 'text',
      description: 'Error label which could be passed by the product as a translation',
      table: {
        category: 'Percentage label',
        defaultValue: {
          summary: 'Error'
        }
      }
    },
    foregroundColor: {
      description: 'The color of the foreground circle.<br />Options are:',
      mapping: ForegroundCircleColor,
      options: Object.keys(ForegroundCircleColor),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: 'DigitalBlack'
        }
      },
      control: {
        type: 'radio',
        labels: Object.assign({}, ...Object.entries(ForegroundCircleColor).map(([a, b]) => ({ [b]: a })))
      }
    },
    percentage: {
      control: {
        step: 1
      },
      description: 'Percentage to be displayed in the foreground. Float number is truncated.'
    },
    percentagePosition: {
      description:
        'Position of the percentage.<br /><b>Applied only if `displayPercentage={true}`</b><br />Options are:',

      options: Object.values(PercentagePosition),
      table: {
        category: 'Percentage label',
        defaultValue: {
          summary: 'Left'
        }
      },
      control: {
        type: 'radio',
        labels: Object.assign({}, ...Object.entries(PercentagePosition).map(([a, b]) => ({ [b]: a })))
      }
    },
    roundMethod: {
      description:
        'Method to round value of the percentage with decimal. Applies either `Math.ceil()`, `Math.floor()` or `Math.round()` static method <br />Options are:',

      options: Object.values(RoundMethod),
      table: {
        defaultValue: {
          summary: 'Up'
        }
      },
      control: {
        type: 'radio',
        labels: Object.assign({}, ...Object.entries(RoundMethod).map(([a, b]) => ({ [b]: a })))
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Progress data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ProgressCircleProps>;

export const Base: Story = {
  args: {
    displayPercentage: true,
    errorLabel: 'Error',
    foregroundColor: ForegroundCircleColor.DigitalBlack,
    percentage: 27,
    percentagePosition: PercentagePosition.Left,
    roundMethod: RoundMethod.Up
  }
};

export default meta;
