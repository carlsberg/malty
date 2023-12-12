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

    expect(screen.getByText(text)).toBeVisible();
    expect(screen.getByTestId(`icon-${iconName}`)).toBeVisible();
  });

  it('should not render the component with the text and icon', () => {
    render(<Pill />);

    expect(screen.queryByText(text)).not.toBeInTheDocument();
    expect(screen.queryByTestId(`icon-${iconName}`)).not.toBeInTheDocument();
  });
});
