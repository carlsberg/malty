import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Datepicker } from './Datepicker';
import { DatepickerProps } from './Datepicker.types';

const defaultProps: Required<Pick<DatepickerProps, 'label' | 'onChange' | 'startDate' | 'placeholderText'>> &
  DatepickerProps = {
  label: 'Select date',
  onChange: jest.fn(),
  startDate: new Date(2022, 0, 1),
  placeholderText: 'datepicker'
};

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('datepicker', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render elements', () => {
    render(<Datepicker {...defaultProps} />);

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
    expect(screen.getByDisplayValue('01/01/2022')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('datepicker')).toBeInTheDocument();
  });

  it('should render datepicker with range', () => {
    render(<Datepicker {...defaultProps} selectsRange endDate={new Date(2022, 0, 3)} />);

    expect(screen.getByLabelText(defaultProps.label)).toBeInTheDocument();
    expect(screen.getByDisplayValue('01/01/2022 - 01/03/2022')).toBeInTheDocument();
  });

  it('should open datepicker when clicked', () => {
    render(<Datepicker {...defaultProps} />);

    expect(screen.queryByText('January')).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('should render datepicker within a Portal and close it when selecting date', () => {
    render(<Datepicker {...defaultProps} withPortal />);

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(screen.getByText('January')).toBeInTheDocument();

    const dayToBeClicked = screen.getByText('10');

    userEvent.click(dayToBeClicked);

    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(screen.queryByText('January')).not.toBeInTheDocument();
  });

  it('should render datepicker within a Portal and not close it when selecting date if shouldCloseOnSelect is false', () => {
    render(<Datepicker {...defaultProps} withPortal shouldCloseOnSelect={false} />);
    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(screen.getByText('January')).toBeInTheDocument();

    const dayToBeClicked = screen.getByText('10');

    userEvent.click(dayToBeClicked);

    expect(defaultProps.onChange).toHaveBeenCalled();
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('should not open datepicker when disabled', () => {
    render(<Datepicker {...defaultProps} disabled />);

    expect(screen.queryByText('January')).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(defaultProps.onChange).not.toHaveBeenCalled();
    expect(screen.queryByText('January')).not.toBeInTheDocument();
  });

  it('should not open datepicker when readOnly', () => {
    render(<Datepicker {...defaultProps} readOnly />);

    expect(screen.queryByText('January')).not.toBeInTheDocument();

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(defaultProps.onChange).not.toHaveBeenCalled();

    expect(screen.queryByText('January')).not.toBeInTheDocument();
  });

  it('should not set a certain date when its off the minmax date interval', () => {
    render(
      <Datepicker
        {...defaultProps}
        startDate={new Date(2023, 8, 5)}
        minDate={new Date(2023, 8, 1)}
        maxDate={new Date(2023, 8, 20)}
      />
    );

    userEvent.click(screen.getByLabelText(defaultProps.label));

    const dayToBeClicked = screen.getByText('25');

    expect(screen.getByText('September')).toBeInTheDocument();

    userEvent.click(dayToBeClicked);

    expect(defaultProps.onChange).not.toHaveBeenCalled();
    expect(dayToBeClicked).toHaveAttribute('aria-disabled', 'true');
  });

  it('should be required to fill when required', () => {
    render(<Datepicker {...defaultProps} required />);

    expect(screen.getByLabelText(defaultProps.label)).toBeRequired();
  });

  it('should display the datepicker input according to the date format provided', () => {
    render(<Datepicker {...defaultProps} startDate={new Date(2022, 11, 1)} dateFormat="dd/MM/yyyy" />);

    expect(screen.getByDisplayValue('01/12/2022')).toBeInTheDocument();
  });
});
