import { generateStorybookSpacing } from '@carlsberggroup/malty.utils.space';
import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { SegmentedControl as SegmentedControlComponent } from './SegmentedControl';
import { SegmentedControlOptions, SegmentedControlProps, SegmentedControlSize } from './SegmentedControl.types';

export default {
  title: 'Forms/Segmented Control',
  component: SegmentedControlComponent,
  parameters: {
    importObject: 'SegmentedControl',
    importPath: '@carlsberggroup/malty.molecules.segmented-control'
  },
  argTypes: {
    options: {
      description: 'Segmented Control options'
    },
    selected: {
      description: 'Segmented Control that is selected. Needs to match the value property inside options'
    },
    size: {
      description: 'Segmented Control size. Options are',
      options: Object.values(SegmentedControlSize),
      table: {
        defaultValue: {
          summary: 'SegmentedControlSize.Medium'
        }
      },
      control: {
        type: 'select'
      }
    },

    disabled: {
      control: 'boolean',
      description: 'Disable Segmented Control'
    },
    dataQaId: {
      control: 'text',
      description: 'Segmented Control data-testid'
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
const Template: Story<SegmentedControlProps> = (args) => {
  const [selected, setselected] = useState(segmentedControlOptions1[1].value);
  return <SegmentedControlComponent {...args} selected={selected} onChange={(value) => setselected(value)} />;
};

export const SegmentedControl = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'three':
    SegmentedControl.args = {
      options: segmentedControlOptions2,
      selected: 'value 2'
    };
    break;
  case 'disabled':
    SegmentedControl.args = {
      options: segmentedControlOptions1,
      size: SegmentedControlSize.XSmall,
      selected: 'value 1',
      disabled: true
    };
    break;

  default:
    SegmentedControl.args = {
      options: segmentedControlOptions1,
      size: SegmentedControlSize.Small,
      selected: 'value 1'
    };
    break;
}
