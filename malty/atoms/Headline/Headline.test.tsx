import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Headline } from './Headline';

const text = 'this is a headline';
describe('Headline component', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Headline>{text}</Headline>);
    expect(view).toMatchSnapshot();
  });

  it('should render with the correct text', () => {
    render(<Headline>{text}</Headline>);
    const rendered = screen.getByText(text);
    expect(rendered).toBeInTheDocument();
  });
});
