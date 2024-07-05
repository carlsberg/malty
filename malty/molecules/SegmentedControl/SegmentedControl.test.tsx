import { render } from '@carlsberg/malty.utils.test';
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
  const onChange = jest.fn();

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
    render(<SegmentedControl options={segmentedControlOptions} onChange={onChange} />);

    userEvent.click(screen.getByText(segmentedControlOptions[1].label));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(
      <SegmentedControl options={segmentedControlOptions} onChange={onChange} dataQaId="segmentedcontrol" disabled />
    );

    userEvent.click(screen.getByText(segmentedControlOptions[1].label), undefined, { skipPointerEventsCheck: true });

    segmentedControlOptions.forEach((_, index) => {
      expect(screen.getByTestId(`segmentedcontrol-chip-${index}`)).toHaveAttribute('disabled');
    });

    expect(onChange).not.toHaveBeenCalled();
  });

  it('should click on third option', () => {
    render(<SegmentedControl options={segmentedControlOptions} onChange={onChange} />);

    const option2 = screen.getByText(segmentedControlOptions[2].label);

    expect(option2).toBeInTheDocument();

    userEvent.click(option2);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(segmentedControlOptions[2].value);
  });
});
