import { render, screen } from '@testing-library/react';
import React from 'react';
import { Text } from './text';

describe('text', () => {
  it('should render with the correct text', () => {
    const text = 'this is a text block';
    render(<Text content={text} />);
    const rendered = screen.getByText(text);
    expect(rendered).toBeInTheDocument();
  });
});
