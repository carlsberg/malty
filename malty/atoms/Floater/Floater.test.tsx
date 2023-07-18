import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Floater } from './Floater';
import { FloaterColor } from './Floater.types';

const defaultText = 'Submit';
const newText = 'Go';

describe('floater', () => {
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
    userEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call function on click when disabled', () => {
    const onClick = jest.fn();
    render(<Floater text={defaultText} onClick={onClick} />);
    userEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('checks if Camera Icon is visible when selected', () => {
    render(<Floater text={defaultText} icon={IconName.Camera} />);

    expect(screen.getByTestId('icon-Camera')).toBeVisible();
  });

  it('checks if floater has color digital black', () => {
    render(<Floater color={FloaterColor.DigitalBlack}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.colours.default['digital-black'].value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('checks if floater has color themePrimary', () => {
    render(<Floater color={FloaterColor.ThemePrimary}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.theme.themePrimary.value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('checks if floater has color themeSecondary', () => {
    render(<Floater color={FloaterColor.ThemeSecondary}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.theme.themeSecondary.value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('checks if floater has color themeTertiary', () => {
    render(<Floater color={FloaterColor.ThemeTertiary}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.theme.themeTertiary.value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('checks if tabIndex has the correct assigned value', () => {
    render(
      <Floater tabIndex={1} dataTestId="floater">
        {defaultText}
      </Floater>
    );

    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '1');
  });

  it('checks if dataTestId is set correctly', () => {
    render(<Floater dataTestId="floater">{defaultText}</Floater>);

    expect(screen.getByTestId('floater')).toBeVisible();
  });
});
