import { Story } from '@storybook/react';
import React, { useState } from 'react';
import { SegmentController as SegmentControllerComponent } from './SegmentController';
import { SegmentControllerOptions, SegmentControllerProps, SegmentControllerSize } from './SegmentController.types';

export default {
  title: 'Forms/SegmentedControl',
  component: SegmentControllerComponent,
  parameters: {
    importObject: 'SegmentController',
    importPath: '@carlsberggroup/malty.molecules.SegmentController'
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
      options: Object.values(SegmentControllerSize),
      table: {
        defaultValue: {
          summary: 'SegmentControllerSize.Medium'
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
    }
  }
};
const segmentControlOptions1: SegmentControllerOptions[] = [
  {
    value: 'value 1',
    label: 'name 1'
  },
  {
    value: 'value 2',
    label: 'name 2'
  }
];
const segmentControlOptions2: SegmentControllerOptions[] = [
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
const Template: Story<SegmentControllerProps> = (args) => {
  const [selected, setselected] = useState(segmentControlOptions1[1].value);
  return <SegmentControllerComponent {...args} selected={selected} onChange={(value) => setselected(value)} />;
};

export const SegmentedControl = Template.bind({});

const params = new URLSearchParams(window.location.search);
const variant = params.get('variant');

switch (variant) {
  case 'three':
    SegmentedControl.args = {
      options: segmentControlOptions2,
      selected: 'value 2'
    };
    break;
  case 'disabled':
    SegmentedControl.args = {
      options: segmentControlOptions1,
      size: SegmentControllerSize.XSmall,
      selected: 'value 1',
      disabled: true
    };
    break;

  default:
    SegmentedControl.args = {
      options: segmentControlOptions1,
      size: SegmentControllerSize.Small,
      selected: 'value 1'
    };
    break;
}
