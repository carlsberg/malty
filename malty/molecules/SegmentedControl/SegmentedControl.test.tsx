import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { SegmentedControl } from './SegmentedControl';
import { SegmentedControlOptions } from './SegmentedControl.types';

const segmentedControlOptions: SegmentedControlOptions[] = [
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

describe('SegmentedControl', () => {
  it('renders chips', () => {
    render(<SegmentedControl options={segmentedControlOptions} />);
    expect(screen.getByText(segmentedControlOptions[0].label)).toBeInTheDocument();
    expect(screen.getByText(segmentedControlOptions[1].label)).toBeInTheDocument();
    expect(screen.getByText(segmentedControlOptions[2].label)).toBeInTheDocument();
  });

  it('calls function onChange', () => {
    const onChange = jest.fn();
    render(<SegmentedControl options={segmentedControlOptions} onChange={onChange} />);
    fireEvent.click(screen.getByText(segmentedControlOptions[1].label));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
