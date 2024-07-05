import { generateStorybookSpacing } from '@carlsberg/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';
import { LoadingColor, LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';

const meta: Meta<LoadingProps> = {
  title: 'Progress Indicators/Loading',
  component: Loading,
  parameters: {
    importObject: 'Loading',
    importPath: '@carlsberg/malty.molecules.loading'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Label to be displayed'
    },
    size: {
      options: Object.values(LoadingSize),
      control: 'select',
      description: 'Size of the icon',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: LoadingSize.Small
        }
      }
    },
    status: {
      options: Object.values(LoadingStatus),
      control: 'select',
      description: 'Status of the icon',
      table: {
        category: 'Icon',
        defaultValue: {
          summary: LoadingStatus.Pending
        }
      }
    },
    dataQaId: {
      control: 'text',
      description: 'Loading data-testid'
    },
    color: {
      description: 'Choose the component color',
      options: Object.values(LoadingColor),
      control: 'select',
      table: {
        category: 'Styling',
        defaultValue: {
          summary: LoadingColor.DigitalBlack
        }
      }
    },
    negative: {
      control: 'boolean',
      description: 'Inverts the component color',
      table: {
        category: 'Styling'
      }
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<LoadingProps>;

export const Base: Story = {
  args: {
    size: LoadingSize.Small,
    text: 'Loading...',
    status: LoadingStatus.Pending,
    dataQaId: 'loading',
    negative: false,
    color: LoadingColor.DigitalBlack
  }
};

export const Success: Story = {
  args: {
    ...Base.args,
    status: LoadingStatus.Success
  }
};

export const Failure: Story = {
  args: {
    ...Base.args,
    status: LoadingStatus.Failure
  }
};

export default meta;
