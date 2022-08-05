import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { TextStyle } from '.';
import { Text } from './Text';

const text = 'this is a text block';
describe('text', () => {
  it('should render with the correct text', () => {
    render(<Text textStyle={TextStyle.MediumBold}>{text}</Text>);
    const rendered = screen.getByText(text);
    expect(rendered).toBeInTheDocument();
  });
});
