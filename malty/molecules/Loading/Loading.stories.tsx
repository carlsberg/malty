import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import { Loading } from './Loading';
import { LoadingColor, LoadingProps, LoadingSize, LoadingStatus } from './Loading.types';

const meta: Meta<LoadingProps> = {
  component: Loading,
  title: 'Progress Indicators/Loading',
  parameters: {
    importObject: 'Loading',
    importPath: '@carlsberggroup/malty.molecules.loading'
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Label to be displayed'
    },
    size: {
      options: Object.values(LoadingSize),
      control: 'select',
      description: 'Size of the icon'
    },
    status: {
      options: Object.values(LoadingStatus),
      control: 'select',
      description: 'Status of the icon'
    },
    dataQaId: {
      control: 'text',
      description: 'Set data-testid'
    },
    color: {
      description: 'Choose the component color',
      options: Object.values(LoadingColor),
      control: 'select'
    },
    negative: {
      control: 'boolean',
      description: 'Inverts the component color'
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
