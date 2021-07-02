import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './Text';

const text = 'this is a text block';
describe('text', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<Text content={text} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with the correct text', () => {
    render(<Text content={text} />);
    const rendered = screen.getByText(text);
    expect(rendered).toBeInTheDocument();
  });
});
