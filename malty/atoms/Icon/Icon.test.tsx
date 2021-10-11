import { Colors, SizesTypes } from '@carlsberggroup/malty.atoms.icon-wrapper';
import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { IconNamesTypes } from '.';
import { Icon } from './Icon';

describe('icon', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Icon name={IconNamesTypes.AddContent} color={Colors.Primary} size={SizesTypes.Small} />);
    expect(view).toMatchSnapshot();
  });
  it('renders an icon as svg', () => {
    render(<Icon name={IconNamesTypes.AddContent} color={Colors.Primary} size={SizesTypes.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const iconMockClickFn = jest.fn();
    render(
      <Icon name={IconNamesTypes.AddContent} color={Colors.Primary} onClick={iconMockClickFn} size={SizesTypes.Small} />
    );
    fireEvent.click(screen.getByTestId('svg-component'));
    expect(iconMockClickFn).toHaveBeenCalledTimes(1);
  });
});
