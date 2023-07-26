import { IconName } from '@carlsberggroup/malty.atoms.icon';
import { render } from '@carlsberggroup/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Chip } from './Chip';

const defaultLabel = 'label';

describe('Chip', () => {
  it('should render with correct text', () => {
    render(<Chip selected={false} label={defaultLabel} />);

    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
  });

  it('should call function onChange', () => {
    const onChange = jest.fn();

    render(<Chip selected={false} label={defaultLabel} onChange={onChange} />);

    userEvent.click(screen.getByText(defaultLabel));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should call function onClick', () => {
    const onClick = jest.fn();
    render(<Chip selected={false} label={defaultLabel} onChange={onClick} />);

    userEvent.click(screen.getByText(defaultLabel));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should render with the given test id', () => {
    render(<Chip selected={false} label={defaultLabel} dataTestId="chip" />);

    expect(screen.getByTestId('chip')).toBeVisible();
  });

  it('should display add button', () => {
    render(<Chip selected={false} label={defaultLabel} showAction />);

    expect(screen.getByText(defaultLabel)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByTestId('icon-Plus')).toBeVisible();
  });

  it('should check if its displaying the Alert Icon', () => {
    render(<Chip selected={false} label={defaultLabel} icon={IconName.Alert} dataTestId="chip" />);

    expect(screen.getByTestId('icon-Alert')).toBeVisible();
  });

  it('should check if chip is disabled', () => {
    const onClick = jest.fn();
    render(<Chip selected={false} label={defaultLabel} disabled dataTestId="chip" />);

    // TODO: remove skipPointerEventsCheck flag when user-event is bumped
    userEvent.click(screen.getByTestId('chip'), undefined, { skipPointerEventsCheck: true });

    expect(screen.getByTestId('chip')).toHaveAttribute('disabled', '');
    expect(onClick).toHaveBeenCalledTimes(0);
  });

  it('should check if chip is readOnly', () => {
    const onClick = jest.fn();
    render(<Chip selected={false} label={defaultLabel} readOnly dataTestId="chip" />);

    // TODO: remove skipPointerEventsCheck flag when user-event is bumped
    userEvent.click(screen.getByTestId('chip'), undefined, { skipPointerEventsCheck: true });

    expect(screen.getByTestId('chip')).toHaveAttribute('readonly', '');
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
