/* eslint-disable react/destructuring-assignment */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { ProgressCircle as ProgressCircleComponent } from './ProgressCircle';
import { ForegroundCircleColor, PercentagePosition, ProgressCircleProps } from './ProgressCircle.types';

export default {
  title: 'Progress Indicators/Progress Circle',
  component: ProgressCircleComponent,
  parameters: {
    importObject: 'ProgressCircle',
    importPath: '@carlsberggroup/malty.atoms.progress-circle'
  },
  argTypes: {
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
    }
  }
} as ComponentMeta<typeof ProgressCircleComponent>;

const Template: ComponentStory<typeof ProgressCircleComponent> = (args: ProgressCircleProps) => {
  return <ProgressCircleComponent {...args} />;
};

export const ProgressCircle = Template.bind({});

ProgressCircle.args = {
  foregroundColor: ForegroundCircleColor.DigitalBlack,
  displayPercentage: true,
  percentage: 27,
  percentagePosition: PercentagePosition.Left
};
