import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { ProgressSpinner } from '.';
import { ProgressSpinnerStatus } from './ProgressSpinner.types';

describe('progressSpinner', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<ProgressSpinner status={ProgressSpinnerStatus.Pending} />);
    expect(view).toMatchSnapshot();
  });
});
