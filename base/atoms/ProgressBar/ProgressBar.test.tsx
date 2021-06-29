import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressBar } from '.';

describe('pill', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<ProgressBar progress={30} displayAmount label="Test text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(<ProgressBar progress={30} displayAmount label="Test text" />);
    expect(screen.getByText('Test text')).toBeInTheDocument();
    expect(screen.getByText('30%')).toBeInTheDocument();
  });
});
