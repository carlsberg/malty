import { render, screen } from '@testing-library/react';
import React from 'react';
import { ColorsTypes, SizesTypes } from './icon.types';
import AddContent from './icons/AddContent';

describe('icon', () => {
  it('renders an icon as svg', () => {
    render(<AddContent color={ColorsTypes.Primary} size={SizesTypes.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });
});
