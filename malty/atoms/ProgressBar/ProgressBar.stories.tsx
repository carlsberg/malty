import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';
import { ProgressBarProps } from './ProgressBar.types';

export default {
  title: 'Atoms/Progress Bar',
  component: ProgressBar,
  parameters: {
    importObject: 'ProgressBar',
    importPath: '@carlsberggroup/malty.atoms.progress-bar'
  },
  argTypes: {
    label: { control: 'text' },
    displayAmount: { control: 'boolean' },
    progress: {
      control: { type: 'number', min: 0, max: 100, step: 10 }
    }
  }
} as Meta;
const Template: Story<ProgressBarProps> = ({ progress, displayAmount, label }: ProgressBarProps) => (
  <ProgressBar displayAmount={displayAmount} label={label} progress={progress} />
);

export const Main = Template.bind({});
Main.args = {
  progress: 20,
  displayAmount: true,
  label: 'Loading items...'
};
