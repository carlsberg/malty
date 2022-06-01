import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Image } from '.';

const testImageSrc = 'https://via.placeholder.com/400';

describe('Image component', () => {
  it('renders the component', () => {
    render(<Image src={testImageSrc} cover={false} alt="Image component" dataTestId="image" />);
    expect(screen.getAllByAltText('Image component')).toBeDefined();
  });
});
