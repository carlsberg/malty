import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProgressBar as ProgressBarContainer } from './ProgressBar';
import { ProgressBarProps } from './ProgressBar.types';

export default {
  title: 'Progress Indicators/Progress Bar',
  component: ProgressBarContainer,
  parameters: {
    importObject: 'ProgressBar',
    importPath: '@carlsberggroup/malty.atoms.progress-bar'
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Progress indeicating text',
      table: {
        defaultValue: {
          summary: 'blank'
        }
      }
    },
    displayAmount: {
      control: 'boolean',
      description: 'Show progress percentage?',
      table: {
        defaultValue: {
          summary: false
        }
      }
    },
    progress: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1
      },
      description: 'Percentage of progress for progress bar indicator, 0 to 100',
      table: {
        defaultValue: {
          summary: 0
        }
      }
    }
  }
} as Meta;
const Template: Story<ProgressBarProps> = ({ progress, displayAmount, label }: ProgressBarProps) => (
  <ProgressBarContainer displayAmount={displayAmount} label={label} progress={progress} />
);

export const ProgressBar = Template.bind({});
ProgressBar.args = {
  progress: 20,
  displayAmount: true,
  label: 'Loading items...'
};
