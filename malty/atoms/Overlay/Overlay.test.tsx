import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Overlay } from '.';

describe('overlay', () => {
  it('should render the component', () => {
    render(<Overlay content={<p>overlay</p>} />);
    expect(screen.getByText('overlay')).toBeDefined();
  });
});
