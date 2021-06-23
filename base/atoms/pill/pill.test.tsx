import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { NamesTypes } from '../icon/icon.types';
import { Pill } from './pill';

describe('pill', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Pill text="Pill text" icon={NamesTypes.AddContent} />).toJSON();
    expect(tree).toMatchSnapshot();
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
