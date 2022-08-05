import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Chip } from './Chip';

const defaultLabel = 'label';

describe('chip', () => {
  it('renders with correct text', () => {
    render(<Chip selected={false} label={defaultLabel} />);
    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
  });

  it('calls function onChange', () => {
    const onChange = jest.fn();
    render(<Chip selected={false} label={defaultLabel} onChange={onChange} />);
    fireEvent.click(screen.getByText(defaultLabel));
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
