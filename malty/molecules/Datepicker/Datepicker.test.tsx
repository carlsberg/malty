import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Datepicker } from './Datepicker';

const label = 'Select date';

const mockFn = jest.fn();

describe('datepicker', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Datepicker label={label} onChange={mockFn} startDate={new Date()} />);
    expect(view).toMatchSnapshot();
  });
});
