import { render } from '@carlsberg/malty.utils.test';
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

  it('should call `onClose` when datepicker is closed', () => {
    const onClose = jest.fn();

    render(<Datepicker {...defaultProps} startDate={new Date(2023, 12, 15)} onClose={onClose} />);

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(onClose).not.toHaveBeenCalled();

    const dayToBeClicked = screen.getByText('16');

    userEvent.click(dayToBeClicked);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should call `onClose` when datepicker is closed using selectsRange', () => {
    const onClose = jest.fn();

    render(<Datepicker {...defaultProps} startDate={new Date(2023, 12, 15)} onClose={onClose} selectsRange />);

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(onClose).not.toHaveBeenCalled();

    const firstDay = screen.getByText('16');
    const secondDay = screen.getByText('17');

    userEvent.click(firstDay);
    userEvent.click(secondDay);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should call `onClose` when clicking on the primary action', () => {
    const onClose = jest.fn();

    render(<Datepicker {...defaultProps} onClose={onClose} primaryAction={{ label: 'Confirm', action: jest.fn() }} />);

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(onClose).not.toHaveBeenCalled();

    const confirmButton = screen.getByRole('button', { name: 'Confirm' });

    userEvent.click(confirmButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('should call `onClose` when clicking on the secondary action', () => {
    const onClose = jest.fn();

    render(<Datepicker {...defaultProps} onClose={onClose} secondaryAction={{ label: 'Cancel', action: jest.fn() }} />);

    userEvent.click(screen.getByLabelText(defaultProps.label));

    expect(onClose).not.toHaveBeenCalled();

    const cancelButton = screen.getByRole('button', { name: 'Cancel' });

    userEvent.click(cancelButton);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
