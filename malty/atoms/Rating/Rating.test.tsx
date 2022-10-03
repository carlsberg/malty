/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@carlsberggroup/malty.utils.test';
import { RenderResult } from '@testing-library/react';
import React from 'react';
import { Rating } from './Rating';

const renderComponent = (name: string, rating: number): RenderResult =>
  render(<Rating label="Test label" name={name} value={rating} />);

describe('rating', () => {
  it('should be defined', async () => {
    const { container } = renderComponent('testname', 4);
    expect(container.getElementsByClassName('dv-star-rating')).toHaveLength(1);
  });

  it('should have 3 star selected', async () => {
    const { container } = renderComponent('testname', 3);
    expect(container.getElementsByClassName('dv-star-rating-full-star')).toHaveLength(3);
  });

  it('should have 1 star empty', async () => {
    const { container } = renderComponent('testname', 4);
    expect(container.getElementsByClassName('dv-star-rating-empty-star')).toHaveLength(1);
  });
});
