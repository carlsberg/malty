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
  it('should render with correct text', () => {
    const { rerender } = render(<Floater text={defaultText} />);
    expect(screen.getByText(defaultText)).not.toBeNull();

    rerender(<Floater text={newText} />);
    expect(screen.getByText(newText)).not.toBeNull();
  });

  it('should render with correct text via child', () => {
    render(<Floater>{defaultText}</Floater>);
    expect(screen.getByText(defaultText)).not.toBeNull();
  });

  it('should call function on click', () => {
    const onClick = jest.fn();
    render(<Floater text={defaultText} onClick={onClick} />);
    userEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call function on click when disabled', () => {
    const onClick = jest.fn();
    render(<Floater text={defaultText} onClick={onClick} />);
    userEvent.click(screen.getByText(defaultText));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should have Camera Icon visible', () => {
    render(<Floater text={defaultText} icon={IconName.Camera} />);

    expect(screen.getByTestId('icon-Camera')).toBeVisible();
  });

  it('should have color digital black', () => {
    render(<Floater color={FloaterColor.DigitalBlack}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.colours.default['digital-black'].value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('should have color themePrimary', () => {
    render(<Floater color={FloaterColor.ThemePrimary}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.theme.themePrimary.value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('should have color themeSecondary', () => {
    render(<Floater color={FloaterColor.ThemeSecondary}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.theme.themeSecondary.value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('should have color themeTertiary', () => {
    render(<Floater color={FloaterColor.ThemeTertiary}>{defaultText}</Floater>);

    expect(screen.getByRole('button')).toHaveStyle(
      `
        background-color: ${defaultTheme.colors.theme.themeTertiary.value};
        color: ${defaultTheme.colors.colours.default.white.value}
      `
    );
  });

  it('should have tabIndex with the correct assigned value', () => {
    render(
      <Floater tabIndex={1} dataTestId="floater">
        {defaultText}
      </Floater>
    );

    expect(screen.getByRole('button')).toHaveAttribute('tabindex', '1');
  });

  it('should have dataTestId set correctly', () => {
    render(<Floater dataTestId="floater">{defaultText}</Floater>);

    expect(screen.getByTestId('floater')).toBeVisible();
  });
});
