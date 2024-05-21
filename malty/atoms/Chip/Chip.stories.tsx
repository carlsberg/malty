import { Alert } from '@carlsberggroup/malty.icons.alert';
import { allIconsStoryOptions } from '@carlsberggroup/malty.utils.all-icons';
import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Chip } from './Chip';
import { ChipProps, ChipSize } from './Chip.types';

const ControlledChip = (props: ChipProps) => {
  const [stateChecked, setStateChecked] = useState(false);

  return <Chip {...props} selected={stateChecked} onChange={() => setStateChecked(!stateChecked)} />;
};

const meta: Meta<ChipProps> = {
  title: 'Forms/Chip',
  component: Chip,
  parameters: {
    importObject: 'Chip',
    importPath: '@carlsberggroup/malty.atoms.chip'
  },
  render: (args) => <ControlledChip {...args} />,
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the chip'
    },
    size: {
      description: 'Chip size. Options are',
      options: Object.values(ChipSize),
      table: {
        defaultValue: {
          summary: ChipSize.Medium
        },
        category: 'Styling'
      },
      control: 'select'
    },
    selected: {
      control: 'none',
      description: 'State of the component, selected or not selected',
      table: {
        category: 'State'
      }
    },
    showAction: {
      control: 'boolean',
      description: 'Displays add button if true'
    },
    onChange: {
      description: 'Function to be executed when Chip state changes',
      table: {
        category: 'Events'
      }
    },
    icon: {
      description: 'The icon component to be displayed',
      options: allIconsStoryOptions,
      control: 'select'
    },
    disabled: {
      control: 'boolean',
      description: 'Disable chip',
      table: {
        category: 'State'
      }
    },
    readOnly: {
      control: 'boolean',
      description: 'ReadOnly chip',
      table: {
        category: 'State'
      }
    },
    dataTestId: {
      control: 'text',
      description: 'Chip data-testid'
    },
    ...generateStorybookSpacing()
  }
};

type Story = StoryObj<ChipProps>;

export const Base: Story = {
  args: {
    label: 'Label',
    selected: false,
    showAction: false
  }
};

export const Button: Story = {
  args: {
    ...Base.args,
    showAction: true
  }
};

export const Icon: Story = {
  args: {
    ...Base.args,
    icon: <Alert />
  }
};

export const Selected: Story = {
  args: {
    ...Base.args,
    selected: true
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    selected: true,
    disabled: true
  }
};

export const ReadOnly: Story = {
  args: {
    ...Base.args,
    readOnly: true
  }
};

export default meta;
