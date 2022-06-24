import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { SegmentController } from './SegmentController';
import { SegmentControllerOptions } from './SegmentController.types';

const segmentControlOptions: SegmentControllerOptions[] = [
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
describe('SegmentController', () => {
  it('renders chips', () => {
    render(<SegmentController options={segmentControlOptions} />);
    expect(screen.getByText(segmentControlOptions[0].label)).toBeInTheDocument();
    expect(screen.getByText(segmentControlOptions[1].label)).toBeInTheDocument();
    expect(screen.getByText(segmentControlOptions[2].label)).toBeInTheDocument();
  });

  it('calls function onChange', () => {
    const onChange = jest.fn();
    render(<SegmentController options={segmentControlOptions} onChange={onChange} />);
    fireEvent.click(screen.getByText(segmentControlOptions[1].label));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
