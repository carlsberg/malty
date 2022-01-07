import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Pagination } from './Pagination';

describe('molecule pagination', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Pagination currentPage={1} count={10} onChange={() => null} />);
    expect(view).toMatchSnapshot();
  });
});
