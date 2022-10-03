import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Overlay } from '.';

describe('overlay', () => {
  it('renders the component', () => {
    render(<Overlay content={<p>overlay</p>} />);
    expect(screen.getByText('overlay')).toBeDefined();
  });
});
