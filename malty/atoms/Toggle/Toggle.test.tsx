import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Toggle } from './Toggle';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('toggle', () => {
  it('renders elements', () => {
    const mockFn = jest.fn();
    render(<Toggle label="Label text" error="Error text" checked onValueChange={mockFn} />);
    expect(screen.getByText('Label text')).toBeInTheDocument();
    expect(screen.getByText('Error text')).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const mockFn = jest.fn();
    render(<Toggle label="Label text" error="Error text" checked onValueChange={mockFn} />);
    const toggle = screen.getByText('Label text');
    fireEvent.click(toggle);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
