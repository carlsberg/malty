import { fireEvent, jsonRenderer, render, screen } from '@/utils/test';
import React from 'react';
import { Button } from './Button';
import { ButtonType } from './Button.types';

const defaultText = 'Submit';
const newText = 'Go';

describe('button', () => {
  it('matches snapshot', () => {
    const onClick = jest.fn();
    const view = jsonRenderer(<Button text={defaultText} buttonType={ButtonType.Primary} onClick={onClick} disabled />);
    expect(view).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    const { rerender } = render(<Button text={defaultText} buttonType={ButtonType.Primary} />);
    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Button text={newText} buttonType={ButtonType.Primary} />);
    expect(screen.getByText(newText)).not.toBeNull();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} buttonType={ButtonType.Primary} onClick={onClick} />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call function on click when disabled', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} buttonType={ButtonType.Primary} onClick={onClick} disabled />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
