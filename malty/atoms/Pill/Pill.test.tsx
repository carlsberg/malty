import { fireEvent, jsonRenderer, render, screen } from '@carlsberg/malty.utils.test';
import React from 'react';
import { NamesTypes } from '../Icon/Icon.types';
import { Pill } from './Pill';

describe('pill', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Pill text="Pill text" icon={NamesTypes.AddContent} />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(<Pill text="Pill text" icon={NamesTypes.AddContent} />);
    expect(screen.getByText('Pill text')).toBeInTheDocument();
    expect(screen.getByTestId('svg-component')).toBeInTheDocument();
  });

  it('calls funtion on click', () => {
    const mockFn = jest.fn();
    render(<Pill onClick={mockFn} text="Pill text" />);
    const pill = screen.getByText('Pill text');
    fireEvent.click(pill);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
