import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { getMROType, Sku } from './Sku';
import { MRO } from './Sku.types';

const sku = 'Sku: 12512 512';

const MRO_OPTIONS = Object.values(MRO);

describe('Sku', () => {
  test('renders with correct content', () => {
    render(<Sku sku={sku} />);
    expect(screen.getByText(sku)).toBeInTheDocument();
  });
  test.each(MRO_OPTIONS)('renders mro correctly', (mro) => {
    render(<Sku sku={sku} mro={mro} />);
    expect(screen.getByText(getMROType(mro))).toBeInTheDocument();
  });
});
