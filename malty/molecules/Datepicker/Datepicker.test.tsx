import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Datepicker } from './Datepicker';

const label = 'Select date';
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('datepicker', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render elements', () => {
    render(
      <Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} placeholderText="datepicker" />
    );
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByDisplayValue('01/01/2022')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('datepicker')).toBeInTheDocument();
  });

  it('should render datepicker with range', () => {
    render(
      <Datepicker
        label={label}
        onChange={mockFn}
        selectsRange
        startDate={new Date(2022, 0, 1)}
        endDate={new Date(2022, 0, 3)}
      />
    );
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByDisplayValue('01/01/2022 - 01/03/2022')).toBeInTheDocument();
  });

  it('should open datepicker when clicked', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} />);
    expect(screen.queryByText('January')).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText(label));
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('should render datepicker within a Portal and close it when selecting date', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} withPortal />);
    userEvent.click(screen.getByLabelText(label));
    expect(screen.getByText('January')).toBeInTheDocument();
    const dayToBeClicked = screen.getByText('10');
    userEvent.click(dayToBeClicked);
    expect(mockFn).toHaveBeenCalled();
    expect(screen.queryByText('January')).not.toBeInTheDocument();
  });

  it('should render datepicker within a Portal and not close it when selecting date if shouldCloseOnSelect is false', () => {
    render(
      <Datepicker
        label={label}
        onChange={mockFn}
        startDate={new Date(2022, 0, 1)}
        withPortal
        shouldCloseOnSelect={false}
      />
    );
    userEvent.click(screen.getByLabelText(label));
    expect(screen.getByText('January')).toBeInTheDocument();
    const dayToBeClicked = screen.getByText('10');
    userEvent.click(dayToBeClicked);
    expect(mockFn).toHaveBeenCalled();
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('should not open datepicker when disabled', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} disabled />);

    expect(screen.queryByText('January')).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText(label));

    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should not open datepicker when readOnly', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} readOnly />);

    expect(screen.queryByText('January')).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText(label));

    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should not set a certain date when its off the minmax date interval', () => {
    render(
      <Datepicker
        label={label}
        onChange={mockFn}
        startDate={new Date(2023, 8, 5)}
        minDate={new Date(2023, 8, 1)}
        maxDate={new Date(2023, 8, 20)}
      />
    );

    userEvent.click(screen.getByLabelText(label));

    const dayToBeClicked = screen.getByText('25');

    expect(screen.getByText('September')).toBeInTheDocument();

    userEvent.click(dayToBeClicked);

    expect(mockFn).not.toHaveBeenCalled();
  });

  it('should be required to fill', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} required />);

    // userEvent.click(screen.getByLabelText(label));

    expect(screen.getByLabelText(label)).toBeRequired();
  });
});
