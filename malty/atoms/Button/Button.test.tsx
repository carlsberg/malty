import { jsonRenderer, render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { ButtonStyle } from './Button.types';

const defaultText = 'Submit';
const newText = 'Go';

describe('button', () => {
  it('matches snapshot', () => {
    const onClick = jest.fn();
    const view = jsonRenderer(<Button text={defaultText} style={ButtonStyle.Primary} onClick={onClick} disabled />);
    expect(view).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    const { rerender } = render(<Button text={defaultText} style={ButtonStyle.Primary} />);
    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Button text={newText} style={ButtonStyle.Primary} />);
    expect(screen.getByText(newText)).not.toBeNull();
  });

  it('renders with correct text via child', () => {
    render(<Button style={ButtonStyle.Primary}>{defaultText}</Button>);
    expect(screen.getByText(defaultText)).not.toBeNull();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} style={ButtonStyle.Primary} onClick={onClick} />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call function on click when disabled', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} style={ButtonStyle.Primary} onClick={onClick} disabled />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
