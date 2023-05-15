import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { ProductQuantityActions } from './ProductQuantityActions';

const value = '2';

describe('ProductQuantityActions', () => {
  test('renders with correct content', () => {
    render(<ProductQuantityActions value={value} />);
    expect(screen.getByText('+')).toBeInTheDocument();
    expect(screen.getByText(value)).toBeInTheDocument();
    expect(screen.getByText('-')).toBeInTheDocument();
  });
});
