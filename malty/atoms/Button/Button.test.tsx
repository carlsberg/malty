import { render } from '@carlsberg/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from './Button';
import { ButtonStyle, ButtonType } from './Button.types';

const defaultText = 'Submit';
const newText = 'Go';

describe('Button', () => {
  it('should render with correct text', () => {
    const { rerender } = render(<Button text={defaultText} style={ButtonStyle.Primary} />);

    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Button text={newText} style={ButtonStyle.Primary} />);

    expect(screen.getByText(newText)).not.toBeNull();
  });

  it('should render with correct text via child', () => {
    render(<Button style={ButtonStyle.Primary}>{defaultText}</Button>);

    expect(screen.getByText(defaultText)).not.toBeNull();
  });

  it('should call function on click', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} style={ButtonStyle.Primary} onClick={onClick} />);
    fireEvent.click(screen.getByText(defaultText));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call function on click when disabled', () => {
    const onClick = jest.fn();
    render(<Button text={defaultText} style={ButtonStyle.Primary} onClick={onClick} disabled />);
    fireEvent.click(screen.getByText(defaultText));

    expect(onClick).toHaveBeenCalledTimes(0);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('should check if its a default type button', () => {
    render(
      <Button style={ButtonStyle.Primary} type={ButtonType.Default}>
        {defaultText}
      </Button>
    );

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  it('should check if its a submit type button', () => {
    render(
      <Button style={ButtonStyle.Primary} type={ButtonType.Submit}>
        {defaultText}
      </Button>
    );

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  it('should check if its a reset type button', () => {
    render(
      <Button style={ButtonStyle.Primary} type={ButtonType.Reset}>
        {defaultText}
      </Button>
    );

    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
  });

  it('should check if button is loading', () => {
    render(
      <Button style={ButtonStyle.Primary} loading dataTestId="button">
        {defaultText}
      </Button>
    );

    expect(screen.getByTestId('button-loading')).toBeVisible();
  });

  it('should check if loading icon is showing up when button is loading', () => {
    render(
      <Button style={ButtonStyle.Primary} loading dataTestId="button">
        {defaultText}
      </Button>
    );

    expect(screen.getByTestId('undefined-pending-icon')).toBeVisible();
  });

  it('should call function on key up', () => {
    const onKeyUp = jest.fn();

    render(<Button text={defaultText} style={ButtonStyle.Primary} onKeyUp={onKeyUp} />);

    userEvent.type(screen.getByText(defaultText), '{enter}');

    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
});
