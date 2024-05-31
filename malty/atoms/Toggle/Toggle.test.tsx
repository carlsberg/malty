import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Toggle } from './Toggle';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const mockFn = jest.fn();

describe('toggle', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render elements', () => {
    render(<Toggle label="Label text" error="Error text" dataTestId="toggle" checked onValueChange={mockFn} />);
    expect(screen.getByText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
    expect(screen.getByTestId('toggle-input')).toBeInTheDocument();
  });

  it('should call function on click', () => {
    render(<Toggle label="Label text" error="Error text" checked onValueChange={mockFn} />);
    const toggle = screen.getByText('Label text');

    userEvent.click(toggle);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled', () => {
    render(
      <Toggle label="Label text" error="Error text" dataTestId="toggle" checked disabled onValueChange={mockFn} />
    );

    // TODO: transform this into "getByText(labelText)" on the following ticket https://carlsberggbs.atlassian.net/browse/DSM-822
    const toggle = screen.getByTestId('toggle-input');

    expect(toggle).toBeDisabled();
  });

  it('should be checked', () => {
    render(<Toggle label="Label text" error="Error text" dataTestId="toggle" checked onValueChange={mockFn} />);
    const toggle = screen.getByTestId('toggle-input');

    expect(toggle).toBeChecked();
  });

  it('should be unchecked', () => {
    render(<Toggle label="Label text" error="Error text" dataTestId="toggle" disabled onValueChange={mockFn} />);
    const toggle = screen.getByTestId('toggle-input');

    expect(toggle).not.toBeChecked();
  });
});
