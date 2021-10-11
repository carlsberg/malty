import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Image } from '.';

const testImageSrc = 'https://via.placeholder.com/400';

describe('Image component', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Image src={testImageSrc} cover={false} />);
    expect(view).toMatchSnapshot();
  });

  it('renders the component', () => {
    render(<Image src={testImageSrc} cover={false} alt="Image component" />);
    expect(screen.getAllByAltText('Image component')).toBeDefined();
  });
});
