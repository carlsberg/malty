import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Price } from './Price';
import { PriceProps } from './Price.types';

const meta: Meta<PriceProps> = {
  title: 'Information/Price',
  component: Price,
  parameters: {
    importObject: 'Price',
    importPath: '@carlsberggbs/malty.atoms.price'
  },
  argTypes: {
    base: {
      control: 'text',
      description: 'Default price'
    },
    discount: {
      control: 'text',
      description: 'Discount price or label (e.g. "FREE" or "REWARD"))'
    },
    credit: {
      control: 'text',
      description: 'Credit price'
    },
    dataTestId: {
      control: 'text',
      description: 'dataTestId for testing'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<PriceProps>;

export const Base: Story = {
  args: {
    base: '₭ 99,800.00',
    dataTestId: 'price'
  }
};

export const Credit: Story = {
  args: {
    ...Base.args,
    base: '',
    credit: '₭ 86,000.00'
  }
};

export const Free: Story = {
  args: {
    ...Base.args,
    base: '',
    discount: 'FREE'
  }
};

export const Reward: Story = {
  args: {
    ...Base.args,
    base: '',
    discount: 'REWARD'
  }
};

export const Discount: Story = {
  args: {
    ...Base.args,
    base: '₭ 99,800.00',
    discount: '₭ 86,000.00'
  }
};

export default meta;
