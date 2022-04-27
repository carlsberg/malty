import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Pill } from './Pill';

describe('pill', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Pill text="Pill text" icon={IconName.CarlsbergFilled} />);
    expect(view).toMatchSnapshot();
  });

  it('renders elements', () => {
    render(<Pill text="Pill text" icon={IconName.CarlsbergFilled} />);
    expect(screen.getByText('Pill text')).toBeInTheDocument();
    expect(screen.getByTestId('svg-component')).toBeInTheDocument();
  });
});
