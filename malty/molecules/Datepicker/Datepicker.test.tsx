import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Datepicker } from './Datepicker';

const label = 'Select date';
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('datepicker', () => {
  it('renders elements', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} />);
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByDisplayValue('01/01/2022')).toBeInTheDocument();
  });
  it('renders datepicker with range', () => {
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

  it('opens datepicker when clicked', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} />);
    expect(screen.queryByText('January')).not.toBeInTheDocument();
    userEvent.click(screen.getByLabelText(label));
    expect(screen.getByText('January')).toBeInTheDocument();
  });

  it('renders datepicker within a Portal and close it when selecting date', () => {
    render(<Datepicker label={label} onChange={mockFn} startDate={new Date(2022, 0, 1)} withPortal />);
    userEvent.click(screen.getByLabelText(label));
    expect(screen.getByText('January')).toBeInTheDocument();
    const dayToBeClicked = screen.getByText('10');
    userEvent.click(dayToBeClicked);
    expect(mockFn).toHaveBeenCalled();
    expect(screen.queryByText('January')).not.toBeInTheDocument();
  });

  it('renders datepicker within a Portal and not close it when selecting date if shouldCloseOnSelect is false', () => {
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
});
