import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Text } from './Text';

const text = 'this is a text block';
describe('text', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Text content={text} />);
    expect(view).toMatchSnapshot();
  });

  it('should render with the correct text', () => {
    render(<Text content={text} />);
    const rendered = screen.getByText(text);
    expect(rendered).toBeInTheDocument();
  });
});
