import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { NamesTypes } from '../icon/icon.types';
import { Button } from './button';
import { ButtonType } from './button.types';

const defaultText = 'Submit';
const newText = 'Go';

describe('button', () => {
  it('renders with correct text', () => {
    const { rerender } = render(<Button text={defaultText} buttonType={ButtonType.Primary} />);
    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Button text={newText} buttonType={ButtonType.Primary} />);
    expect(screen.getByText(newText)).not.toBeNull();
  });

  it('calls correct function on click', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} buttonType={ButtonType.Primary} onClick={onClick} />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with an icon', () => {
    render(<Button text={defaultText} buttonType={ButtonType.Primary} icon={NamesTypes.AddContent} />);
    const element = screen.getByTestId('svg-component');
    expect(element).toBeInTheDocument();
  });
});
