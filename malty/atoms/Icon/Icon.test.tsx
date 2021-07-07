import { fireEvent, jsonRenderer, render, screen } from '@/utils/test';
import React from 'react';
import { IconColors, IconNamesTypes, IconSizesTypes } from '.';
import { Icon } from './Icon';

describe('icon', () => {
  it('matches snapshot', () => {
    const view = jsonRenderer(
      <Icon name={IconNamesTypes.AddContent} color={IconColors.Primary} size={IconSizesTypes.Small} />
    );
    expect(view).toMatchSnapshot();
  });
  it('renders an icon as svg', () => {
    render(<Icon name={IconNamesTypes.AddContent} color={IconColors.Primary} size={IconSizesTypes.Small} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(
      <Icon
        name={IconNamesTypes.AddContent}
        color={IconColors.Primary}
        onIconClick={onClick}
        size={IconSizesTypes.Small}
      />
    );
    fireEvent.click(screen.getByTestId('svg-component'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
