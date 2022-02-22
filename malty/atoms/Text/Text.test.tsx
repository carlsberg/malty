import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { TextStyle } from '.';
import { Text } from './Text';

const text = 'this is a text block';
describe('text', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Text textStyle={TextStyle.MediumBold}>{text}</Text>);
    expect(view).toMatchSnapshot();
  });

  it('should render with the correct text', () => {
    render(<Text textStyle={TextStyle.MediumBold}>{text}</Text>);
    const rendered = screen.getByText(text);
    expect(rendered).toBeInTheDocument();
  });
});
