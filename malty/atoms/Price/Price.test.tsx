import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Price } from './Price';

const base = '1000';
const discount = '500';
const credit = '200';
const testId = 'price';

describe('Price', () => {
  it('should renders default only correctly', () => {
    render(<Price base={base} />);

    expect(screen.getByText(base)).toBeInTheDocument();
    expect(screen.queryByText(discount)).not.toBeInTheDocument();
    expect(screen.queryByText(credit)).not.toBeInTheDocument();
  });

  it('should render discount only correctly', () => {
    render(<Price discount={discount} />);

    expect(screen.queryByText(base)).not.toBeInTheDocument();
    expect(screen.getByText(discount)).toBeInTheDocument();
    expect(screen.queryByText(credit)).not.toBeInTheDocument();
  });

  it('should render credit only correctly', () => {
    render(<Price credit={credit} />);

    expect(screen.queryByText(base)).not.toBeInTheDocument();
    expect(screen.queryByText(discount)).not.toBeInTheDocument();
    expect(screen.getByText(credit)).toBeInTheDocument();
  });

  it('should render default and discount correctly', () => {
    render(<Price base={base} discount={discount} />);

    expect(screen.getByText(base)).toBeInTheDocument();
    expect(screen.getByText(discount)).toBeInTheDocument();
    expect(screen.queryByText(credit)).not.toBeInTheDocument();
  });

  it('should render default, discount and credit correctly', () => {
    render(<Price base={base} discount={discount} credit={credit} />);

    expect(screen.queryByText(base)).not.toBeInTheDocument();
    expect(screen.queryByText(discount)).not.toBeInTheDocument();
    expect(screen.getByText(credit)).toBeInTheDocument();
  });

  it('should render discount and credit correctly', () => {
    render(<Price discount={discount} credit={credit} />);

    expect(screen.queryByText(base)).not.toBeInTheDocument();
    expect(screen.queryByText(discount)).not.toBeInTheDocument();
    expect(screen.getByText(credit)).toBeInTheDocument();
  });

  it('should render with the correct test id', () => {
    render(<Price discount={discount} credit={credit} dataTestId={testId} />);

    expect(screen.getByTestId(`${testId}-credit-price`)).toBeInTheDocument();
  });
});
