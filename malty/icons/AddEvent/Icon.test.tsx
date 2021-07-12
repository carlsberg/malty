import { fireEvent, jsonRenderer, render, screen } from '@carlsberg/malty.utils.test';
import React from 'react';
import { Colors as IconColors, SizesTypes as IconSizesTypes } from './Icon.types';
// eslint-disable-next-line import/no-named-default
import { default as Icon } from './index';

describe('icon', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(<Icon color={IconColors.Primary} size={IconSizesTypes.Small} />);
    expect(view).toMatchSnapshot();
  });
  it('renders an icon as svg', () => {
    render(<Icon color={IconColors.Primary} size={IconSizesTypes.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(<Icon color={IconColors.Primary} onIconClick={onClick} size={IconSizesTypes.Small} />);
    fireEvent.click(screen.getByTestId('svg-component'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
