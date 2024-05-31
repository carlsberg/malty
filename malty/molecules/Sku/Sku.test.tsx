import { render } from '@carlsberggbs/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Sku } from './Sku';
import { getMROType } from './Sku.helper';
import { MRO } from './Sku.types';

const sku = 'Sku: 12512 512';

const MRO_OPTIONS = Object.values(MRO);

describe('Sku', () => {
  test('renders with correct content', () => {
    render(<Sku sku={sku} />);
    expect(screen.getByText(sku)).toBeInTheDocument();
    expect(screen.queryByText('default-mro')).not.toBeInTheDocument();
  });

  test.each(MRO_OPTIONS)('renders mro correctly for %s', (mro) => {
    render(<Sku sku={sku} mro={mro} />);
    expect(screen.getByText(getMROType(mro))).toBeInTheDocument();
  });
});
