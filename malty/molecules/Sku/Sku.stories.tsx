import { generateStorybookSpacing } from '@carlsberggbs/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Sku } from './Sku';
import { MRO, SkuProps } from './Sku.types';

const meta: Meta<SkuProps> = {
  title: 'Information/Sku',
  component: Sku,
  parameters: {
    importObject: 'Sku',
    importPath: '@carlsberggbs/malty.molecules.sku'
  },
  argTypes: {
    sku: {
      control: 'text',
      description: 'Product sku'
    },
    mro: {
      description: 'Product MRO',
      options: [undefined, ...Object.values(MRO)],
      control: {
        type: 'select',
        labels: {
          MANDATORY: 'Mandatory',
          RECOMMENDED: 'Recommended',
          OPTIONAL: 'Optional'
        }
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Sku data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<SkuProps>;

export const Base: Story = {
  args: {
    sku: 'Sku: 12512 512',
    mro: undefined,
    dataTestId: 'sku'
  }
};

export default meta;
