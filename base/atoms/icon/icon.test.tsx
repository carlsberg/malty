import { render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { Icon } from './icon';
import { ColorsTypes, NamesTypes, SizesTypes } from './icon.types';

describe('icon', () => {
  it('renders an icon as svg', () => {
    render(<Icon name={NamesTypes.AddContent} color={ColorsTypes.Primary} size={SizesTypes.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });
  it('renders correctly', () => {
    const tree = renderer
      .create(<Icon name={NamesTypes.AddContent} color={ColorsTypes.Primary} size={SizesTypes.Small} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
