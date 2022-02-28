import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Icon } from './Icon';
import { IconName } from './Icon.types';

describe('icon', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Icon name={IconName.CarlsbergFilled} color={IconColor.Primary} size={IconSize.Small} />);
    expect(view).toMatchSnapshot();
  });
  it('renders an icon as svg', () => {
    render(<Icon name={IconName.CarlsbergFilled} color={IconColor.Primary} size={IconSize.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const iconMockClickFn = jest.fn();
    render(
      <Icon name={IconName.CarlsbergFilled} color={IconColor.Primary} onClick={iconMockClickFn} size={IconSize.Small} />
    );
    fireEvent.click(screen.getByTestId('svg-component'));
    expect(iconMockClickFn).toHaveBeenCalledTimes(1);
  });
});
