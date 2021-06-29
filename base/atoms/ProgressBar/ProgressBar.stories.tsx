import { Meta, Story } from '@storybook/react';
import React from 'react';
import { ProgressBar } from './ProgressBar';
import { ProgressBarProps } from './ProgressBar.types';

export default {
  title: 'Atoms/Progress Bar',
  component: ProgressBar,
  argTypes: {}
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
