import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Image } from '.';

const testImageUrl = 'https://produits.bienmanger.com/5819-0w470h470_Carlsberg_Elephant_Danish_Beer.jpg';

describe('Image component', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Image url={testImageUrl} cover={false} />);
    expect(view).toMatchSnapshot();
  });

  it('renders the component', () => {
    render(<Image url={testImageUrl} cover={false} alt="Image component" />);
    expect(screen.getAllByAltText('Image component')).toBeDefined();
  });
});
