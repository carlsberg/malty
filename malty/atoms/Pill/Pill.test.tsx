import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { Pill } from './Pill';

describe('pill', () => {
  const iconName = IconName.CarlsbergFilled;
  const text = 'Pill text';

  it('should render the component correctly', () => {
    render(<Pill text={text} icon={iconName} />);
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(screen.getByTestId(`icon-${iconName}`)).toBeInTheDocument();
  });
});
