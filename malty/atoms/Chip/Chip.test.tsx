import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { globalTheme as defaultTheme } from '@carlsberggroup/malty.theme.malty-theme-provider';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Chip } from './Chip';
import { ChipSize } from './Chip.types';

const defaultLabel = 'label';

describe('chip', () => {
  it('renders with correct text', () => {
    render(<Chip selected={false} label={defaultLabel} />);

    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
  });

  it('calls function onChange', () => {
    const onChange = jest.fn();

    render(<Chip selected={false} label={defaultLabel} onChange={onChange} />);

    userEvent.click(screen.getByText(defaultLabel));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('calls function onClick', () => {
    const onClick = jest.fn();
    render(<Chip selected={false} label={defaultLabel} onChange={onClick} />);

    userEvent.click(screen.getByText(defaultLabel));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders with the given test id', () => {
    render(<Chip selected={false} label={defaultLabel} dataTestId="chip" />);

    expect(screen.getByTestId('chip')).toBeVisible();
  });

  it('displays add button', () => {
    render(<Chip selected={false} label={defaultLabel} showAction />);

    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('icon-Plus')).toBeVisible();
  });

  it('checks if size is XSmall', () => {
    render(<Chip selected={false} label={defaultLabel} size={ChipSize.XSmall} dataTestId="chip" />);

    expect(screen.getByTestId('chip')).toHaveStyle(
      `
        height: ${defaultTheme.sizes.m.value};
      `
    );
  });

  it('checks if size is Small', () => {
    render(<Chip selected={false} label={defaultLabel} size={ChipSize.Small} dataTestId="chip" />);

    expect(screen.getByTestId('chip')).toHaveStyle(
      `
        height: ${defaultTheme.sizes.l.value};
      `
    );
  });

  it('checks if size is Medium', () => {
    render(<Chip selected={false} label={defaultLabel} size={ChipSize.Medium} dataTestId="chip" />);

    expect(screen.getByTestId('chip')).toHaveStyle(
      `
        height: ${defaultTheme.sizes.xl.value};
      `
    );
  });

  it('checks if its displaying the Alert Icon', () => {
    render(<Chip selected={false} label={defaultLabel} icon={IconName.Alert} dataTestId="chip" />);

    expect(screen.getByTestId('icon-Alert')).toBeVisible();
  });

  it('checks if chip is disabled', () => {
    const onClick = jest.fn();
    render(<Chip selected={false} label={defaultLabel} disabled dataTestId="chip" />);

    // TODO: remove skipPointerEventsCheck flag when user-event is bumped
    userEvent.click(screen.getByTestId('chip'), undefined, { skipPointerEventsCheck: true });

    expect(screen.getByTestId('chip')).toHaveAttribute('disabled', '');
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('checks if chip is readOnly', () => {
    const onClick = jest.fn();
    render(<Chip selected={false} label={defaultLabel} readOnly dataTestId="chip" />);

    // TODO: remove skipPointerEventsCheck flag when user-event is bumped
    userEvent.click(screen.getByTestId('chip'), undefined, { skipPointerEventsCheck: true });

    expect(screen.getByTestId('chip')).toHaveAttribute('readonly', '');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
