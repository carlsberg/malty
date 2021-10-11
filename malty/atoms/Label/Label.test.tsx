import { jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Label } from '.';

const defaultText = 'Test label';

describe('overlay', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <Label text={defaultText}>
        <input type="text" />
      </Label>
    );
    expect(view).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    render(
      <Label text={defaultText}>
        <input type="text" />
      </Label>
    );
    expect(screen.getByText(defaultText)).not.toBeNull();
  });
});
