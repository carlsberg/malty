import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { ProgressCircle } from './ProgressCircle';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

const meta: Meta<ProgressCircleProps> = {
  title: 'Progress Indicators/Progress Circle',
  component: ProgressCircle,
  parameters: {
    importObject: 'ProgressCircle',
    importPath: '@carlsberg/malty.atoms.progress-circle'
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
          summary: ForegroundCircleColor.DigitalBlack
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
          summary: PercentagePosition.Left
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
          summary: RoundMethod.Up
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
    roundMethod: RoundMethod.Up,
    dataTestId: 'progress-circle'
  }
};

export default meta;
