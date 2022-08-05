import { IconColor, IconSize } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Icon } from './Icon';
import { IconName } from './Icon.types';

describe('icon', () => {
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
