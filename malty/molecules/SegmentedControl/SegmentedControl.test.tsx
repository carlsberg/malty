import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render chips', () => {
    render(<SegmentedControl options={segmentedControlOptions} />);

    expect(screen.getByText(segmentedControlOptions[0].label)).toBeInTheDocument();
    expect(screen.getByText(segmentedControlOptions[1].label)).toBeInTheDocument();
    expect(screen.getByText(segmentedControlOptions[2].label)).toBeInTheDocument();
  });

  it('should call function onChange', () => {
    const onChange = jest.fn();

    render(<SegmentedControl options={segmentedControlOptions} onChange={onChange} />);

    userEvent.click(screen.getByText(segmentedControlOptions[1].label));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    const onChange = jest.fn();

    render(
      <SegmentedControl options={segmentedControlOptions} onChange={onChange} dataQaId="segmentedcontrol" disabled />
    );

    expect(screen.getByTestId('segmentedcontrol-chip-0')).toHaveAttribute('disabled');
  });

  it('should click on third option', () => {
    const onChange = jest.fn();
    render(<SegmentedControl options={segmentedControlOptions} onChange={onChange} />);

    const option2 = screen.getByText(segmentedControlOptions[2].label);

    expect(option2).toBeInTheDocument();

    userEvent.click(option2);

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
