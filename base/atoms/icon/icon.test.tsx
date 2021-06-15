import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { ColorsTypes, SizesTypes } from './icon.types';
import AddContent from './icons/AddContent';

describe('icon', () => {
  it('renders an icon as svg', () => {
    render(<AddContent color={ColorsTypes.Primary} size={SizesTypes.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = renderer.create(<AddContent color={ColorsTypes.Primary} size={SizesTypes.Small} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
