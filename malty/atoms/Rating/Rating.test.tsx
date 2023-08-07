import { render } from '@carlsberggroup/malty.utils.test';
import { RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Rating } from './Rating';

const renderComponent = (name: string, rating: number, disabled: boolean, readOnly: boolean): RenderResult =>
  render(
    <Rating
      label="Test label"
      dataTestId="rating"
      totalReview={55}
      name={name}
      value={rating}
      disabled={disabled}
      readOnly={readOnly}
    />
  );

describe('rating', () => {
  it('should be defined', () => {
    renderComponent('testname', 4, false, false);

    const element = screen.getAllByTestId('rating-empty-star');

    expect(element).toHaveLength(1);
  });

  it('should have 3 star selected', () => {
    renderComponent('testname', 3, false, false);

    const element = screen.getAllByTestId('rating-filled-star');

    expect(element).toHaveLength(3);
  });

  it('should have 1 star empty', () => {
    renderComponent('testname', 4, false, false);

    const element = screen.getAllByTestId('rating-empty-star');

    expect(element).toHaveLength(1);
  });

  it('should render elements', () => {
    renderComponent('rating', 1, false, false);

    expect(screen.getByText('Test label')).toBeInTheDocument();
    expect(screen.getByTestId('rating')).toBeInTheDocument();
    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
    expect(screen.getByText('(55)')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    renderComponent('rating', 0, true, false);

    const star = screen.getByDisplayValue('3');

    userEvent.click(star);

    expect(star).not.toBeChecked();
  });

  it('should be readOnly', () => {
    renderComponent('rating', 0, false, true);

    const star = screen.getByDisplayValue('3');

    userEvent.click(star);

    expect(star).not.toBeChecked();
  });
});
