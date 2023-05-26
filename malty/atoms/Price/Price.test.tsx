import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Price } from './Price';

const base = '1000';
const discount = '500';
const credit = '200';

describe('Price', () => {
  test('renders default only correctly', () => {
    render(<Price base={base} />);
    expect(screen.getByText(base)).toBeInTheDocument();
    expect(screen.queryByText(discount)).not.toBeInTheDocument();
    expect(screen.queryByText(credit)).not.toBeInTheDocument();
  });

  test('renders discount only correctly', () => {
    render(<Price discount={discount} />);
    expect(screen.queryByText(base)).not.toBeInTheDocument();
    expect(screen.getByText(discount)).toBeInTheDocument();
    expect(screen.queryByText(credit)).not.toBeInTheDocument();
  });

  test('renders credit only correctly', () => {
    render(<Price credit={credit} />);
    expect(screen.queryByText(base)).not.toBeInTheDocument();
    expect(screen.queryByText(discount)).not.toBeInTheDocument();
    expect(screen.getByText(credit)).toBeInTheDocument();
  });

  test('renders default and discount correctly', () => {
    render(<Price base={base} discount={discount} />);
    expect(screen.getByText(base)).toBeInTheDocument();
    expect(screen.getByText(discount)).toBeInTheDocument();
    expect(screen.queryByText(credit)).not.toBeInTheDocument();
  });
});
