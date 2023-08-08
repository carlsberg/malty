import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Rating } from './Rating';
import { RatingProps } from './Rating.types';

const props: RatingProps = {
  label: 'Test label',
  dataTestId: 'rating',
  totalReview: 55,
  name: 'testname',
  value: 0
};

describe('rating', () => {
  it('should have 1 star empty', () => {
    render(<Rating {...props} value={4} disabled={false} readOnly={false} />);

    const element = screen.getAllByTestId('rating-empty-star');

    expect(element).toHaveLength(1);
  });

  it('should have 3 star selected', () => {
    render(<Rating {...props} value={3} disabled={false} readOnly={false} />);

    const element = screen.getAllByTestId('rating-filled-star');

    expect(element).toHaveLength(3);
  });

  it('should render elements', () => {
    render(<Rating {...props} value={1} disabled={false} readOnly={false} />);

    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByTestId(props.dataTestId as string)).toBeInTheDocument();
    expect(screen.getByDisplayValue(1)).toBeInTheDocument();
    expect(screen.getByText('(55)')).toBeInTheDocument();
  });

  it('should be disabled', () => {
    const onStarClick = jest.fn();

    render(<Rating {...props} value={0} disabled readOnly={false} onStarClick={onStarClick} />);

    const star = screen.getByDisplayValue('3');

    userEvent.click(star);

    expect(onStarClick).not.toHaveBeenCalled();
    expect(star).not.toBeChecked();
  });

  it('should be readOnly', () => {
    const onStarClick = jest.fn();

    render(<Rating {...props} value={0} disabled={false} readOnly onStarClick={onStarClick} />);

    const star = screen.getByDisplayValue('3');

    userEvent.click(star);

    expect(onStarClick).not.toHaveBeenCalled();
    expect(star).not.toBeChecked();
  });
});
