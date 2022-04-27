import { fireEvent, jsonRenderer, render, screen } from '@carlsberggroup/malty.utils.test';
import React from 'react';
import { Floater } from './Floater';

const defaultText = 'Submit';
const newText = 'Go';

describe('floater', () => {
  it('matches snapshot', () => {
    const onClick = jest.fn();
    const view = jsonRenderer(<Floater text={defaultText} onClick={onClick} />);
    expect(view).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    const { rerender } = render(<Floater text={defaultText} />);
    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Floater text={newText} />);
    expect(screen.getByText(newText)).not.toBeNull();
  });

  it('renders with correct text via child', () => {
    render(<Floater>{defaultText}</Floater>);
    expect(screen.getByText(defaultText)).not.toBeNull();
  });

  it('calls function on click', () => {
    const onClick = jest.fn();
    render(<Floater text={defaultText} onClick={onClick} />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call function on click when disabled', () => {
    const onClick = jest.fn();
    render(<Floater text={defaultText} onClick={onClick} />);
    fireEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
