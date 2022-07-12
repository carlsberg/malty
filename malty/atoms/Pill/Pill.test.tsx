import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Pill } from './Pill';

describe('pill', () => {
  it('renders elements', () => {
    render(<Pill text="Pill text" icon={IconName.CarlsbergFilled} />);
    expect(screen.getByText('Pill text')).toBeInTheDocument();
    expect(screen.getByTestId('svg-component')).toBeInTheDocument();
  });
});
