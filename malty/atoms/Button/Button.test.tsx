import { render } from '@carlsberggroup/malty.utils.test';
import { fireEvent, screen } from '@testing-library/react';
import React from 'react';
import { Button } from './Button';
import { ButtonStyle, ButtonColor, ButtonType } from './Button.types';
import { Icon } from '@carlsberggroup/malty.atoms.icon';
import { IconName, IconColor, IconSize, IconProps } from '@carlsberggroup/malty.atoms.icon';
import userEvent from '@testing-library/user-event';
const defaultText = 'Submit';
const newText = 'Go';

describe('button', () => {
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
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('checks if button has color digital black', () => {
    render(<Button style={ButtonStyle.Primary} color={ButtonColor.DigitalBlack}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('color', 'digital-black');
  });

  it('checks if button has color theme primary', () => {
    render(<Button style={ButtonStyle.Primary} color={ButtonColor.ThemePrimary}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('color', 'themePrimary')
  });

  it('checks if button has color theme secondary', () => {
    render(<Button style={ButtonStyle.Primary} color={ButtonColor.ThemeSecondary}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('color', 'themeSecondary')
  });

  it('checks if button has color theme tertiary', () => {
    render(<Button style={ButtonStyle.Primary} color={ButtonColor.ThemeTertiary}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('color', 'themeTertiary')
  });

  it('checks if its a default type button', () => {
    render(<Button style={ButtonStyle.Primary} type={ButtonType.Default}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  });

  it('checks if its a submit type button', () => {
    render(<Button style={ButtonStyle.Primary} type={ButtonType.Submit}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  });

  it('checks if its a reset type button', () => {
    render(<Button style={ButtonStyle.Primary} type={ButtonType.Reset}>{defaultText}</Button>);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'reset')
  });

  it('check if button is loading', () => {
    render(<Button style={ButtonStyle.Primary} loading dataTestId='button'>{defaultText}</Button>);

    expect(screen.getByTestId('button-loading')).toBeVisible()
  });

  it('check if loading icon is showing up when button is loading', () => {
    render(<Button style={ButtonStyle.Primary} loading dataTestId='button'>{defaultText}</Button>);

    expect(screen.getByTestId('undefined-pending-icon')).toBeVisible()
  });

  it('calls function on key up', () => {
    const onKeyUp = jest.fn();

    render(<Button text={defaultText} style={ButtonStyle.Primary} onKeyUp={onKeyUp} />);

    userEvent.type(screen.getByText(defaultText), '{enter}')
    
    expect(onKeyUp).toHaveBeenCalledTimes(1);
  });
});
