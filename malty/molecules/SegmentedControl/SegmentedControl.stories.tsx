import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SegmentedControl } from './SegmentedControl';
import { SegmentedControlOptions, SegmentedControlProps, SegmentedControlSize } from './SegmentedControl.types';

const SegmentedControlComponent = ({ selected, ...props }: SegmentedControlProps) => {
  const [newSelected, setNewSelected] = useState(selected);

  return <SegmentedControl {...props} selected={newSelected} onChange={(value) => setNewSelected(value)} />;
};

const meta: Meta<SegmentedControlProps> = {
  title: 'Forms/Segmented Control',
  component: SegmentedControl,
  parameters: {
    importObject: 'SegmentedControl',
    importPath: '@carlsberggroup/malty.molecules.segmented-control'
  },
  render: (args) => <SegmentedControlComponent {...args} />,
  argTypes: {
    options: {
      description: 'Segmented Control options'
    },
    selected: {
      description: 'Segmented Control that is selected. Needs to match the value property inside options',
      table: {
        category: 'State'
      }
    },
    size: {
      description: 'Segmented Control size. Options are',
      options: Object.values(SegmentedControlSize),
      table: {
        category: 'Styling',
        defaultValue: {
          summary: SegmentedControlSize.Medium
        }
      },
      control: 'select'
    },

    disabled: {
      control: 'boolean',
      description: 'Disable Segmented Control',
      table: {
        category: 'State'
      }
    },
    dataQaId: {
      control: 'text',
      description: 'Segmented Control data-testid'
    },
    onChange: {
      description: 'Function that will run when the `Chip`component state changes',
      control: 'none',
      table: {
        category: 'Events'
      }
    },
    ...generateStorybookSpacing()
  }
};
const segmentedControlOptions1: SegmentedControlOptions[] = [
  {
    value: 'value 1',
    label: 'name 1'
  },
  {
    value: 'value 2',
    label: 'name 2'
  }
];
const segmentedControlOptions2: SegmentedControlOptions[] = [
  {
    value: 'value 1',
    label: 'name 1'
  },
  {
    value: 'value 2',
    label: 'name 2'
  },
  {
    value: 'value 3',
    label: 'name 3'
  }
];

type Story = StoryObj<SegmentedControlProps>;

export const Base: Story = {
  args: {
    options: segmentedControlOptions1,
    size: SegmentedControlSize.Medium,
    selected: segmentedControlOptions1[0].value,
    dataQaId: 'segmentedControl',
    disabled: false
  }
};

export const Three: Story = {
  args: {
    ...Base.args,
    options: segmentedControlOptions2,
    selected: segmentedControlOptions2[1].value
  }
};

export const Disabled: Story = {
  args: {
    ...Base.args,
    size: SegmentedControlSize.XSmall,
    disabled: true
  }
};

export default meta;
