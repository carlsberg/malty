/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProgressCircle as ProgressCircleComponent } from './ProgressCircle';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps, RoundMethod } from './ProgressCircle.types';

export default {
  title: 'Progress Indicators/Progress Circle',
  component: ProgressCircleComponent,
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
      options: Object.values(ForegroundCircleColor),
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
        min: 0,
        max: 100,
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
    }
  }
} as ComponentMeta<typeof ProgressCircleComponent>;

const Template: ComponentStory<typeof ProgressCircleComponent> = (args: ProgressCircleProps) => {
  return <ProgressCircleComponent {...args} />;
};

export const ProgressCircle = Template.bind({});

ProgressCircle.args = {
  displayPercentage: true,
  errorLabel: 'Error',
  foregroundColor: ForegroundCircleColor.DigitalBlack,
  percentage: 27,
  percentagePosition: PercentagePosition.Left,
  roundMethod: RoundMethod.Up
};
