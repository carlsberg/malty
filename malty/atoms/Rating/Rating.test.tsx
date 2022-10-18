import { render } from '@carlsberggroup/malty.utils.test';
import { RenderResult, screen } from '@testing-library/react';
import React from 'react';
import { Rating } from './Rating';

const renderComponent = (name: string, rating: number): RenderResult =>
  render(<Rating label="Test label" name={name} value={rating} />);

describe('rating', () => {
  it('should be defined', () => {
    renderComponent('testname', 4);
    const element = screen.getAllByTestId('rating-empty-star');
    expect(element).toHaveLength(1);
  });

  it('should have 3 star selected', () => {
    renderComponent('testname', 3);
    const element = screen.getAllByTestId('rating-filled-star');
    expect(element).toHaveLength(3);
  });

  it('should have 1 star empty', () => {
    renderComponent('testname', 4);
    const element = screen.getAllByTestId('rating-empty-star');
    expect(element).toHaveLength(1);
  });
});
