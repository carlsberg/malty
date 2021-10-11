import { jsonRenderer } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Overlay } from '.';

describe('overlay', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Overlay />);
    expect(view).toMatchSnapshot();
  });
});
