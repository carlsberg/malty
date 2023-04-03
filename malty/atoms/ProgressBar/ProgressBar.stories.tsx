import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProgressBar as ProgressBarContainer } from './ProgressBar';
import { ProgressBarProps, ProgressBarSize } from './ProgressBar.types';

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
      description: 'Progress indicating text',
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
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the progress bar'
    },
    size: {
      description: 'Size of the progress bar',
      options: Object.keys(ProgressBarSize),
      mapping: ProgressBarSize,
      control: {
        type: 'select',
        label: Object.values(ProgressBarSize)
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Progress bar data-testid'
    }
  }
} as Meta;

const Template: Story<ProgressBarProps> = (props: ProgressBarProps) => <ProgressBarContainer {...props} />;

export const ProgressBar = Template.bind({});

ProgressBar.args = {
  progress: 20,
  displayAmount: true,
  label: 'Loading items...',
  size: ProgressBarSize.Medium
};
