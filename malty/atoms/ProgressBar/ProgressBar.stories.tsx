import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';
import { ProgressBarProps, ProgressBarSize } from './ProgressBar.types';

const meta: Meta<ProgressBarProps> = {
  title: 'Progress Indicators/Progress Bar',
  component: ProgressBar,
  parameters: {
    importObject: 'ProgressBar',
    importPath: '@carlsberg/malty.atoms.progress-bar'
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
      description: 'Changes the progress bar visuals to simulate a disabled state',
      table: {
        category: 'State'
      }
    },
    size: {
      description: 'Size of the progress bar',
      options: Object.keys(ProgressBarSize),
      mapping: ProgressBarSize,
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: ProgressBarSize.Medium
        }
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Progress bar data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ProgressBarProps>;

export const Base: Story = {
  args: {
    progress: 20,
    displayAmount: true,
    label: 'Loading items...',
    size: ProgressBarSize.Medium,
    dataTestId: 'progress-bar'
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    disabled: true
  }
};

export default meta;
