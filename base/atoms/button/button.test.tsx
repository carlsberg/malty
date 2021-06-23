import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import renderer from 'react-test-renderer';
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

  it('renders correctly', () => {
    const onClick = jest.fn();
    const tree = renderer
      .create(<Button text={defaultText} buttonType={ButtonType.Primary} onClick={onClick} disabled />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
