import { CarlsbergFilled } from '@carlsberggroup/malty.icons.carlsberg-filled';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import React from 'react';
import { BaseIcon, CloneIcon } from './BaseIcon';

const dataTestId = 'base-icon-component';

describe('BaseIcon', () => {
  it('should render default "dataTestId"', () => {
    render(<BaseIcon />);

    expect(screen.getByTestId('icon')).toBeVisible();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should render component with the new "dataTestId"', () => {
    render(<BaseIcon dataTestId={dataTestId} />);

    expect(screen.getByTestId(dataTestId)).toBeVisible();
  });

  it('should render a button when an `onClick` is passed', () => {
    const ariaLabel = 'BaseIcon being displayed';

    render(<BaseIcon dataTestId={dataTestId} onClick={jest.fn()} ariaLabel={ariaLabel} />);

    expect(screen.getByRole('button', { name: ariaLabel })).toBeVisible();
  });

  it('should clone an icon correctly', () => {
    render(<CloneIcon icon={<CarlsbergFilled dataTestId={dataTestId} />} />);

    expect(screen.getByTestId(dataTestId)).toBeVisible();
  });

  it('should not break if icon is not present', () => {
    const { container } = render(<CloneIcon />);

    expect(container).toBeEmptyDOMElement();
  });
});
