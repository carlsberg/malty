import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { IconColors, IconNamesTypes, IconSizesTypes } from '.';
import { Icon } from './Icon';

describe('icon', () => {
  it('matches snapshot', () => {
    const tree = renderer
      .create(<Icon name={IconNamesTypes.AddContent} color={IconColors.Primary} size={IconSizesTypes.Small} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
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
