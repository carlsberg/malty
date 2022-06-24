import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Link } from './Link';

const defaultText = 'Link text';
const newText = 'New text';

describe('link', () => {
  it('renders with correct text', () => {
    const { rerender } = render(<Link text={defaultText} url="https://www.google.com/" />);
    expect(screen.getByText(defaultText)).toBeInTheDocument();

    rerender(<Link text={newText} url="https://www.google.com/" />);
    expect(screen.getByText(newText)).toBeInTheDocument();
  });

  it('renders with correct text via child', () => {
    render(<Link url="https://www.google.com/">{defaultText}</Link>);
    expect(screen.getByText(defaultText)).toBeInTheDocument();
  });
});
