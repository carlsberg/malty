import { render, screen } from '@testing-library/react';
import React from 'react';
import { BasicText } from './text.composition';

describe('text', () => {
  it('should render with the correct text', () => {
    render(<BasicText />);
    const rendered = screen.getByText('this is a text block');
    expect(rendered).toBeTruthy();
  });
});
