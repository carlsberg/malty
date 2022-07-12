import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Label } from '.';

const defaultText = 'Test label';

describe('label', () => {
  it('renders with correct text', () => {
    render(
      <Label text={defaultText}>
        <input type="text" />
      </Label>
    );
    expect(screen.getByText(defaultText)).not.toBeNull();
  });
});
