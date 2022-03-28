import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import React, { useState } from 'react';
import { Datepicker } from './Datepicker';

const label = 'Select date';

describe('datepicker', () => {
  it('matches snapshot', () => {
    const [startDate, setStartDate] = useState(new Date());
    const view = jsonRenderer(
      <Datepicker label={label} onChange={(date: Date) => setStartDate(date)} startDate={startDate} />
    );
    expect(view).toMatchSnapshot();
  });
});
