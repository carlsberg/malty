import React from 'react';
import { render } from '@testing-library/react';
import * as Icons from './icon';
import { ColorsTypes, SizesTypes } from './icon.types';

describe('icon', () => {

  it('should render with the correct text', () => {
    const { getByText } = render(<Icons.AddContent color={ColorsTypes.Primary} size={SizesTypes.Small} />);
    const rendered = getByText('hello from Icon');
    expect(rendered).toBeTruthy();
  });

})