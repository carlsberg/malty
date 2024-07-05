import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Rating } from './Rating';
import { RatingProps } from './Rating.types';

const props: RatingProps = {
  label: 'Test label',
  dataTestId: 'rating',
  totalReview: 55,
  name: 'testname',
  value: 0,
  disabled: false,
  readOnly: false
};

describe('rating', () => {
  it('should have 1 star empty', () => {
    render(<Rating {...props} value={4} />);

    const element = screen.getByTestId('rating-empty-star-5');

    expect(element).toBeInTheDocument();
  });

  it('should have 3 star selected', () => {
    render(<Rating {...props} value={3} />);

    const starOne = screen.getByTestId('rating-filled-star-1');
    const starTwo = screen.getByTestId('rating-filled-star-2');
    const starThree = screen.getByTestId('rating-filled-star-3');

    expect(starOne).toBeInTheDocument();
    expect(starTwo).toBeInTheDocument();
    expect(starThree).toBeInTheDocument();
  });

  it('should render elements', () => {
    render(<Rating {...props} value={1} />);

    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByTestId(props.dataTestId as string)).toBeInTheDocument();
    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
    expect(screen.getByText('(55)')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const onStarClick = jest.fn();

    render(<Rating {...props} disabled onStarClick={onStarClick} />);

    const star = screen.getByDisplayValue('3');

    userEvent.click(star);

    expect(onStarClick).not.toHaveBeenCalled();
    expect(star).not.toBeChecked();
  });

  it('should be readOnly', () => {
    const onStarClick = jest.fn();

    render(<Rating {...props} readOnly onStarClick={onStarClick} />);

    const star = screen.getByDisplayValue('3');

    userEvent.click(star);

    expect(onStarClick).not.toHaveBeenCalled();
    expect(star).not.toBeChecked();
  });

  it('should click one of the stars', () => {
    const onStarClick = jest.fn();

    render(<Rating {...props} onStarClick={onStarClick} />);

    const star = screen.getByTestId('rating-empty-star-5');

    expect(star).toBeVisible();

    userEvent.click(star);

    expect(onStarClick).toHaveBeenCalled();
  });
});
