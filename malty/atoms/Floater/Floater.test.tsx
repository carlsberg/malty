import { ArrowSmallUp } from '@carlsberg/malty.icons.arrow-small-up';
import { render } from '@carlsberg/malty.utils.test';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Floater } from './Floater';

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

  it('should have ArrowSmallUp Icon visible', () => {
    const iconDataTestId = 'arrow-small-up';

    render(<Floater text={defaultText} icon={<ArrowSmallUp dataTestId={iconDataTestId} />} />);

    expect(screen.getByTestId(iconDataTestId)).toBeVisible();
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
