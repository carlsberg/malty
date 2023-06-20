import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import { ButtonStyle } from './Button.types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    style: ButtonStyle.Primary,
    text: 'Button'
  }
};

export const Secondary: Story = {
  args: {
    style: ButtonStyle.Secondary,
    text: 'Button'
  }
};
